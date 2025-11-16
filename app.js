// ----------------------
// Champion data
// ----------------------
// NOTE: Add the full champion list here. Each entry:
// { id, name, role: "top|jungle|mid|adc|support", imageUrl }

// import { CHAMPIONS } from "./champions.generated.js";

// LocalStorage key
const STORAGE_KEY = "eloTarotProfiles";

// App state
let profiles = [];
let activeProfileId = null;
// multi-role selection
const ROLE_KEYS = ["top", "jungle", "mid", "adc", "support"];
let selectedRoles = new Set(["all"]);
let currentCards = [];
let revealedCount = 0;
let selectedChampionId = null;
let modalOpen = false;
// Card options
let maxCardsToReveal = 3;    // 1–5 from the slider
let wildcardEnabled = true;  // controlled by toggle

// DOM refs
let profileSelect;
let addProfileBtn;
let deleteProfileBtn;
let editExclusionsBtn;
let beginReadingBtn;
let roleButtonsContainer;
let cardsRow;
let tarotResult;
let resultText;
let drawAgainBtn;
let tarotHint;
let exclusionModal;
let closeModalBtn;
let champListContainer;
let champSearchInput;
let clearExclusionsBtn;
let saveExclusionsBtn;
let cardCountSlider;
let cardCountValue;
let wildcardToggle;

// Special Wildcard card – appears as an extra possible option in the pool
const WILDCARD_CARD = {
  id: "__wildcard__",
  name: "Wildcard",
  roles: ["all", "top", "jungle", "mid", "adc", "support"], // matches every filter
  imageUrl: "images/wildcard.jpg",   // put your wildcard art here
  isWildcard: true,
};

// ----------------------
// Helpers
// ----------------------

function syncSlotsWithCardCount(resetFaces = false) {
  const slots = Array.from(cardsRow.querySelectorAll(".tarot-card-slot"));
  const count = Math.max(1, Math.min(slots.length, maxCardsToReveal || 3));

  slots.forEach((slot, index) => {
    if (index < count) {
      slot.classList.remove("hidden");

      if (resetFaces) {
        // Clear selection and flip back
        slot.classList.remove("selected");
        const cardEl = slot.querySelector(".tarot-card");
        if (cardEl) {
          cardEl.classList.remove("is-flipped");
        }

        // Clear any previous champion face
        const img = slot.querySelector(".tarot-card-image");
        const nameSpan = slot.querySelector(".tarot-card-name");
        const roleSpan = slot.querySelector(".tarot-card-role");

        if (img) {
          img.src = "";
          img.alt = "";
        }
        if (nameSpan) nameSpan.textContent = "";
        if (roleSpan) roleSpan.textContent = "";
      }
    } else {
      // Hide unused slots
      slot.classList.add("hidden");
    }
  });
}

// --- Sound effects ---
const activeSounds = [];
let currentSelectionSound = null;

const flipSound = new Audio("sounds/card-flip.mp3");
flipSound.volume = 0.3;

const chooseSound = new Audio("sounds/card-choose.mp3");
chooseSound.volume = 0.1;

// helper so quick repeated plays don't cut each other off
function playSound(baseAudio, { trackSelection = false } = {}) {
  try {
    const a = baseAudio.cloneNode();
    a.volume = baseAudio.volume;

    // keep track so we can stop everything later
    activeSounds.push(a);

    // if this is a selection sound, ensure only one at a time
    if (trackSelection) {
      if (currentSelectionSound && currentSelectionSound !== a) {
        try {
          currentSelectionSound.pause();
          currentSelectionSound.currentTime = 0;
        } catch (_) {}
      }
      currentSelectionSound = a;
    }

    // cleanup when the sound finishes
    a.addEventListener("ended", () => {
      const idx = activeSounds.indexOf(a);
      if (idx !== -1) activeSounds.splice(idx, 1);
      if (currentSelectionSound === a) currentSelectionSound = null;
    });

    a.play();
  } catch (err) {
    // ignore if browser blocks autoplay until user gesture, etc.
  }
}

function stopAllSounds() {
  activeSounds.forEach((audio) => {
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch (_) {}
  });
  activeSounds.length = 0;
  currentSelectionSound = null;
}

document.addEventListener("DOMContentLoaded", () => {
  // Grab elements
  profileSelect = document.getElementById("profileSelect");
  addProfileBtn = document.getElementById("addProfileBtn");
  deleteProfileBtn = document.getElementById("deleteProfileBtn");
  editExclusionsBtn = document.getElementById("editExclusionsBtn");
  beginReadingBtn = document.getElementById("beginReadingBtn");
  roleButtonsContainer = document.getElementById("roleButtons");
  cardsRow = document.getElementById("tarotCardsRow");
  tarotResult = document.getElementById("tarotResult");
  resultText = document.getElementById("resultText");
  drawAgainBtn = document.getElementById("drawAgainBtn");
  tarotHint = document.getElementById("tarotHint");
  exclusionModal = document.getElementById("exclusionModal");
  closeModalBtn = document.getElementById("closeModalBtn");
  champListContainer = document.getElementById("champListContainer");
  champSearchInput = document.getElementById("champSearchInput");
  clearExclusionsBtn = document.getElementById("clearExclusionsBtn");
  saveExclusionsBtn = document.getElementById("saveExclusionsBtn");
  cardCountSlider = document.getElementById("cardCountSlider");
  cardCountValue = document.getElementById("cardCountValue");
  wildcardToggle = document.getElementById("wildcardToggle");

  // Init
  loadProfiles();
  renderProfileSelect();
  buildChampionListUI();

  // Initial values
  maxCardsToReveal = parseInt(cardCountSlider.value, 10) || 3;
  cardCountValue.textContent = maxCardsToReveal;
  wildcardEnabled = wildcardToggle.checked;

  // Make sure only the initial number of cards are visible on load
  syncSlotsWithCardCount(true);
  
  // Slider: update value + label
  cardCountSlider.addEventListener("input", () => {
  maxCardsToReveal = parseInt(cardCountSlider.value, 10) || 1;
  cardCountValue.textContent = maxCardsToReveal;

  // Reset any ongoing reading
  stopAllSounds?.();               // if you have this helper
  selectedChampionId = null;
  currentCards = [];

  if (tarotResult) {
    tarotResult.classList.add("hidden");
  }
  if (tarotHint) {
    tarotHint.textContent =
      "Click the leftmost card to reveal the first champion.";
  }

  // Visually reset and show/hide slots to match the slider
  syncSlotsWithCardCount(true);
});

// Toggle: update wildcard flag
wildcardToggle.addEventListener("change", () => {
wildcardEnabled = wildcardToggle.checked;
});

  // Event listeners
  profileSelect.addEventListener("change", () => {
    activeProfileId = profileSelect.value;
    saveProfiles();
    refreshChampionCheckboxes();
  });

  addProfileBtn.addEventListener("click", handleAddProfile);
  deleteProfileBtn.addEventListener("click", handleDeleteProfile);
  editExclusionsBtn.addEventListener("click", () => openModal(true));
  closeModalBtn.addEventListener("click", () => openModal(false));
  clearExclusionsBtn.addEventListener("click", handleClearExclusions);
  saveExclusionsBtn.addEventListener("click", () => openModal(false));

  champSearchInput.addEventListener("input", handleSearchChange);

  beginReadingBtn.addEventListener("click", handleBeginReading);
  drawAgainBtn.addEventListener("click", handleBeginReading);

  roleButtonsContainer.addEventListener("click", (e) => {
    if (e.target.matches("[data-role]")) {
      setRoleFilter(e.target.dataset.role);
    }
  });

  cardsRow.addEventListener("click", handleCardClick);

  document.addEventListener("keydown", (e) => {
    if (modalOpen && e.key === "Escape") openModal(false);
  });
});

// ----------------------
// Profiles
// ----------------------
function loadProfiles() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      profiles = JSON.parse(raw);
    }
  } catch (err) {
    console.error("Failed to load profiles", err);
  }

  if (!Array.isArray(profiles) || profiles.length === 0) {
    // Default profile
    profiles = [
      {
        id: "default",
        name: "Default",
        excludedChampionIds: [],
      },
    ];
  }

  if (!activeProfileId) {
    activeProfileId = profiles[0].id;
  }
}

function saveProfiles() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  } catch (err) {
    console.error("Failed to save profiles", err);
  }
}

function getActiveProfile() {
  return profiles.find((p) => p.id === activeProfileId) || profiles[0];
}

function renderProfileSelect() {
  profileSelect.innerHTML = "";
  profiles.forEach((p) => {
    const option = document.createElement("option");
    option.value = p.id;
    option.textContent = p.name;
    profileSelect.appendChild(option);
  });
  profileSelect.value = activeProfileId;
}

function handleAddProfile() {
  const name = prompt("Profile name:");
  if (!name) return;

  const id = "prof_" + Date.now();
  profiles.push({
    id,
    name: name.trim(),
    excludedChampionIds: [],
  });
  activeProfileId = id;
  saveProfiles();
  renderProfileSelect();
  refreshChampionCheckboxes();
}

function handleDeleteProfile() {
  if (profiles.length === 1) {
    alert("You must have at least one profile.");
    return;
  }
  const profile = getActiveProfile();
  const ok = confirm(`Delete profile "${profile.name}"?`);
  if (!ok) return;

  profiles = profiles.filter((p) => p.id !== profile.id);
  activeProfileId = profiles[0].id;
  saveProfiles();
  renderProfileSelect();
  refreshChampionCheckboxes();
}

function updateProfileExclusionsFromUI() {
  const profile = getActiveProfile();
  const checkedBoxes = champListContainer.querySelectorAll(
    '.champ-row input[type="checkbox"]:checked'
  );
  const ids = Array.from(checkedBoxes).map((cb) => cb.dataset.champId);
  profile.excludedChampionIds = ids;
  saveProfiles();
}

// ----------------------
// Roles
// ----------------------
function setRoleFilter(role) {
  // Clicking ALL resets to just "all"
  if (role === "all") {
    selectedRoles = new Set(["all"]);
  } else {
    // If 'all' was selected, clear it when choosing specific roles
    if (selectedRoles.has("all")) {
      selectedRoles.delete("all");
    }

    // Toggle this role on/off
    if (selectedRoles.has(role)) {
      selectedRoles.delete(role);
    } else {
      selectedRoles.add(role);
    }

    // If user toggled everything off, fall back to ALL
    if (selectedRoles.size === 0) {
      selectedRoles.add("all");
    }
  }

  // Update button active state
  const buttons = roleButtonsContainer.querySelectorAll(".role-btn");
  buttons.forEach((btn) => {
    const btnRole = btn.dataset.role;

    if (btnRole === "all") {
      btn.classList.toggle("role-btn-active", selectedRoles.has("all"));
    } else {
      btn.classList.toggle("role-btn-active", selectedRoles.has(btnRole));
    }
  });
}

// ----------------------
// Champion list in modal
// ----------------------
function buildChampionListUI() {
  champListContainer.innerHTML = "";

  // Make one big grid with all champs
  const grid = document.createElement("div");
  grid.className = "champ-list-grid";

  // Sort alphabetically by name
  const champsSorted = [...CHAMPIONS].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  champsSorted.forEach((champ) => {
    const row = document.createElement("div");
    row.className = "champ-row";

    const label = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.champId = champ.id;

    const img = document.createElement("img");
    img.src = champ.imageUrl;
    img.alt = champ.name;

    const span = document.createElement("span");
    span.textContent = champ.name;

    label.appendChild(checkbox);
    label.appendChild(img);
    label.appendChild(span);

    row.appendChild(label);
    grid.appendChild(row);
  });

  champListContainer.appendChild(grid);

  // Sync checkboxes with current profile exclusions
  refreshChampionCheckboxes();

  // Make check/uncheck update the profile
  champListContainer.addEventListener("change", (e) => {
    if (e.target.matches('input[type="checkbox"][data-champ-id]')) {
      updateProfileExclusionsFromUI();
    }
  });
}

function refreshChampionCheckboxes() {
  const profile = getActiveProfile();
  const excluded = new Set(profile.excludedChampionIds || []);

  champListContainer
    .querySelectorAll('input[type="checkbox"][data-champ-id]')
    .forEach((cb) => {
      cb.checked = excluded.has(cb.dataset.champId);
    });
}

function handleSearchChange() {
  const query = champSearchInput.value.toLowerCase();
  const rows = champListContainer.querySelectorAll(".champ-row");
  rows.forEach((row) => {
    const nameEl = row.querySelector("span");
    const name = nameEl ? nameEl.textContent.toLowerCase() : "";
    row.style.display = name.includes(query) ? "" : "none";
  });
}

function handleClearExclusions() {
  const ok = confirm("Clear all exclusions for this profile?");
  if (!ok) return;
  const profile = getActiveProfile();
  profile.excludedChampionIds = [];
  saveProfiles();
  refreshChampionCheckboxes();
}

// ----------------------
// Modal open/close
// ----------------------
function openModal(show) {
  modalOpen = show;
  exclusionModal.classList.toggle("hidden", !show);
  if (show) {
    champSearchInput.value = "";
    handleSearchChange();
  }
}

// ----------------------
// Tarot logic
// ----------------------
function handleBeginReading() {
  // Stop any currently playing sounds when starting a new reading
  stopAllSounds();

  const profile = getActiveProfile();
  const excluded = new Set(profile.excludedChampionIds || []);

  // Make sure champion data is actually there
  if (!Array.isArray(CHAMPIONS) || CHAMPIONS.length === 0) {
    console.error("CHAMPIONS array is missing or empty");
    alert("Champion data failed to load.");
    return;
  }

  // Build the pool based on exclusions + role
  let pool = CHAMPIONS.filter((c) => !excluded.has(c.id));
  
  const usingAll =
    selectedRoles.has("all") || selectedRoles.size === 0;
  
  if (!usingAll) {
    const rolesArray = Array.from(selectedRoles);
    pool = pool.filter(
      (c) =>
        Array.isArray(c.roles) &&
        c.roles.some((r) => rolesArray.includes(r))
    );
  }
  
  // Determine how many cards we can actually deal
  const slots = cardsRow.querySelectorAll(".tarot-card-slot");
  const requested = maxCardsToReveal;
  const cardsToDeal = Math.min(requested, slots.length, pool.length);
  
  if (cardsToDeal < 1) {
    alert(
      "Not enough champions in your pool for this role and exclusions.\n\n" +
        "Try clearing some exclusions or selecting more roles."
    );
    return;
  }

  // Turn NodeList into array so we can slice
  const allSlots = Array.from(slots);
  
  // Show only the first N slots, hide the rest
  const visibleSlots = allSlots.slice(0, cardsToDeal);
  const hiddenSlots = allSlots.slice(cardsToDeal);
  
  visibleSlots.forEach((slot) => {
    slot.classList.remove("hidden");
  });
  
  hiddenSlots.forEach((slot) => {
    slot.classList.add("hidden");
    // Clean up any previous state on hidden slots
    slot.classList.remove("selected");
    const cardEl = slot.querySelector(".tarot-card");
    if (cardEl) {
      cardEl.classList.remove("is-flipped");
    }
  });

  // Build the selection pool, optionally including the Wildcard
  let selectionPool = [...pool];
  if (wildcardEnabled) {
    selectionPool.push(WILDCARD_CARD);
  }
  
  currentCards = [];
  const temp = [...selectionPool];
  
  for (let i = 0; i < cardsToDeal; i++) {
    if (temp.length === 0) break;
    const idx = Math.floor(Math.random() * temp.length);
    currentCards.push(temp[idx]);
    temp.splice(idx, 1);
  }

  revealedCount = 0;
  selectedChampionId = null;
  tarotResult.classList.add("hidden");
  tarotHint.textContent =
    "Click the leftmost card to reveal the first champion.";

// 1) First pass: clear selection + flip all cards back
visibleSlots.forEach((slot) => {
  slot.classList.remove("selected");
  const cardEl = slot.querySelector(".tarot-card");
  if (cardEl) {
    cardEl.classList.remove("is-flipped");
  }
});

// 2) After the flip-back animation finishes, update the faces
const flipDurationMs = 700; // match your CSS transition time
setTimeout(() => {
  visibleSlots.forEach((slot, index) => {
    const champ = currentCards[index];
    if (!champ) return;

    const isWild = champ.isWildcard === true;

    const img = slot.querySelector(".tarot-card-image");
    const nameSpan = slot.querySelector(".tarot-card-name");
    const roleSpan = slot.querySelector(".tarot-card-role");

    if (img) {
      img.src = champ.imageUrl;
      img.alt = isWild ? "Wildcard" : champ.name;
    }

    if (nameSpan) {
      nameSpan.textContent = isWild ? "Wildcard" : champ.name;
    }

    if (roleSpan) {
      if (isWild) {
        roleSpan.textContent = "ANY ROLE";
      } else {
        const visibleRoles = champ.roles.filter((r) => r !== "all");
        roleSpan.textContent =
          visibleRoles.length > 0
            ? visibleRoles
                .map((r) => (r === "adc" ? "ADC" : r.toUpperCase()))
                .join(" / ")
            : "ALL";
      }
    }
  });

  tarotHint.textContent =
    "Click the leftmost card to reveal the first champion.";
}, flipDurationMs);
}

function handleCardClick(e) {
  const slot = e.target.closest(".tarot-card-slot");
  if (!slot || slot.classList.contains("hidden")) return;

  if (!currentCards.length) return;

  const index = Number(slot.dataset.index);
  if (!Number.isInteger(index) || index < 0 || index >= currentCards.length) {
    return;
  }

  if (Number.isNaN(index)) return;

  if (index === revealedCount) {
    // Reveal in order
    revealCard(slot);
    revealedCount++;

    if (revealedCount < currentCards.length) {
      tarotHint.textContent = `Now reveal card #${
        revealedCount + 1
      }. (Left to right)`;
    } else {
      tarotHint.textContent =
        "All champions are revealed. Click one to choose your fate.";
    }
    return;
  }

  // Only allow selection once all revealed
  if (revealedCount >= currentCards.length) {
    selectChampion(index);
  }
}

function revealCard(slot) {
  const cardEl = slot.querySelector(".tarot-card");
  cardEl.classList.add("is-flipped");
  playSound(flipSound);
}

function selectChampion(index) {
  const champ = currentCards[index];
  if (!champ) return;

    // --- Sound logic for chosen card ---
    // Wildcard special sound
    if (champ.isWildcard) {
      const audio = new Audio("sounds/wildcard-pick.mp3");
      audio.volume = 0.2;
    playSound(audio, { trackSelection: true });
    // Champion-specific select sound
    } else if (champ.sound) {
      const audio = new Audio(champ.sound);
      audio.volume = 0.2;
    playSound(audio, { trackSelection: true });
    }

  selectedChampionId = champ.id;

  // Visual highlight
  const slots = cardsRow.querySelectorAll(".tarot-card-slot");
  slots.forEach((slot, i) => {
    slot.classList.toggle("selected", i === index);
  });

    if (champ.isWildcard) {
    resultText.innerHTML =
        `You have drawn the <strong>Wildcard</strong> card. ` +
        `You may pick <strong>any champion</strong> you like!`;
    } else {
    resultText.innerHTML =
        `You have chosen <strong>${champ.name}</strong>. GLHF!`;
    }

    tarotHint.textContent =
    "You may lock this in, or draw again for a new reading.";
}
