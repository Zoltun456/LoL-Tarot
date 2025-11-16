const CHAMPIONS = [
  {
    "id": "aatrox",
    "name": "Aatrox",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Aatrox.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Aatrox_Select.ogg"
  },
  {
    "id": "ahri",
    "name": "Ahri",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ahri.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ahri_Select.ogg"
  },
  {
    "id": "akali",
    "name": "Akali",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Akali.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Akali_Select.ogg"
  },
  {
    "id": "akshan",
    "name": "Akshan",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Akshan.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Akshan_Select.ogg"
  },
  {
    "id": "alistar",
    "name": "Alistar",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Alistar.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Alistar_Select.ogg"
  },
  {
    "id": "ambessa",
    "name": "Ambessa",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ambessa.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ambessa_Select.ogg"
  },
  {
    "id": "amumu",
    "name": "Amumu",
    "roles": [
      "all",
      "jungle",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Amumu.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Amumu_Select.ogg"
  },
  {
    "id": "anivia",
    "name": "Anivia",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Anivia.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Anivia_Select.ogg"
  },
  {
    "id": "annie",
    "name": "Annie",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Annie.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Annie_Select.ogg"
  },
  {
    "id": "aphelios",
    "name": "Aphelios",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Aphelios.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Aphelios_Select.ogg"
  },
  {
    "id": "ashe",
    "name": "Ashe",
    "roles": [
      "all",
      "adc",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ashe.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ashe_Select.ogg"
  },
  {
    "id": "aurelionsol",
    "name": "Aurelion Sol",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/AurelionSol.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Aurelion_Sol_Select.ogg"
  },
  {
    "id": "aurora",
    "name": "Aurora",
    "roles": [
      "all",
      "mid",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Aurora.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Aurora_Select.ogg"
  },
  {
    "id": "azir",
    "name": "Azir",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Azir.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Azir_Select.ogg"
  },
  {
    "id": "bard",
    "name": "Bard",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Bard.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Bard_Select.ogg"
  },
  {
    "id": "belveth",
    "name": "Bel'Veth",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Belveth.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Bel%27Veth_Select.ogg"
  },
  {
    "id": "blitzcrank",
    "name": "Blitzcrank",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Blitzcrank.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Blitzcrank_Select.ogg"
  },
  {
    "id": "brand",
    "name": "Brand",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Brand.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Brand_Select.ogg"
  },
  {
    "id": "braum",
    "name": "Braum",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Braum.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Braum_Select.ogg"
  },
  {
    "id": "briar",
    "name": "Briar",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Briar.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Briar_Select.ogg"
  },
  {
    "id": "caitlyn",
    "name": "Caitlyn",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Caitlyn.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Caitlyn_Select.ogg"
  },
  {
    "id": "camille",
    "name": "Camille",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Camille.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Camille_Select.ogg"
  },
  {
    "id": "cassiopeia",
    "name": "Cassiopeia",
    "roles": [
      "all",
      "mid",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Cassiopeia.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Cassiopeia_Select.ogg"
  },
  {
    "id": "chogath",
    "name": "Cho'Gath",
    "roles": [
      "all",
      "top",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Chogath.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Cho%27Gath_Select.ogg"
  },
  {
    "id": "corki",
    "name": "Corki",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Corki.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Corki_Select.ogg"
  },
  {
    "id": "darius",
    "name": "Darius",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Darius.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Darius_Select.ogg"
  },
  {
    "id": "diana",
    "name": "Diana",
    "roles": [
      "all",
      "mid",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Diana.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Diana_Select.ogg"
  },
  {
    "id": "drmundo",
    "name": "Dr. Mundo",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/DrMundo.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Dr._Mundo_Select.ogg"
  },
  {
    "id": "draven",
    "name": "Draven",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Draven.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Draven_Select.ogg"
  },
  {
    "id": "ekko",
    "name": "Ekko",
    "roles": [
      "all",
      "mid",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ekko.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ekko_Select.ogg"
  },
  {
    "id": "elise",
    "name": "Elise",
    "roles": [
      "all",
      "support",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Elise.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Elise_Select.ogg"
  },
  {
    "id": "evelynn",
    "name": "Evelynn",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Evelynn.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Evelynn_Select.ogg"
  },
  {
    "id": "ezreal",
    "name": "Ezreal",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ezreal.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ezreal_Select.ogg"
  },
  {
    "id": "fiddlesticks",
    "name": "Fiddlesticks",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Fiddlesticks.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Fiddlesticks_Select.ogg"
  },
  {
    "id": "fiora",
    "name": "Fiora",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Fiora.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Fiora_Select.ogg"
  },
  {
    "id": "fizz",
    "name": "Fizz",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Fizz.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Fizz_Select.ogg"
  },
  {
    "id": "galio",
    "name": "Galio",
    "roles": [
      "all",
      "support",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Galio.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Galio_Select.ogg"
  },
  {
    "id": "gangplank",
    "name": "Gangplank",
    "roles": [
      "all",
      "top",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Gangplank.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Gangplank_Select.ogg"
  },
  {
    "id": "garen",
    "name": "Garen",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Garen.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Garen_Select.ogg"
  },
  {
    "id": "gnar",
    "name": "Gnar",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Gnar.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Gnar_Select.ogg"
  },
  {
    "id": "gragas",
    "name": "Gragas",
    "roles": [
      "all",
      "mid",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Gragas.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Gragas_Select.ogg"
  },
  {
    "id": "graves",
    "name": "Graves",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Graves.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Graves_Select.ogg"
  },
  {
    "id": "gwen",
    "name": "Gwen",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Gwen.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Gwen_Select.ogg"
  },
  {
    "id": "hecarim",
    "name": "Hecarim",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Hecarim.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Hecarim_Select.ogg"
  },
  {
    "id": "heimerdinger",
    "name": "Heimerdinger",
    "roles": [
      "all",
      "top",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Heimerdinger.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Heimerdinger_Select.ogg"
  },
  {
    "id": "hwei",
    "name": "Hwei",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Hwei.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Hwei_Select.ogg"
  },
  {
    "id": "illaoi",
    "name": "Illaoi",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Illaoi.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Illaoi_Select.ogg"
  },
  {
    "id": "irelia",
    "name": "Irelia",
    "roles": [
      "all",
      "top",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Irelia.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Irelia_Select.ogg"
  },
  {
    "id": "ivern",
    "name": "Ivern",
    "roles": [
      "all",
      "jungle",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ivern.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ivern_Select.ogg"
  },
  {
    "id": "janna",
    "name": "Janna",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Janna.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Janna_Select.ogg"
  },
  {
    "id": "jarvaniv",
    "name": "Jarvan IV",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/JarvanIV.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Jarvan_IV_Select.ogg"
  },
  {
    "id": "jax",
    "name": "Jax",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Jax.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Jax_Select.ogg"
  },
  {
    "id": "jayce",
    "name": "Jayce",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Jayce.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Jayce_Select.ogg"
  },
  {
    "id": "jhin",
    "name": "Jhin",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Jhin.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Jhin_Select.ogg"
  },
  {
    "id": "jinx",
    "name": "Jinx",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Jinx.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Jinx_Select.ogg"
  },
  {
    "id": "ksante",
    "name": "K'Sante",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/KSante.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/K%27Sante_Select.ogg"
  },
  {
    "id": "kaisa",
    "name": "Kai'Sa",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Kaisa.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kai%27Sa_Select.ogg"
  },
  {
    "id": "kalista",
    "name": "Kalista",
    "roles": [
      "all",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Kalista.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kalista_Select.ogg"
  },
  {
    "id": "karma",
    "name": "Karma",
    "roles": [
      "all",
      "support",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Karma.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Karma_Select.ogg"
  },
  {
    "id": "karthus",
    "name": "Karthus",
    "roles": [
      "all",
      "jungle",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Karthus.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Karthus_Select.ogg"
  },
  {
    "id": "kassadin",
    "name": "Kassadin",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Kassadin.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kassadin_Select.ogg"
  },
  {
    "id": "katarina",
    "name": "Katarina",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Katarina.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Katarina_Select.ogg"
  },
  {
    "id": "kayle",
    "name": "Kayle",
    "roles": [
      "all",
      "top",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Kayle.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kayle_Select.ogg"
  },
  {
    "id": "kayn",
    "name": "Kayn",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Kayn.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kayn_Select.ogg"
  },
  {
    "id": "kennen",
    "name": "Kennen",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Kennen.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kennen_Select.ogg"
  },
  {
    "id": "khazix",
    "name": "Kha'Zix",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Khazix.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kha%27Zix_Select.ogg"
  },
  {
    "id": "kindred",
    "name": "Kindred",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Kindred.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kindred_Select.ogg"
  },
  {
    "id": "kled",
    "name": "Kled",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Kled.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kled_Select.ogg"
  },
  {
    "id": "kogmaw",
    "name": "Kog'Maw",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/KogMaw.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Kog%27Maw_Select.ogg"
  },
  {
    "id": "leblanc",
    "name": "LeBlanc",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Leblanc.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/LeBlanc_Select.ogg"
  },
  {
    "id": "leesin",
    "name": "Lee Sin",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/LeeSin.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Lee_Sin_Select.ogg"
  },
  {
    "id": "leona",
    "name": "Leona",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Leona.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Leona_Select.ogg"
  },
  {
    "id": "lillia",
    "name": "Lillia",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Lillia.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Lillia_Select.ogg"
  },
  {
    "id": "lissandra",
    "name": "Lissandra",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Lissandra.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Lissandra_Select.ogg"
  },
  {
    "id": "lucian",
    "name": "Lucian",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Lucian.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Lucian_Select.ogg"
  },
  {
    "id": "lulu",
    "name": "Lulu",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Lulu.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Lulu_Select.ogg"
  },
  {
    "id": "lux",
    "name": "Lux",
    "roles": [
      "all",
      "support",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Lux.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Lux_Select.ogg"
  },
  {
    "id": "malphite",
    "name": "Malphite",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Malphite.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Malphite_Select.ogg"
  },
  {
    "id": "malzahar",
    "name": "Malzahar",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Malzahar.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Malzahar_Select.ogg"
  },
  {
    "id": "maokai",
    "name": "Maokai",
    "roles": [
      "all",
      "support",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Maokai.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Maokai_Select.ogg"
  },
  {
    "id": "masteryi",
    "name": "Master Yi",
    "roles": [
      "all",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/MasterYi.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Master_Yi_Select.ogg"
  },
  {
    "id": "mel",
    "name": "Mel",
    "roles": [
      "all",
      "mid",
      "support",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Mel.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Mel_Select.ogg"
  },
  {
    "id": "milio",
    "name": "Milio",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Milio.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Milio_Select.ogg"
  },
  {
    "id": "missfortune",
    "name": "Miss Fortune",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/MissFortune.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Miss_Fortune_Select.ogg"
  },
  {
    "id": "mordekaiser",
    "name": "Mordekaiser",
    "roles": [
      "all",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Mordekaiser.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Mordekaiser_Select.ogg"
  },
  {
    "id": "morgana",
    "name": "Morgana",
    "roles": [
      "all",
      "mid",
      "jungle",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Morgana.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Morgana_Select.ogg"
  },
  {
    "id": "naafiri",
    "name": "Naafiri",
    "roles": [
      "all",
      "jungle",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Naafiri.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Naafiri_Select.ogg"
  },
  {
    "id": "nami",
    "name": "Nami",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Nami.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Nami_Select.ogg"
  },
  {
    "id": "nasus",
    "name": "Nasus",
    "roles": [
      "all",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Nasus.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Nasus_Select.ogg"
  },
  {
    "id": "nautilus",
    "name": "Nautilus",
    "roles": [
      "all",
      "support",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Nautilus.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Nautilus_Select.ogg"
  },
  {
    "id": "neeko",
    "name": "Neeko",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Neeko.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Neeko_Select.ogg"
  },
  {
    "id": "nidalee",
    "name": "Nidalee",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Nidalee.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Nidalee_Select.ogg"
  },
  {
    "id": "nilah",
    "name": "Nilah",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Nilah.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Nilah_Select.ogg"
  },
  {
    "id": "nocturne",
    "name": "Nocturne",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Nocturne.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Nocturne_Select.ogg"
  },
  {
    "id": "nunu",
    "name": "Nunu & Willump",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Nunu.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Nunu_&_Willump_Select.ogg"
  },
  {
    "id": "olaf",
    "name": "Olaf",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Olaf.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Olaf_Select.ogg"
  },
  {
    "id": "orianna",
    "name": "Orianna",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Orianna.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Orianna_Select.ogg"
  },
  {
    "id": "ornn",
    "name": "Ornn",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ornn.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ornn_Select.ogg"
  },
  {
    "id": "pantheon",
    "name": "Pantheon",
    "roles": [
      "all",
      "top",
      "support",
      "mid",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Pantheon.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Pantheon_Select.ogg"
  },
  {
    "id": "poppy",
    "name": "Poppy",
    "roles": [
      "all",
      "support",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Poppy.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Poppy_Select.ogg"
  },
  {
    "id": "pyke",
    "name": "Pyke",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Pyke.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Pyke_Select.ogg"
  },
  {
    "id": "qiyana",
    "name": "Qiyana",
    "roles": [
      "all",
      "mid",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Qiyana.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Qiyana_Select.ogg"
  },
  {
    "id": "quinn",
    "name": "Quinn",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Quinn.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Quinn_Select.ogg"
  },
  {
    "id": "rakan",
    "name": "Rakan",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Rakan.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Rakan_Select.ogg"
  },
  {
    "id": "rammus",
    "name": "Rammus",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Rammus.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Rammus_Select.ogg"
  },
  {
    "id": "reksai",
    "name": "Rek'Sai",
    "roles": [
      "all",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/RekSai.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Rek%27Sai_Select.ogg"
  },
  {
    "id": "rell",
    "name": "Rell",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Rell.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Rell_Select.ogg"
  },
  {
    "id": "renata",
    "name": "Renata Glasc",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Renata.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Renata_Glasc_Select.ogg"
  },
  {
    "id": "renekton",
    "name": "Renekton",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Renekton.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Renekton_Select.ogg"
  },
  {
    "id": "rengar",
    "name": "Rengar",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Rengar.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Rengar_Select.ogg"
  },
  {
    "id": "riven",
    "name": "Riven",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Riven.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Riven_Select.ogg"
  },
  {
    "id": "rumble",
    "name": "Rumble",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Rumble.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Rumble_Select.ogg"
  },
  {
    "id": "ryze",
    "name": "Ryze",
    "roles": [
      "all",
      "mid",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ryze.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ryze_Select.ogg"
  },
  {
    "id": "samira",
    "name": "Samira",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Samira.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Samira_Select.ogg"
  },
  {
    "id": "sejuani",
    "name": "Sejuani",
    "roles": [
      "all",
      "jungle",
      "top",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Sejuani.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Sejuani_Select.ogg"
  },
  {
    "id": "senna",
    "name": "Senna",
    "roles": [
      "all",
      "support",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Senna.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Senna_Select.ogg"
  },
  {
    "id": "seraphine",
    "name": "Seraphine",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Seraphine.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Seraphine_Select.ogg"
  },
  {
    "id": "sett",
    "name": "Sett",
    "roles": [
      "all",
      "top",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Sett.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Sett_Select.ogg"
  },
  {
    "id": "shaco",
    "name": "Shaco",
    "roles": [
      "all",
      "jungle",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Shaco.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Shaco_Select.ogg"
  },
  {
    "id": "shen",
    "name": "Shen",
    "roles": [
      "all",
      "support",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Shen.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Shen_Select.ogg"
  },
  {
    "id": "shyvana",
    "name": "Shyvana",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Shyvana.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Shyvana_Select.ogg"
  },
  {
    "id": "singed",
    "name": "Singed",
    "roles": [
      "all",
      "support",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Singed.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Singed_Select.ogg"
  },
  {
    "id": "sion",
    "name": "Sion",
    "roles": [
      "all",
      "support",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Sion.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Sion_Select.ogg"
  },
  {
    "id": "sivir",
    "name": "Sivir",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Sivir.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Sivir_Select.ogg"
  },
  {
    "id": "skarner",
    "name": "Skarner",
    "roles": [
      "all",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Skarner.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Skarner_Select.ogg"
  },
  {
    "id": "smolder",
    "name": "Smolder",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Smolder.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Smolder_Select.ogg"
  },
  {
    "id": "sona",
    "name": "Sona",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Sona.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Sona_Select.ogg"
  },
  {
    "id": "soraka",
    "name": "Soraka",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Soraka.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Soraka_Select.ogg"
  },
  {
    "id": "swain",
    "name": "Swain",
    "roles": [
      "all",
      "support",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Swain.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Swain_Select.ogg"
  },
  {
    "id": "sylas",
    "name": "Sylas",
    "roles": [
      "all",
      "mid",
      "jungle",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Sylas.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Sylas_Select.ogg"
  },
  {
    "id": "syndra",
    "name": "Syndra",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Syndra.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Syndra_Select.ogg"
  },
  {
    "id": "tahmkench",
    "name": "Tahm Kench",
    "roles": [
      "all",
      "support",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/TahmKench.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Tahm_Kench_Select.ogg"
  },
  {
    "id": "taliyah",
    "name": "Taliyah",
    "roles": [
      "all",
      "jungle",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Taliyah.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Taliyah_Select.ogg"
  },
  {
    "id": "talon",
    "name": "Talon",
    "roles": [
      "all",
      "mid",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Talon.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Talon_Select.ogg"
  },
  {
    "id": "taric",
    "name": "Taric",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Taric.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Taric_Select.ogg"
  },
  {
    "id": "teemo",
    "name": "Teemo",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Teemo.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Teemo_Select.ogg"
  },
  {
    "id": "thresh",
    "name": "Thresh",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Thresh.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Thresh_Select.ogg"
  },
  {
    "id": "tristana",
    "name": "Tristana",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Tristana.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Tristana_Select.ogg"
  },
  {
    "id": "trundle",
    "name": "Trundle",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Trundle.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Trundle_Select.ogg"
  },
  {
    "id": "tryndamere",
    "name": "Tryndamere",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Tryndamere.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Tryndamere_Select.ogg"
  },
  {
    "id": "twistedfate",
    "name": "Twisted Fate",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/TwistedFate.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Twisted_Fate_Select.ogg"
  },
  {
    "id": "twitch",
    "name": "Twitch",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Twitch.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Twitch_Select.ogg"
  },
  {
    "id": "udyr",
    "name": "Udyr",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Udyr.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Udyr_Select.ogg"
  },
  {
    "id": "urgot",
    "name": "Urgot",
    "roles": [
      "all",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Urgot.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Urgot_Select.ogg"
  },
  {
    "id": "varus",
    "name": "Varus",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Varus.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Varus_Select.ogg"
  },
  {
    "id": "vayne",
    "name": "Vayne",
    "roles": [
      "all",
      "top",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Vayne.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Vayne_Select.ogg"
  },
  {
    "id": "veigar",
    "name": "Veigar",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Veigar.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Veigar_Select.ogg"
  },
  {
    "id": "velkoz",
    "name": "Vel'Koz",
    "roles": [
      "all",
      "support",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Velkoz.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Vel%27Koz_Select.ogg"
  },
  {
    "id": "vex",
    "name": "Vex",
    "roles": [
      "all",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Vex.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Vex_Select.ogg"
  },
  {
    "id": "vi",
    "name": "Vi",
    "roles": [
      "all",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Vi.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Vi_Select.ogg"
  },
  {
    "id": "viego",
    "name": "Viego",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Viego.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Viego_Select.ogg"
  },
  {
    "id": "viktor",
    "name": "Viktor",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Viktor.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Viktor_Select.ogg"
  },
  {
    "id": "vladimir",
    "name": "Vladimir",
    "roles": [
      "all",
      "mid",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Vladimir.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Vladimir_Select.ogg"
  },
  {
    "id": "volibear",
    "name": "Volibear",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Volibear.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Volibear_Select.ogg"
  },
  {
    "id": "warwick",
    "name": "Warwick",
    "roles": [
      "all",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Warwick.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Warwick_Select.ogg"
  },
  {
    "id": "monkeyking",
    "name": "Wukong",
    "roles": [
      "all",
      "jungle",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/MonkeyKing.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Wukong_Select.ogg"
  },
  {
    "id": "xayah",
    "name": "Xayah",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Xayah.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Xayah_Select.ogg"
  },
  {
    "id": "xerath",
    "name": "Xerath",
    "roles": [
      "all",
      "support",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Xerath.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Xerath_Select.ogg"
  },
  {
    "id": "xinzhao",
    "name": "Xin Zhao",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/XinZhao.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Xin_Zhao_Select.ogg"
  },
  {
    "id": "yasuo",
    "name": "Yasuo",
    "roles": [
      "all",
      "mid",
      "adc",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Yasuo.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Yasuo_Select.ogg"
  },
  {
    "id": "yone",
    "name": "Yone",
    "roles": [
      "all",
      "mid",
      "top"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Yone.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Yone_Select.ogg"
  },
  {
    "id": "yorick",
    "name": "Yorick",
    "roles": [
      "all",
      "top",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Yorick.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Yorick_Select.ogg"
  },
  {
    "id": "yunara",
    "name": "Yunara",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Yunara.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Yunara_Select.ogg"
  },
  {
    "id": "yuumi",
    "name": "Yuumi",
    "roles": [
      "all",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Yuumi.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Yuumi_Select.ogg"
  },
  {
    "id": "zac",
    "name": "Zac",
    "roles": [
      "all",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Zac.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Zac_Select.ogg"
  },
  {
    "id": "zed",
    "name": "Zed",
    "roles": [
      "all",
      "mid",
      "jungle"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Zed.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Zed_Select.ogg"
  },
  {
    "id": "zeri",
    "name": "Zeri",
    "roles": [
      "all",
      "adc",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Zeri.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Zeri_Select.ogg"
  },
  {
    "id": "ziggs",
    "name": "Ziggs",
    "roles": [
      "all",
      "mid",
      "adc"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Ziggs.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Ziggs_Select.ogg"
  },
  {
    "id": "zilean",
    "name": "Zilean",
    "roles": [
      "all",
      "support",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Zilean.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Zilean_Select.ogg"
  },
  {
    "id": "zoe",
    "name": "Zoe",
    "roles": [
      "all",
      "mid",
      "support"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Zoe.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Zoe_Select.ogg"
  },
  {
    "id": "zyra",
    "name": "Zyra",
    "roles": [
      "all",
      "support",
      "mid"
    ],
    "imageUrl": "https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/Zyra.png",
    "sound": "https://wiki.leagueoflegends.com/en-us/images/Zyra_Select.ogg"
  }
];

window.CHAMPIONS = CHAMPIONS;
