Hooks.once("ready", async function () {
  if (game.modules.get("pf1-statblock-converter")?.active) {
    if (game.modules.get("pf1-statblock-converter").version.startsWith("5")) return;

    Hooks.on("sbc.loadCustomCompendiums", function (packs) {
      packs.push(
        ...[
          "ffd20-content.ffd20-bestiary_aberrations",
          "ffd20-content.ffd20-bestiary_animals",
          "ffd20-content.ffd20-bestiary_bosses",
          "ffd20-content.ffd20-bestiary_constructs",
          "ffd20-content.ffd20-bestiary_dragons",
          "ffd20-content.ffd20-bestiary_fey",
          "ffd20-content.ffd20-bestiary_humanoids",
          "ffd20-content.ffd20-bestiary_magical-beasts",
          "ffd20-content.ffd20-bestiary_monstrous-humanoids",
          "ffd20-content.ffd20-bestiary_npcs",
          "ffd20-content.ffd20-bestiary_oozes",
          "ffd20-content.ffd20-bestiary_outsiders",
          "ffd20-content.ffd20-bestiary_plants",
          "ffd20-content.ffd20-bestiary_undead",
          "ffd20-content.ffd20-bestiary_vermin",
          "ffd20-content.ffd20-buffs_and_effects",
          "ffd20-content.ffd20-class-pack-base_astrologian",
          "ffd20-content.ffd20-class-pack-base_berserker",
          "ffd20-content.ffd20-class-pack-base_blue-mage",
          "ffd20-content.ffd20-class-pack-base_chemist",
          "ffd20-content.ffd20-class-pack-base_chocobo-knight",
          "ffd20-content.ffd20-class-pack-base_cleric",
          "ffd20-content.ffd20-class-pack-base_dark-knight",
          "ffd20-content.ffd20-class-pack-base_engineer",
          "ffd20-content.ffd20-class-pack-base_gambler",
          "ffd20-content.ffd20-class-pack-base_geomancer",
          "ffd20-content.ffd20-class-pack-base_gunner",
          "ffd20-content.ffd20-class-pack-base_holy-knight",
          "ffd20-content.ffd20-class-pack-base_illusionist",
          "ffd20-content.ffd20-class-pack-base_medic",
          "ffd20-content.ffd20-class-pack-base_necromancer",
          "ffd20-content.ffd20-class-pack-base_summoner",
          "ffd20-content.ffd20-class-pack-base_time-mage",
          "ffd20-content.ffd20-class-pack-core_archer",
          "ffd20-content.ffd20-class-pack-core_bard",
          "ffd20-content.ffd20-class-pack-core_beastmaster",
          "ffd20-content.ffd20-class-pack-core_black-mage",
          "ffd20-content.ffd20-class-pack-core_dragoon",
          "ffd20-content.ffd20-class-pack-core_knight",
          "ffd20-content.ffd20-class-pack-core_monk",
          "ffd20-content.ffd20-class-pack-core_red-mage",
          "ffd20-content.ffd20-class-pack-core_thief",
          "ffd20-content.ffd20-class-pack-core_warrior",
          "ffd20-content.ffd20-class-pack-core_white-mage",
          "ffd20-content.ffd20-class-pack-hybrid_black-belt",
          "ffd20-content.ffd20-class-pack-hybrid_dancer",
          "ffd20-content.ffd20-class-pack-hybrid_druid",
          "ffd20-content.ffd20-class-pack-hybrid_fencer",
          "ffd20-content.ffd20-class-pack-hybrid_gunbreaker",
          "ffd20-content.ffd20-class-pack-hybrid_ninja",
          "ffd20-content.ffd20-class-pack-hybrid_samurai",
          "ffd20-content.ffd20-class-pack-hybrid_scholar",
          "ffd20-content.ffd20-class-pack-hybrid_sword-saint",
          "ffd20-content.ffd20-class-pack-other_class-animals",
          "ffd20-content.ffd20-class-pack-other_class-animals-example",
          "ffd20-content.ffd20-class-pack-other_class-mounts",
          "ffd20-content.ffd20-class-pack-other_class-mounts-example",
          "ffd20-content.ffd20-class-pack-other_class-pets",
          "ffd20-content.ffd20-class-pack-other_class-pets-example",
          "ffd20-content.ffd20-class-pack-other_npc",
          "ffd20-content.ffd20-class-prestige-pack_dark_emperor",
          "ffd20-content.ffd20-feats",
          "ffd20-content.ffd20-items_alchemical-items",
          "ffd20-content.ffd20-items_armors-and-shields",
          "ffd20-content.ffd20-items_artifacts",
          "ffd20-content.ffd20-items_general-items",
          "ffd20-content.ffd20-items_magical-armor",
          "ffd20-content.ffd20-items_magical-weapons",
          "ffd20-content.ffd20-items_magitek",
          "ffd20-content.ffd20-items_materia",
          "ffd20-content.ffd20-items_miscellaneous-magical-items",
          "ffd20-content.ffd20-items_rings",
          "ffd20-content.ffd20-items_royal-arms",
          "ffd20-content.ffd20-items_weapons-and-ammo",
          "ffd20-content.ffd20-items_wondrous-items",
          "ffd20-content.ffd20-macros",
          "ffd20-content.ffd20-races-base",
          "ffd20-content.ffd20-races-beastman",
          "ffd20-content.ffd20-races-core",
          "ffd20-content.ffd20-races-monstrous",
          "ffd20-content.ffd20-roll-tables",
          "ffd20-content.ffd20-spells",
          "ffd20-content.ffd20-traits",
      ]
      );
    });
  }
});

Hooks.once("init", function () {
  const compendiumRenames = /** @type {const}*/ ({
    "pf-elephant": "pf-3rd-party",
    "pf-magic": "pf-magic-items",
  });

  const prefix = `Compendium.ffd20-content`;
  for (const [oldName, newName] of Object.entries(compendiumRenames)) {
    CONFIG.compendium.uuidRedirects[`${prefix}.${oldName}`] = `${prefix}.${newName}`;
  }
});

Hooks.on("pf1RegisterSources", (registry, _model) => {
  const sourceChanges = {
    FFD20W: {
      name: "FFd20 Website",
      date: "2025",
      isbn: "",
      pages: 0,
      publisher: "",
      type: "source",
      url: "https://www.finalfantasyd20.com/",
    },
  };

  for (const [sourceId, sourceData] of Object.entries(sourceChanges)) {
    registry.register("ffd20-content", sourceId, sourceData);
  }
});
