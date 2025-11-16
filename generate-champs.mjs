// generate-champs.mjs
import fs from "node:fs/promises";

const VERSION = "15.22.1"; // current ddragon version with Yunara (patch 15.22)

// -------------------------------
// Load existing roles from champions.generated.js
// -------------------------------
async function loadExistingRoles() {
  try {
    const text = await fs.readFile("champions.generated.js", "utf8");

    // champions.generated.js looks like:
    // const CHAMPIONS = [ ... ];
    // window.CHAMPIONS = CHAMPIONS;
    const start = text.indexOf("[");
    const end = text.lastIndexOf("]");

    if (start === -1 || end === -1) {
      console.warn("Could not find JSON array in champions.generated.js");
      return new Map();
    }

    const json = text.slice(start, end + 1);
    const arr = JSON.parse(json);

    const map = new Map();
    for (const champ of arr) {
      if (champ.id && Array.isArray(champ.roles)) {
        map.set(champ.id.toLowerCase(), champ.roles);
      }
    }

    return map;
  } catch (err) {
    console.warn(
      "Could not load existing champions.generated.js; falling back to laneGuess roles.",
      err
    );
    return new Map();
  }
}

// -------------------------------
// Fallback lane guess if no saved roles exist yet
// -------------------------------
const laneGuess = (tags, name) => {
  const t = new Set(tags || []);

  if (name === "Yunara") return "adc";
  if (["Smolder", "Zeri", "Jinx", "Ashe", "Ezreal", "Kai'Sa", "Caitlyn"].includes(name)) return "adc";
  if (["Lee Sin", "Vi", "Amumu", "Kayn", "Nidalee", "Kha'Zix"].includes(name)) return "jungle";
  if (["Leona", "Thresh", "Nautilus", "Rell", "Lulu", "Nami", "Yuumi"].includes(name)) return "support";
  if (["Yasuo", "Yone", "Ahri", "Syndra", "Azir", "Orianna"].includes(name)) return "mid";
  if (["Garen", "Darius", "Camille", "Jayce", "Renekton"].includes(name)) return "top";

  // fallback: generic
  return "all";
};

// -------------------------------
// Build champion select sound URL
// -------------------------------
function buildSoundUrl(displayName) {
  // spaces -> "_", apostrophes -> "%27"
  const fileName = displayName
    .replace(/ /g, "_")
    .replace(/'/g, "%27");

  return `https://wiki.leagueoflegends.com/en-us/images/${fileName}_Select.ogg`;
}

// -------------------------------
// Main
// -------------------------------
const main = async () => {
  const existingRolesMap = await loadExistingRoles();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/en_US/champion.json`
  );
  const data = await res.json();

  const champs = Object.values(data.data)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => {
      const idLower = c.id.toLowerCase();

      // 1. Try to use manually-edited roles from champions.generated.js
      let roles = existingRolesMap.get(idLower);

      // 2. Fallback: generate roles from laneGuess if missing
      if (!roles) {
        const baseRole = laneGuess(c.tags, c.name); // "top" | "jungle" | ... | "all"
        roles = ["all"];
        if (baseRole && baseRole !== "all" && !roles.includes(baseRole)) {
          roles.push(baseRole);
        }
      }

      // 3. Ensure "all" is always present
      if (!roles.includes("all")) {
        roles = ["all", ...roles];
      }

      return {
        id: idLower, // "aatrox"
        name: c.name, // "Aatrox"
        roles, // e.g. ["all", "top", "jungle"]
        imageUrl: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${c.image.full}`,
        sound: buildSoundUrl(c.name),
      };
    });

  console.log(`// Total champions: ${champs.length}`);
  console.log("const CHAMPIONS = " + JSON.stringify(champs, null, 2) + ";");
  console.log("window.CHAMPIONS = CHAMPIONS;");

  const fileContent =
    "const CHAMPIONS = " +
    JSON.stringify(champs, null, 2) +
    ";\n\nwindow.CHAMPIONS = CHAMPIONS;\n";

  await fs.writeFile("champions.generated.js", fileContent);
};

main().catch(console.error);
