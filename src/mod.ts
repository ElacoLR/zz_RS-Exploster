import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";

import { ItemHelper } from "@spt/helpers/ItemHelper";
import { BaseClasses } from "@spt/models/enums/BaseClasses";

import stackConfig from '../config/config.json';

class Exploster implements IPostDBLoadMod, IPostSptLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const CustomItem = container.resolve<CustomItemService>("CustomItemService");

        const itemsToClone: NewItemFromCloneDetails[] = [
            { // 20x1mm HE (TOY GUN)
                itemTplToClone: "6601546f86889319850bd566",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_20x1mm.bundle",
                        rcid: ""
                    },
                    Damage: 2,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 1,
                    StackMaxSize: stackConfig["TOYStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "6705df7359d64ebd1df8274e",
                fleaPriceRoubles: 300,
                handbookPriceRoubles: 100,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "20x1mm Boom",
                        shortName: "Toy Boom",
                        description: "A toy ammunition in the form of a 20x1mm disk for the Soviet plastic toy gun. Manufactured in the USSR. (Caution : It can explode!)"
                    }
                },
            },
            { // 12/70 HE
                itemTplToClone: "5d6e68c4a4b9361b93413f79",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_12x70_slug_50_bmg_m17_traccer.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 105,
                    PenetrationPower: 70,
                    Damage: 170,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 80,
                    StackMaxSize: stackConfig["12gStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fcc851e64b4074b611119c",
                fleaPriceRoubles: 6000,
                handbookPriceRoubles: 2000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "12/70 High Explosive",
                        shortName: "12/70 HE",
                        description: "A custom-made 12/70 High Explosive shell with a shortened .50 BMG tracer bullet for 12 gauge shotguns. No one knows who and why is producing these strange slugs in Tarkov, but they just work... somehow."
                    }
                }
            },
            { // 12/70 Cluster
                itemTplToClone: "5d6e68a8a4b9360b6c0d54e2",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_12x70_slug_ap_20.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 120,
                    PenetrationPower: 90,
                    Damage: 250,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 8,
                    ExplosionStrength: 100,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["12gStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fccc8962916c1f25af9936",
                fleaPriceRoubles: 7500,
                handbookPriceRoubles: 3500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "12/70 Cluster",
                        shortName: "12/70 Clstr",
                        description: "A 12/70 Cluster shell for 12 gauge shotguns. Designed for law enforcement forces of our overseas ʕ•ᴥ•ʔ friends ʕ•ᴥ•ʔ."
                    }
                },
            },
            { // 12.7x55mm HE
                itemTplToClone: "5cadf6ddae9215051e1c23b2",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_12,7x55_ps12.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 120,
                    PenetrationPower: 85,
                    Damage: 220,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 60,
                    StackMaxSize: stackConfig["12_7Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb9d173370c7729baed341",
                fleaPriceRoubles: 8000,
                handbookPriceRoubles: 4000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "12.7x55mm HE",
                        shortName: "12.7 HE",
                        description: "A 12.7x55mm High Explosive special cartridge with a 33 gram subsonic heavy bullet with a lead core and a bimetallic jacket, in a brass case. This cartridge was designed in the early 2010s for the ASh-12 assault rifle and despite its rudimentary design, the bullet is capable of piercing basic ballistic body protections, in addition to providing a considerable stopping power effect and being able to inflict severe adverse effects on the target after impact. However, due to its design, it has a high probability of bouncing off various surfaces."
                    }
                },
            },
            { // 12.7x55mm Cluster
                itemTplToClone: "5cadf6eeae921500134b2799",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_12,7x55_ps12b.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 150,
                    PenetrationPower: 110,
                    Damage: 350,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 8,
                    ExplosionStrength: 80,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["12_7Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb9d4bbc2ff36e9d6a3af4",
                fleaPriceRoubles: 10000,
                handbookPriceRoubles: 7000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "12.7x55mm Cluster",
                        shortName: "12.7 Clstr",
                        description: "A 12.7x55mm Cluster special cartridge with an 18 gram subsonic armor-piercing bullet with a heat-strengthened steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a brass case. This cartridge was designed in the early 2010s to provide the ASh-12 assault rifle with capabilities to neutralize hostile personnel equipped with basic and intermediate ballistic body protection, in addition to providing a significant stopping power effect due to its caliber and being able to inflict substantial adverse effects on the target after impact. However, due to its design, it has a high probability of bouncing off various surfaces."
                    }
                },
            },
            { // 20/70 HE
                itemTplToClone: "5d6e6a05a4b93618084f58d0",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_20x70_slug_star.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 50,
                    PenetrationPower: 35,
                    Damage: 85,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 40,
                    StackMaxSize: stackConfig["20gStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "670556490b5d8fb1f9893724",
                fleaPriceRoubles: 300,
                handbookPriceRoubles: 150,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "20/70 High Explosive",
                        shortName: "20/70 HE",
                        description: "A 20/70 High Explosive shell for 20 gauge shotguns."
                    }
                }
            },
            { // 20/70 Cluster
                itemTplToClone: "5d6e6a42a4b9364f07165f52",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_20x70_slug_poleva_6u.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 55,
                    PenetrationPower: 40,
                    Damage: 90,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 2,
                    ExplosionStrength: 35,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["20gStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "670556991ca2c75e34ed4339",
                fleaPriceRoubles: 400,
                handbookPriceRoubles: 250,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "20/70 Cluster",
                        shortName: "20/70 Clstr",
                        description: "A 20/70 Cluster shell for 20 gauge shotguns."
                    }
                },
            },
            { // 23x75 HE
                itemTplToClone: "5e85aa1a988a8701445df1f5",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_23x75_barricade.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 200,
                    PenetrationPower: 150,
                    Damage: 350,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 150,
                    StackMaxSize: stackConfig["23gStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "6705584cabe9a5cb48c1a2eb",
                fleaPriceRoubles: 7000,
                handbookPriceRoubles: 3500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "23x75mm High Explosive",
                        shortName: "23x75 HE",
                        description: "A 23x75mmR \"Barrikada\" (\"High Explosive\") cartridge with solid steel projectile able to destroy the engine block of a car at up to 100 meters."
                    }
                }
            },
            { // 23x75 Cluster
                itemTplToClone: "5e85aa1a988a8701445df1f5",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_23x75_shrapnel_25.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 300,
                    PenetrationPower: 250,
                    Damage: 450,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 16,
                    ExplosionStrength: 200,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["23gStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "670558a674184d7a676d3a11",
                fleaPriceRoubles: 8500,
                handbookPriceRoubles: 6500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "23x75mm Cluster",
                        shortName: "23x75 Clstr",
                        description: "A 23x75mmR \"Barrikada\" (\"Cluster\") cartridge with solid steel projectile able to destroy the engine block of a car at up to 100 meters."
                    }
                },
            },
            { // .300 Blackout HE
                itemTplToClone: "64b8725c4b75259c590fa899",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x35_cbj.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 75,
                    PenetrationPower: 70,
                    Damage: 90,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 20,
                    StackMaxSize: stackConfig["300Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fba5140558a76e49824c42",
                fleaPriceRoubles: 3500,
                handbookPriceRoubles: 2000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".300 High Explosive",
                        shortName: ".300 HE",
                        description: "Experimental High Explosive round by CBJ Tech. Contains a 6.1g tungsten core projectile inside 1g plastic sabot. It has improved armor penetrating capabilities and improved velocity."
                    }
                },
            },
            { // .300 Blackout Cluster
                itemTplToClone: "5fd20ff893a8961fc660a954",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x35_ap.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 80,
                    PenetrationPower: 75,
                    Damage: 100,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 3,
                    ExplosionStrength: 55,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["300Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb95a362464a647b52b698",
                fleaPriceRoubles: 5500,
                handbookPriceRoubles: 4000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".300 Cluster",
                        shortName: ".300 Clstr",
                        description: "A .300 Blackout (7.62x35mm) Cluster cartridge loaded with an 8.4 gram armor-piercing bullet from a 7.62x51mm NATO M80A1 cartridge, composed of a steel penetrator tip over a copper alloy core with a copper semi-jacket in a brass case. Despite the bullet's own characteristics when used in a full-power cartridge, these are affected when transferred to an intermediate cartridge, however, the bullet continues to have capabilities to pierce basic and intermediate body ballistic protections, in addition to being able to cause substantial adverse effects on the target after impact. Its design also allows it to be used in STANAG 5.56x45mm NATO magazines without any issues."
                    }
                },
            },
            { // .338 HE
                itemTplToClone: "5fc275cf85fd526b824a571a",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_86x70_lapua_magnum.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 115,
                    PenetrationPower: 80,
                    Damage: 200,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 50,
                    StackMaxSize: stackConfig["338Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb9ac0cf03183ba3642f2b",
                fleaPriceRoubles: 8000,
                handbookPriceRoubles: 4000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".338 Lapua Magnum High Explosive",
                        shortName: ".338 HE",
                        description: "A .338 Lapua Magnum (8.6x70mm) High Explosive cartridge with a 16.2 gram lead core bullet with a bimetallic jacket in a brass case. Despite its rudimentary design, this cartridge possesses capabilities of piercing basic and intermediate ballistic body protections, as well as providing a considerable stopping power effect and being capable of causing critical adverse effects on the target after impact. However, due to its design, it has a high probability of bouncing off various surfaces."
                    }
                },
            },
            { // .338 Cluster
                itemTplToClone: "5fc382a9d724d907e2077dab",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_86x70_lapua_ap.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 140,
                    PenetrationPower: 100,
                    Damage: 300,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 6,
                    ExplosionStrength: 70,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["338Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb9b3acc7ea11e689ad9fe",
                fleaPriceRoubles: 10000,
                handbookPriceRoubles: 7000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".338 Lapua Magnum Cluster",
                        shortName: ".338 Clstr",
                        description: "A .338 Lapua Magnum (8.6x70mm) Cluster cartridge with a two-part armor-piercing projectile of 15.4 grams, the bullet consists of a sabot and a tungsten carbide penetrator body, in a brass case. This cartridge was designed to increase, in a limited way, the anti-materiel capabilities of the .338 Lapua Magnum caliber rifles, managing to pierce through light armored vehicles not to mention its excellent results against the most modern specialized ballistic body protections as well as having a considerable stopping power effect and be able to inflict devastating adverse effects on the target after impact. However, due to its design, it has a significant probability of bouncing off various surfaces."
                    }
                },
            },
            { // .357 HE
                itemTplToClone: "62330c18744e5e31df12f516",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x33r_jhp.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 35,
                    PenetrationPower: 30,
                    Damage: 45,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 7,
                    StackMaxSize: stackConfig["357Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "670547b27b51eb084de1bd17",
                fleaPriceRoubles: 600,
                handbookPriceRoubles: 350,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".357 High Explosive",
                        shortName: ".357 HE",
                        description: "A .357 Magnum (9x33mm R) High Explosive cartridge with an 8 gram lead core hollow-point bullet with a bimetallic jacket in a steel case, produced by Smith & Wesson. The bullet in this cartridge is designed to expand shortly after impacting the target, allowing it to pierce through basic ballistic body protections and provide a considerable stopping power effect, as well as being able to cause severe adverse effects on the target after impact."
                    }
                },
            },
            { // .357 Cluster
                itemTplToClone: "62330b3ed4dc74626d570b95",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x33r_fmj.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 45,
                    PenetrationPower: 40,
                    Damage: 55,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 4,
                    ExplosionStrength: 35,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["357Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "670548094c31de82665fc4cd",
                fleaPriceRoubles: 700,
                handbookPriceRoubles: 450,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".357 Cluster",
                        shortName: ".357 Clstr",
                        description: "An American-made high-power .357 Magnum Cluster revolver cartridge manufactured by Smith & Wesson."
                    }
                },
            },
            { // .366 HE
                itemTplToClone: "59e655cb86f77411dc52a77b",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_366tkm_eko.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 90,
                    PenetrationPower: 65,
                    Damage: 120,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 25,
                    StackMaxSize: stackConfig["366Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "67054a16d70c257fec9c24d2",
                fleaPriceRoubles: 3000,
                handbookPriceRoubles: 1500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".366 High Explosive",
                        shortName: ".366 HE",
                        description: "A .366 TKM (9.55x39mm) High Explosive cartridge with a 6 gram bullet made entirely of zinc, in a steel case; intended for sport shooting and hunting. Although this cartridge is intended for small-game hunting, its design allows it to pierce through basic ballistic body protections as well as some intermediate models, in addition to providing a significant stopping power effect and being capable of causing severe adverse effects on the target after impact. Its design also allows it to be used in 7.62x39mm AK magazines without any problem."
                    }
                },
            },
            { // .366 Cluster
                itemTplToClone: "5f0596629e22f464da6bbdd9",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_366_custom_ap.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 100,
                    PenetrationPower: 75,
                    Damage: 140,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 5,
                    ExplosionStrength: 65,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["366Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "67054a6814d84a3bd821de8d",
                fleaPriceRoubles: 4500,
                handbookPriceRoubles: 3000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".366 Cluster",
                        shortName: ".366 Clstr",
                        description: "A .366 TKM (9.55x39mm) Cluster cartridge loaded with an 16 gram armor-piercing bullet from a 9x39mm SP-6 gs cartridge, composed of a hardened carbon steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a modified steel case. This ingeniously improvised cartridge was created by Mechanic due to the precarious situation of its customers in Tarkov, resulting in a cartridge that can pierce through basic and intermediate ballistic body protection, as well as providing a considerable stopping power effect, however, its own design alters its flight pattern, making it less accurate. Its design also allows it to be used in 7.62x39mm AK magazines without any problem."
                    }
                },
            },
            { // .45 ACP HE
                itemTplToClone: "5e81f423763d9f754677bf2e",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_1143x23_acp.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 45,
                    PenetrationPower: 40,
                    Damage: 60,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 10,
                    StackMaxSize: stackConfig["45ACPStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb98a14d1430da00a13500",
                fleaPriceRoubles: 1500,
                handbookPriceRoubles: 1000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".45 ACP High Explosive",
                        shortName: ".45 HE",
                        description: "A .45 ACP High Explosive cartridge (Cartridge, Caliber .45, Ball, Match, M1911) with a 14.9 gram lead core bullet with a copper jacket, in a brass case. This cartridge is manufactured with an increased accuracy to meet the needs of modern .45 ACP caliber weaponry used by the United States Armed Forces, being capable of piercing basic ballistic body protection as well as offering a significant stopping power effect."
                    }
                },
            },
            { // .45 ACP Cluster
                itemTplToClone: "5efb0cabfb3e451d70735af5",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_1143x23_acp_ap.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 50,
                    PenetrationPower: 45,
                    Damage: 70,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 3,
                    ExplosionStrength: 40,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["45ACPStack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb98f0a03776db08b20324",
                fleaPriceRoubles: 2000,
                handbookPriceRoubles: 1300,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: ".45 ACP Cluster",
                        shortName: ".45 Clstr",
                        description: "A .45 ACP Cluster cartridge with a two-part controlled fragmenting projectile, an armor-piercing bullet that features a brass sabot and a hardened steel penetrator of 7mm. Thanks to the design of this AP bullet (Armor-Piercing) and despite having an average muzzle velocity relative to other cartridges of the same caliber, it has capabilities of piercing basic ballistic body protection along with some intermediate models and still provides a significant stopping power effect."
                    }
                },
            },
            { // 4.6x30mm HE
                itemTplToClone: "5ba2678ad4351e44f824b344",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_46x30_fmj_sx.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 50,
                    PenetrationPower: 45,
                    Damage: 55,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 12,
                    StackMaxSize: stackConfig["46Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "67055a310bdc2881d62df49b",
                fleaPriceRoubles: 1200,
                handbookPriceRoubles: 600,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "4.6x30mm High Explosive",
                        shortName: "4.6x30 HE",
                        description: "A 4.6x30mm HK High Explosive cartridge with a 2.6 gram lead-antimony alloy core bullet with a brass full metal jacket (FMJ) in a brass case. This cartridge was developed for general military use, but the ballistic capabilities of its bullet allow it to pierce basic and intermediate ballistic body protections, however, due to its design, it has a high bounce probability off various surfaces."
                    }
                },
            },
            { // 4.6x39mm Cluster
                itemTplToClone: "5ba26835d4351e0035628ff5",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_46x30_ap_sx.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 55,
                    PenetrationPower: 50,
                    Damage: 65,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 2,
                    ExplosionStrength: 40,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["545Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "67055a6fc05ebf2065e699e1",
                fleaPriceRoubles: 1400,
                handbookPriceRoubles: 800,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "4.6x30mm Cluster",
                        shortName: "4.6x30 Clstr",
                        description: "A 4.6x30mm HK Cluster cartridge with a 2 gram copper-plated steel core armor-piercing bullet in a brass case. The AP SX cartridge provides the highest penetration capability of the 4.6x30mm caliber, allowing the shooter to pierce basic and intermediate ballistic body protections in addition to providing outstanding results against some specialized protection models, however, due to its design, it has a high bounce probability off various surfaces."
                    }
                },
            },
            { // 5.45x39mm HE
                itemTplToClone: "56dff026d2720bb8668b4567",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_545x39_bs.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 50,
                    PenetrationPower: 45,
                    Damage: 65,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 15,
                    StackMaxSize: stackConfig["545Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb864e537337a92fef5033",
                fleaPriceRoubles: 1500,
                handbookPriceRoubles: 800,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "5.45x39mm High Explosive",
                        shortName: "5.45 HE",
                        description: "A 5.45x39mm High Explosive cartridge with a 4.1 gram armor-piercing bullet with a pointed tungsten carbide core over a lead base with a bimetallic jacket, in a steel case. This BS bullet (Broneboynyy Serdechnik - \"Armor-piercing Core\") was developed by TsNIITochMash in 1998 to greatly increase the penetration capabilities of Russian 5.45x39mm caliber weapons, by being able to pierce basic and intermediate ballistic body protections in addition to provide outstanding results against some specialized protection models, despite having a relatively low muzzle velocity compared to other cartridges. However, due to its design, it has a high bounce probability off various surfaces."
                    }
                },
            },
            { // 5.45x39mm Cluster
                itemTplToClone: "5c0d5e4486f77478390952fe",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_545x39_7n39.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 55,
                    PenetrationPower: 50,
                    Damage: 70,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 2,
                    ExplosionStrength: 50,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["545Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb87a4bc6372fabe5a3488",
                fleaPriceRoubles: 1500,
                handbookPriceRoubles: 800,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "5.45x39mm Cluster",
                        shortName: "5.45 Clstr",
                        description: "A 5.45x39mm Cluster cartridge with a 4 gram armor-piercing bullet with a pointed tungsten carbide core with two-layer jacket, a lead interior and a bimetallic exterior, in a steel case. This experimental cartridge was developed by TsNIITochMash and TechKomplekt under the name of PPBS (Povyshennoy Probivayemosti, Broneboynyy Serdechnik - \"Increased Penetration, Armor-piercing Core\") \"Igólnik\" (\"Needlecase\") based on the 5.45x39mm BS gs cartridge to increase its penetration capabilities, providing excellent results against the most modern specialized ballistic body protections, in addition to being capable of piercing light covers and light armored vehicles, however, due to its design, it has a high bounce probability off various surfaces."
                    }
                },
            },
            { // 5.56x45mm HE
                itemTplToClone: "59e690b686f7746c9f75e848",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_556x45_m995.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 70,
                    PenetrationPower: 65,
                    Damage: 85,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 20,
                    StackMaxSize: stackConfig["556Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fa8e0599c008dd9e0fb657",
                fleaPriceRoubles: 3500,
                handbookPriceRoubles: 2000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "5.56x45mm High Explosive",
                        shortName: "5.56 HE",
                        description: "A 5.56x45mm NATO High Explosive cartridge with a 3.4 gram armor-piercing bullet with a tungsten carbide penetrator over an aluminum base with a copper jacket, in a brass case. This cartridge was designed during the 1990s to provide United States Army personnel with capabilities to pierce light covers and light vehicles, as well as basic and intermediate ballistic body protections, in addition to providing outstanding results against some specialized protection models. However, due to its design, it has a significant bounce probability on various surfaces."
                    }
                },
            },
            { // 5.56x45mm Cluster
                itemTplToClone: "601949593ae8f707c4608daa",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_556x45_ssa_ap.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 80,
                    PenetrationPower: 75,
                    Damage: 100,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 3,
                    ExplosionStrength: 50,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["556Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fae1d6363bd83e0ab522ca",
                fleaPriceRoubles: 5500,
                handbookPriceRoubles: 4000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "5.56x45mm Cluster",
                        shortName: "5.56 Clstr",
                        description: "A 5.56x45mm NATO Cluster cartridge with a two-part armor-piercing projectile, the bullet consists of a sabot and a tungsten carbide penetrator body, in a brass case. This bullet was designed to surpass the one used in the 5.56x45mm NATO M995 cartridge in regard to its penetration capabilities, thanks to its muzzle velocity and peculiar design, it is capable of piercing basic and intermediate ballistic body protections, in addition to providing outstanding results against some modern specialized protection models, however, due to its design, it has a high bounce probability on various surfaces."
                    }
                },
            },
            { // 5.7x28mm HE
                itemTplToClone: "5cc80f53e4a949000e1ea4f8",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_57x28_l191.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 55,
                    PenetrationPower: 50,
                    Damage: 58,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 13,
                    StackMaxSize: stackConfig["57Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "67055c41eba56eaa35ba547e",
                fleaPriceRoubles: 1400,
                handbookPriceRoubles: 800,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "5.7x28mm High Explosive",
                        shortName: "5.7x28 HE",
                        description: "A 5.7x28mm FN High Explosive cartridge with a 2.1 gram armor-piercing tracer bullet with a steel penetrator over an aluminum core with a reinforced copper jacket, in a brass case; intended for target designation and fire adjustment in battle (Trace color: Red). This cartridge was designed to provide tracing capabilities to 5.7x28mm caliber submachine guns during automatic fire, specifically to the FN P90 submachine gun in conjunction with the 5.7x28mm FN SS190 cartridge, in addition to being capable of piercing basic ballistic body protections as well as some intermediate models, however, due to its design, it has a high bounce probability off various surfaces."
                    }
                },
            },
            { // 5.7x28mm Cluster
                itemTplToClone: "5cc80f38e4a949001152b560",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_57x28_ss190.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 60,
                    PenetrationPower: 56,
                    Damage: 65,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 2,
                    ExplosionStrength: 40,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["57Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "67055c83237e8b00818cd005",
                fleaPriceRoubles: 1600,
                handbookPriceRoubles: 1000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "5.7x28mm Cluster",
                        shortName: "5.7x28 Clstr",
                        description: "A 5.7x28mm FN Cluster cartridge with a 2 gram armor-piercing bullet with a steel penetrator over an aluminum core with a reinforced copper jacket, in a brass case. Thanks to its muzzle velocity and design, this cartridge is capable of piercing basic ballistic body protections and provides excellent results against intermediate protection models, however, due to its design, it has a high bounce probability off various surfaces."
                    }
                },
            },
            { // 6.8x51mm HE
                itemTplToClone: "6529302b8c26af6326029fb7",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_68x51_fmj.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 80,
                    PenetrationPower: 75,
                    Damage: 100,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 30,
                    StackMaxSize: stackConfig["68Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "67055ddbc4ff44d276a9afb9",
                fleaPriceRoubles: 3000,
                handbookPriceRoubles: 1500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "6.8x51mm High Explosive",
                        shortName: "6.8 HE",
                        description: "A civilian 6.8x51mm (.277 FURY) High Explosive 135 grain rifle round, manufactured by SIG Sauer."
                    }
                },
            },
            { // 6.8x51mm Cluster
                itemTplToClone: "6529243824cbe3c74a05e5c1",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_68x51.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 70,
                    PenetrationPower: 65,
                    Damage: 90,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 5,
                    ExplosionStrength: 45,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["68Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "67055e203cb46c6a4354cea2",
                fleaPriceRoubles: 4000,
                handbookPriceRoubles: 2500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "6.8x51mm Cluster",
                        shortName: "6.8 Clstr",
                        description: "A mil-spec 6.8x51mm (.277 FURY) rifle cluster round with bi-metallic case (stainless steel base coupled to a brass body), manufactured by SIG Sauer. Provides a higher velocity, more energy hitting being transferred to the target, and a lighter cartridge than 5.56x45, and hits harder than 7.62x51, while also having a great penetration power against modern body armor."
                    }
                },
            },
            { // 7.62x25mm HE
                itemTplToClone: "573603c924597764442bd9cb",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x25tt_t_gzh.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 25,
                    PenetrationPower: 20,
                    Damage: 35,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 3,
                    StackMaxSize: stackConfig["762_25Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66ff51f79af5ebd0cdbefb22",
                fleaPriceRoubles: 400,
                handbookPriceRoubles: 150,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "7.62x25mm TT High Explosive",
                        shortName: "TT HE",
                        description: "A 7.62x25mm High Explosive with a 5.8 gram lead core tracer bullet in a bimetallic case; intended for target designation and fire adjustment in battle (Trace color: Red). Although this cartridge has an effective range of 100 meters, its tracing capacity greatly exceeds this distance, designed to be used in the PPD, PPS and PPSh submachine guns along with the 7.62x25mm TT Pst gzh cartridge and provide a similar stopping power effect."
                    }
                },
            },
            { // 7.62x25mm Cluster
                itemTplToClone: "573603562459776430731618",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x25tt_pst_gzh.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 30,
                    PenetrationPower: 25,
                    Damage: 40,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 2,
                    ExplosionStrength: 30,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["762_25Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66ff527702b4665f67e8c191",
                fleaPriceRoubles: 500,
                handbookPriceRoubles: 250,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "7.62x25mm TT Cluster",
                        shortName: "TT Clstr",
                        description: "A 7.62x25mm Cluster cartridge with a 5.4 gram steel core bullet with a lead cladding and a bimetallic jacket, in a bimetallic case. Although this cartridge was created with the intention of neutralizing hostile personnel behind objects with low structural strength, it is currently capable of efficiently piercing basic ballistic body protections as well as some intermediate models at close range."
                    }
                },
            },
            { // 7.62x39mm HE
                itemTplToClone: "59e0d99486f7744a32234762",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x39_bp.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 85,
                    PenetrationPower: 80,
                    Damage: 110,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 30,
                    StackMaxSize: stackConfig["762_39Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb7683fa5439c11ca9d9e1",
                fleaPriceRoubles: 4000,
                handbookPriceRoubles: 2500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "7.62x39mm High Explosive",
                        shortName: "7.62 HE",
                        description: "A 7.62x39mm High Explosive cartridge with a 7.9 gram armor-piercing bullet with a hardened carbon steel core with lead cladding on the tip and a bimetallic jacket, in a bimetallic case. This BP bullet (Bronebóynaya Púlya - \"Armor-piercing Bullet\") was developed in the 1990s based on the 7.62x39mm PS gzh cartridge to improve its design and penetration capabilities, as a longer and narrower reinforced steel core was chosen, allowing it to pierce through basic and intermediate body ballistic protections in addition to provide a significant stopping power effect, however, it has a significant bounce probability off various surfaces."
                    }
                },
            },
            { // 7.62x39mm Cluster
                itemTplToClone: "601aa3d2b2bcb34913271e6d",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x39_mai_ap.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 95,
                    PenetrationPower: 90,
                    Damage: 125,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 4,
                    ExplosionStrength: 55,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["762_39Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb7b5dd837431fe2228e26",
                fleaPriceRoubles: 5000,
                handbookPriceRoubles: 3500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "7.62x39mm Cluster",
                        shortName: "7.62 Clstr",
                        description: "A 7.62x39mm Cluster cartridge with a two-part armor-piercing projectile, the bullet consists of a sabot and a tungsten carbide penetrator body, in a steel case. This bullet was designed by MAI to increase the penetration capabilities of the 7.62x39mm caliber, thanks to its muzzle velocity and peculiar design, it is capable of piercing basic and intermediate ballistic body protections, in addition to providing outstanding results against some modern specialized protection models, however, it has a high bounce probability on various surfaces."
                    }
                },
            },
            { // 7.62x51mm HE
                itemTplToClone: "5a6086ea4f39f99cd479502f",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x51_m61.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 90,
                    PenetrationPower: 85,
                    Damage: 120,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 40,
                    StackMaxSize: stackConfig["762_51Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb8a4e8de9185a63e72bb0",
                fleaPriceRoubles: 4500,
                handbookPriceRoubles: 3000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "7.62x51mm High Explosive",
                        shortName: "7.62 HE NATO",
                        description: "A 7.62x51mm NATO High Explosive cartridge with a 9.8 gram armor-piercing bullet with a hardened steel core with lead cladding on the tip and a bimetallic jacket, in a brass case. This cartridge was designed in the 1950s based on the .30-06 Springfield AP M2 cartridge to provide the United States Armed Forces with an armor-piercing bullet for 7.62x51mm NATO caliber automatic weaponry, being able to pierce through the most modern specialized ballistic body protections, in addition to provide a significant stopping power effect. However, it has a significant bounce probability on various surfaces."
                    }
                },
            },
            { // 7.62x51mm Cluster
                itemTplToClone: "5efb0c1bd79ff02a1f5e68d9",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x51_m993.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 100,
                    PenetrationPower: 95,
                    Damage: 135,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 4,
                    ExplosionStrength: 60,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["762_51Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb8ab727786a577b0c4786",
                fleaPriceRoubles: 5500,
                handbookPriceRoubles: 3500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "7.62x51mm Cluster",
                        shortName: "7.62 Clstr NATO",
                        description: "A 7.62x51mm NATO Cluster cartridge with an 8.2 gram armor-piercing bullet with a tungsten carbide penetrator over an aluminum base with a copper jacket, in a brass case. This cartridge was designed during the 1990s to provide United States Armed Forces personnel with capabilities to pierce light covers and light armored vehicles, in addition to providing excellent results against the most modern specialized ballistic body protections."
                    }
                },
            },
            { // 7.62x54mm R HE
                itemTplToClone: "560d61e84bdc2da74d8b4571",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x54r_7n14.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 95,
                    PenetrationPower: 90,
                    Damage: 125,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 45,
                    StackMaxSize: stackConfig["762_54Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb9fac1c55070606ecdff3",
                fleaPriceRoubles: 5000,
                handbookPriceRoubles: 3500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "7.62x54mm R High Explosive",
                        shortName: "7.62R HE",
                        description: "A 7.62x54mm R High Explosive cartridge with a 9.8 gram armor-piercing bullet with a pointed heat-strengthened steel core over a lead base with a bimetallic jacket, in a bimetallic case. This SNB cartridge (SNíperskiy s Bronebóynoy púley - \"Sniper with Armor-piercing bullet\") was developed in the mid-1990s as a modernization of the 7.62x54mm R PS gzh cartridge to improve its penetration capabilities when fired from a sniper or designated marksman rifles, managing of piercing specialized ballistic body protections as well as providing a significant stopping power effect."
                    }
                },
            },
            { // 7.62x54mm R Cluster
                itemTplToClone: "5e023d48186a883be655e551",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_762x54r_7n37.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 105,
                    PenetrationPower: 100,
                    Damage: 140,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 4,
                    ExplosionStrength: 60,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["762_54Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb9fb38243d4c4b9620605",
                fleaPriceRoubles: 5500,
                handbookPriceRoubles: 4000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "7.62x54mm R Cluster",
                        shortName: "7.62R Clstr",
                        description: "A 7.62x54mm R Cluster cartridge with a 12.2 gram armor-piercing bullet with a pointed tungsten carbide core over a lead base with a bimetallic jacket, in a steel case. This BS bullet (Broneboynyy Serdechnik - \"Armor-piercing Core\") was developed by TsNIITochMash in the 2010s to greatly increase the penetration capabilities of designated marksman rifles such as the SVD and its variants, being able of piercing through the most modern specialized ballistic body protections, in addition to being capable of piercing light covers and light armored vehicles despite having a relatively low muzzle velocity compared to other cartridges. However, due to its design, it has a significant bounce probability off various surfaces."
                    }
                },
            },
            { // 9x18mm HE
                itemTplToClone: "57371aab2459775a77142f22",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x18pm_pmm.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 30,
                    PenetrationPower: 25,
                    Damage: 40,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 4,
                    StackMaxSize: stackConfig["918Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66ff4c5156f7ddd2307556b2",
                fleaPriceRoubles: 500,
                handbookPriceRoubles: 250,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "9x18mm High Explosive",
                        shortName: "9x18 HE",
                        description: "A 9x18mm High Explosive cartridge with a 5.6 gram steel core bullet with a bimetallic jacket in a truncated cone shape, in a bimetallic case. The 9x18mm PMM cartridge is the modernization of the 9x18mm PM cartridge, designed with the intention of increasing its piercing capabilities against basic ballistic body protections, and it has an increased powder charge, making it dangerous to fire in non-compatible weapons. It is intended to be used with the PMM pistol (Makarov Pistol Modernised) and the PP-9 \"Klin\" submachine gun."
                    }
                },
            },
            { // 9x18mm Cluster
                itemTplToClone: "573719df2459775a626ccbc2",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x18pm_pbm.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 35,
                    PenetrationPower: 30,
                    Damage: 45,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 2,
                    ExplosionStrength: 35,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["918Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66ff4cb1a867da9c785d1065",
                fleaPriceRoubles: 600,
                handbookPriceRoubles: 350,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "9x18mm Cluster",
                        shortName: "9x18 Clstr",
                        description: "A 9x18mm Cluster cartridge with a 3.7 gram hardened carbon steel core armor-piercing bullet with a bimetallic semi-jacket in a bimetallic case. This cartridge was designed in the 1990s to increase the penetration capabilities of 9x18 mm PM caliber weapons, and thanks to its high muzzle velocity it is capable of piercing through basic ballistic body protection equipment as well as certain intermediate protection equipment at short distances at the cost of a small increase in recoil."
                    }
                },
            },
            { // 9x19mm HE
                itemTplToClone: "5c925fa22e221601da359b7b",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x19_ap_63.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 40,
                    PenetrationPower: 35,
                    Damage: 55,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 5,
                    StackMaxSize: stackConfig["919Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb917da189607ad217ffef",
                fleaPriceRoubles: 1000,
                handbookPriceRoubles: 500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "9x19mm High Explosive",
                        shortName: "9mm HE",
                        description: "A 9x19mm Parabellum High Explosive cartridge with a two-part controlled fragmenting projectile, an armor-piercing bullet that features a brass sabot and a hardened steel penetrator of 6.3mm. Thanks to the design of this AP bullet (Armor-Piercing) and despite having an average muzzle velocity relative to other cartridges of the same caliber, it has capabilities of piercing basic ballistic body protection along with some intermediate models."
                    }
                },
            },
            { // 9x19mm Cluster
                itemTplToClone: "5efb0da7a29a85116f6ea05f",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x19_7n31.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 45,
                    PenetrationPower: 40,
                    Damage: 60,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 3,
                    ExplosionStrength: 40,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["919Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fb91d7db7dfd315bade30d",
                fleaPriceRoubles: 1500,
                handbookPriceRoubles: 800,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "9x19mm Cluster",
                        shortName: "9mm Clstr",
                        description: "A 9x19mm Parabellum Cluster cartridge with a 4.1 gram armor-piercing bullet with a hardened carbon steel core with a cylindrical aluminum cladding and bimetallic semi-jacket in a bimetallic case. This bullet design is based on experiences with various armor-piercing pistol cartridges in the late 1990s, aimed to neutralize hostile personnel equipped with basic and intermediate ballistic body protection, in addition to being capable of piercing light covers, and having an outstanding muzzle velocity."
                    }
                },
            },
            { // 9x21mm HE
                itemTplToClone: "5a26ac0ec4a28200741e1e18",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x21_sp13.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 40,
                    PenetrationPower: 35,
                    Damage: 53,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 5,
                    StackMaxSize: stackConfig["921Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "6705dba9e4e96fa86c4d5e43",
                fleaPriceRoubles: 1050,
                handbookPriceRoubles: 550,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "9x21mm High Explosive",
                        shortName: "9x21 HE",
                        description: "A 9x21mm Gyurza High Explosive cartridge with a 7.3 gram armor-piercing tracer bullet with a steel core and a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a bimetallic case; intended for target designation and fire adjustment in battle (Trace color: Red). This BT bullet (Bronebóynaya Trassíruyushchaya - \"Armor-piercing Tracer\") was developed for 9x21mm caliber submachine guns by TsNIITochMash based on the 9x21mm PS gzh \"SP10\" cartridge and has superior characteristics, being able of piercing basic and intermediate ballistic body protections, as well as having a considerable stopping power effect, however, it has a high bounce probability on various surfaces."
                    }
                },
            },
            { // 9x21mm Cluster
                itemTplToClone: "6576f4708ca9c4381d16cd9d",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x21_7n42.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 45,
                    PenetrationPower: 40,
                    Damage: 65,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 3,
                    ExplosionStrength: 42,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["921Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "6705dbea85e6728deb5649c8",
                fleaPriceRoubles: 1150,
                handbookPriceRoubles: 650,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "9x21mm Cluster",
                        shortName: "9x21 Clstr",
                        description: "The 9x21mm Cluster cartridge with increased penetration bullet is designed to engage armored personnel. The head part of the core is made with a cut edge. This design ensures the tearing of the threads of the fabric base of the body armor and significantly increases the penetration of the bullet. The core protrudes from the jacket, which increases its penetration capability. The bullet head is colored black."
                    }
                },
            },
            { // 9x39mm HE
                itemTplToClone: "57a0e5022459774d1673f889",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x39_sp6.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 90,
                    PenetrationPower: 85,
                    Damage: 120,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6d686f77467977ba6cc",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 0,
                    ExplosionStrength: 35,
                    StackMaxSize: stackConfig["939Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fbe6641ca64895de0c9030",
                fleaPriceRoubles: 4500,
                handbookPriceRoubles: 3000,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "9x39mm High Explosive",
                        shortName: "9x39 HE",
                        description: "A 9x39mm High Explosive special cartridge with a 16 gram subsonic armor-piercing bullet with a hardened carbon steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a steel case. This cartridge was designed in the mid-1980s to equip the AS VAL suppressed assault rifle with capabilities to neutralize hostile personnel equipped with basic and intermediate ballistic body protection, in addition to providing a significant stopping power effect, however, due to its design, it has a high probability of bouncing off various surfaces."
                    }
                },
            },
            { // 9x39mm Cluster
                itemTplToClone: "5c0d688c86f77413ae3407b2",
                overrideProperties: {
                    Prefab: {
                        path: "assets/content/items/ammo/patrons/patron_9x39_bp.bundle",
                        rcid: ""
                    },
                    ArmorDamage: 95,
                    PenetrationPower: 90,
                    Damage: 130,
                    FuzeArmTimeSec: 0.0001,
                    HasGrenaderComponent: true,
                    ShowHitEffectOnExplode: true,
                    FragmentType: "5996f6fc86f7745e585b4de3",
                    ExplosionType: "smallgrenade_expl",
                    FragmentsCount: 4,
                    ExplosionStrength: 45,
                    MinExplosionDistance: 0.5,
                    MaxExplosionDistance: 3,
                    StackMaxSize: stackConfig["939Stack"]
                },
                parentId: "5485a8684bdc2da71d8b4567",
                newId: "66fbe6a3625f4d687b2b523b",
                fleaPriceRoubles: 5000,
                handbookPriceRoubles: 3500,
                handbookParentId: "5b47574386f77428ca22b33b",
                locales: {
                    en: {
                        name: "9x39mm Cluster",
                        shortName: "9x39 Clstr",
                        description: "A 9x39mm Cluster special cartridge with a 15.5 gram subsonic armor-piercing bullet with a hardened carbon steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a steel case. This BP cartridge (Bronebóynaya Púlya - \"Armor-piercing Bullet\") was developed in the early 2000s based on the 9x39mm SP-6 cartridge to improve its design and penetration capabilities, resulting in an improvement at piercing most models of specialized ballistic body protections, in addition to provide a significant stopping power effect. However, due to its design, it has a high probability of bouncing off various surfaces."
                    }
                },
            }
        ];

        for (const cloneItem of itemsToClone)
        {
            CustomItem.createItemFromClone(cloneItem);
        }
        
        const assortTbl = {
            "5935c25fb3acc3127c3d8cd9": [ // Peacekeeper
                {
                    "items": [
                        {
                            "_id": "66fad04775c1fd93b06bdc24",
                            "_tpl": "66fa8e0599c008dd9e0fb657",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fae1d0cea70677ae856190",
                            "_tpl": "66fae1d6363bd83e0ab522ca",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb8b30cb42c1b3fb65b290",
                            "_tpl": "66fb8a4e8de9185a63e72bb0",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb8b638fd727b126c473c9",
                            "_tpl": "66fb8ab727786a577b0c4786",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb9205863d5ba78531d558",
                            "_tpl": "66fb917da189607ad217ffef",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb9245edc1f93593107eb6",
                            "_tpl": "66fb91d7db7dfd315bade30d",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb99347e9e5eb5026a7e92",
                            "_tpl": "66fb98a14d1430da00a13500",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb99657afe7a3258877e5c",
                            "_tpl": "66fb98f0a03776db08b20324",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67054918dcfe416035b80765",
                            "_tpl": "670547b27b51eb084de1bd17",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "6705494a465ff8e7573e1184",
                            "_tpl": "670548094c31de82665fc4cd",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67055cc2dfc5576d338a261e",
                            "_tpl": "67055c41eba56eaa35ba547e",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67055ce0d19207c62e2b63e0",
                            "_tpl": "67055c83237e8b00818cd005",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67055e9ad4ea01745c8fd766",
                            "_tpl": "67055ddbc4ff44d276a9afb9",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67055eb21fe41874afd46bb6",
                            "_tpl": "67055e203cb46c6a4354cea2",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        }
                    ],
                    "barter_scheme": {
                        "66fad04775c1fd93b06bdc24": [
                            [
                                {
                                    "count": 20,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "66fae1d0cea70677ae856190": [
                            [
                                {
                                    "count": 30,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "66fb8b30cb42c1b3fb65b290": [
                            [
                                {
                                    "count": 40,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "66fb8b638fd727b126c473c9": [
                            [
                                {
                                    "count": 50,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "66fb9205863d5ba78531d558": [
                            [
                                {
                                    "count": 10,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "66fb9245edc1f93593107eb6": [
                            [
                                {
                                    "count": 15,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "66fb99347e9e5eb5026a7e92": [
                            [
                                {
                                    "count": 15,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "66fb99657afe7a3258877e5c": [
                            [
                                {
                                    "count": 20,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "67054918dcfe416035b80765": [
                            [
                                {
                                    "count": 10,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "6705494a465ff8e7573e1184": [
                            [
                                {
                                    "count": 15,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "67055cc2dfc5576d338a261e": [
                            [
                                {
                                    "count": 12,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "67055ce0d19207c62e2b63e0": [
                            [
                                {
                                    "count": 17,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "67055e9ad4ea01745c8fd766": [
                            [
                                {
                                    "count": 20,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ],
                        "67055eb21fe41874afd46bb6": [
                            [
                                {
                                    "count": 30,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ]
                    },
                    "loyal_level_items": {
                        "66fad04775c1fd93b06bdc24": 4,
                        "66fae1d0cea70677ae856190": 4,
                        "66fb8b30cb42c1b3fb65b290": 4,
                        "66fb8b638fd727b126c473c9": 4,
                        "66fb9205863d5ba78531d558": 3,
                        "66fb9245edc1f93593107eb6": 3,
                        "66fb99347e9e5eb5026a7e92": 4,
                        "66fb99657afe7a3258877e5c": 4,
                        "67054918dcfe416035b80765": 2,
                        "6705494a465ff8e7573e1184": 2,
                        "67055cc2dfc5576d338a261e": 3,
                        "67055ce0d19207c62e2b63e0": 3,
                        "67055e9ad4ea01745c8fd766": 4,
                        "67055eb21fe41874afd46bb6": 4
                    }
                }
            ],
            "54cb50c76803fa8b248b4571": [ // Prapor
                {
                    "items": [
                        {
                            "_id": "66fb79529c13bbb9897e9b4d",
                            "_tpl": "66fb7683fa5439c11ca9d9e1",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb7b955c62fa3cd0bf6871",
                            "_tpl": "66fb7b5dd837431fe2228e26",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb86937e8fbe72c1868ccd",
                            "_tpl": "66fb864e537337a92fef5033",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb87e57fcecacb6618adae",
                            "_tpl": "66fb87a4bc6372fabe5a3488",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb9de336bd45546ddeb4ea",
                            "_tpl": "66fb9d173370c7729baed341",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb9dfd57dc459c77842e86",
                            "_tpl": "66fb9d4bbc2ff36e9d6a3af4",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb9ff4e70678e16a502999",
                            "_tpl": "66fb9fac1c55070606ecdff3",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fba0149db74026e8d164af",
                            "_tpl": "66fb9fb38243d4c4b9620605",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fbe724686300386d2a535d",
                            "_tpl": "66fbe6641ca64895de0c9030",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fbe750a17da691f175fa88",
                            "_tpl": "66fbe6a3625f4d687b2b523b",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66ff4d2e3473f2c04252fbbd",
                            "_tpl": "66ff4c5156f7ddd2307556b2",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66ff4d5280ff33f8bc775d9c",
                            "_tpl": "66ff4cb1a867da9c785d1065",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66ff582113a89d88a6f2a596",
                            "_tpl": "66ff51f79af5ebd0cdbefb22",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66ff583a8ea2fc248db5a210",
                            "_tpl": "66ff527702b4665f67e8c191",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67054ab9258c09da2517ca31",
                            "_tpl": "67054a16d70c257fec9c24d2",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67054ae26e80b1f12b132167",
                            "_tpl": "67054a6814d84a3bd821de8d",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "670558ff5a841b216fb13434",
                            "_tpl": "6705584cabe9a5cb48c1a2eb",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67055915edabde5b854f993e",
                            "_tpl": "670558a674184d7a676d3a11",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "6705dc2f4846c6a9f18948b8",
                            "_tpl": "6705dba9e4e96fa86c4d5e43",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "6705dc58b9cd6ac5208c19d0",
                            "_tpl": "6705dbea85e6728deb5649c8",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        }
                    ],
                    "barter_scheme": {
                        "66fb79529c13bbb9897e9b4d": [
                            [
                                {
                                    "count": 4500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fb7b955c62fa3cd0bf6871": [
                            [
                                {
                                    "count": 5500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fb86937e8fbe72c1868ccd": [
                            [
                                {
                                    "count": 3000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fb87e57fcecacb6618adae": [
                            [
                                {
                                    "count": 3500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fb9de336bd45546ddeb4ea": [
                            [
                                {
                                    "count": 7500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fb9dfd57dc459c77842e86": [
                            [
                                {
                                    "count": 9000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fb9ff4e70678e16a502999": [
                            [
                                {
                                    "count": 8000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fba0149db74026e8d164af": [
                            [
                                {
                                    "count": 10000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fbe724686300386d2a535d": [
                            [
                                {
                                    "count": 4000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fbe750a17da691f175fa88": [
                            [
                                {
                                    "count": 4500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66ff4d2e3473f2c04252fbbd": [
                            [
                                {
                                    "count": 400,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66ff4d5280ff33f8bc775d9c": [
                            [
                                {
                                    "count": 500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66ff582113a89d88a6f2a596": [
                            [
                                {
                                    "count": 300,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66ff583a8ea2fc248db5a210": [
                            [
                                {
                                    "count": 400,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "67054ab9258c09da2517ca31": [
                            [
                                {
                                    "count": 2300,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "67054ae26e80b1f12b132167": [
                            [
                                {
                                    "count": 3500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "670558ff5a841b216fb13434": [
                            [
                                {
                                    "count": 6000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "67055915edabde5b854f993e": [
                            [
                                {
                                    "count": 7500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "6705dc2f4846c6a9f18948b8": [
                            [
                                {
                                    "count": 800,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "6705dc58b9cd6ac5208c19d0": [
                            [
                                {
                                    "count": 900,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ]
                    },
                    "loyal_level_items": {
                        "66fb79529c13bbb9897e9b4d": 4,
                        "66fb7b955c62fa3cd0bf6871": 4,
                        "66fb86937e8fbe72c1868ccd": 4,
                        "66fb87e57fcecacb6618adae": 4,
                        "66fb9de336bd45546ddeb4ea": 4,
                        "66fb9dfd57dc459c77842e86": 4,
                        "66fb9ff4e70678e16a502999": 4,
                        "66fba0149db74026e8d164af": 4,
                        "66fbe724686300386d2a535d": 4,
                        "66fbe750a17da691f175fa88": 4,
                        "66ff4d2e3473f2c04252fbbd": 2,
                        "66ff4d5280ff33f8bc775d9c": 2,
                        "66ff582113a89d88a6f2a596": 2,
                        "66ff583a8ea2fc248db5a210": 2,
                        "67054ab9258c09da2517ca31": 3,
                        "67054ae26e80b1f12b132167": 3,
                        "670558ff5a841b216fb13434": 4,
                        "67055915edabde5b854f993e": 4,
                        "6705dc2f4846c6a9f18948b8": 2,
                        "6705dc58b9cd6ac5208c19d0": 2
                    }
                }
            ],
            "58330581ace78e27b8b10cee": [ // Skier
                {
                    "items": [
                        {
                            "_id": "66fb9634b1250b92ea2383ce",
                            "_tpl": "66fba5140558a76e49824c42",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb96af4480ff84b617a59a",
                            "_tpl": "66fb95a362464a647b52b698",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        }
                    ],
                    "barter_scheme": {
                        "66fb9634b1250b92ea2383ce": [
                            [
                                {
                                    "count": 4500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fb96af4480ff84b617a59a": [
                            [
                                {
                                    "count": 5500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ]
                    },
                    "loyal_level_items": {
                        "66fb9634b1250b92ea2383ce": 4,
                        "66fb96af4480ff84b617a59a": 4
                    }
                }
            ],
            "5c0647fdd443bc2504c2d371": [ // Jaeger
                {
                    "items": [
                        {
                            "_id": "66fb9b923aa5154823e7f654",
                            "_tpl": "66fb9ac0cf03183ba3642f2b",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fb9bab8905354c20a517eb",
                            "_tpl": "66fb9b3acc7ea11e689ad9fe",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fd343340b6f5e320193ce8",
                            "_tpl": "66fcc851e64b4074b611119c",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "66fd3454b66027cd672b9d31",
                            "_tpl": "66fccc8962916c1f25af9936",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "670556fbb99f2511f5957be4",
                            "_tpl": "670556490b5d8fb1f9893724",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "6705570f8a84ebd0d241a6aa",
                            "_tpl": "670556991ca2c75e34ed4339",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        }
                    ],
                    "barter_scheme": {
                        "66fb9b923aa5154823e7f654": [
                            [
                                {
                                    "count": 7500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fb9bab8905354c20a517eb": [
                            [
                                {
                                    "count": 9000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fd343340b6f5e320193ce8": [
                            [
                                {
                                    "count": 7500,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "66fd3454b66027cd672b9d31": [
                            [
                                {
                                    "count": 9000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "670556fbb99f2511f5957be4": [
                            [
                                {
                                    "count": 150,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "6705570f8a84ebd0d241a6aa": [
                            [
                                {
                                    "count": 250,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ]
                    },
                    "loyal_level_items": {
                        "66fb9b923aa5154823e7f654": 4,
                        "66fb9bab8905354c20a517eb": 4,
                        "66fd343340b6f5e320193ce8": 3,
                        "66fd3454b66027cd672b9d31": 3,
                        "670556fbb99f2511f5957be4": 1,
                        "6705570f8a84ebd0d241a6aa": 1
                    }
                }
            ],
            "5a7c2eca46aef81a7ca2145d": [ // Mechanic
                {
                    "items": [
                        {
                            "_id": "67055aed6d44977e3f8e5f20",
                            "_tpl": "67055a310bdc2881d62df49b",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "67055b058655e8f6f9c435ed",
                            "_tpl": "67055a6fc05ebf2065e699e1",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "6705dfd1c7185bc63f3b78de",
                            "_tpl": "6705df7359d64ebd1df8274e",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        }
                    ],
                    "barter_scheme": {
                        "67055aed6d44977e3f8e5f20": [
                            [
                                {
                                    "count": 900,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "67055b058655e8f6f9c435ed": [
                            [
                                {
                                    "count": 1100,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "6705dfd1c7185bc63f3b78de": [
                            [
                                {
                                    "count": 5,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ]
                    },
                    "loyal_level_items": {
                        "67055aed6d44977e3f8e5f20": 4,
                        "67055b058655e8f6f9c435ed": 4,
                        "6705dfd1c7185bc63f3b78de": 1
                    }
                }
            ]
        }

        const db = container.resolve<DatabaseServer>("DatabaseServer");

        const dbT = db.getTables();

        for (const trader in assortTbl)
        {
            assortTbl[trader].forEach(obj => {
                for (const item in obj.items)
                {
                    dbT.traders[trader].assort.items.push(obj.items[item]);
                }

                for (const item in obj.barter_scheme)
                {
                    dbT.traders[trader].assort.barter_scheme[item] = obj.barter_scheme[item];
                }

                for (const item in obj.loyal_level_items)
                {
                    dbT.traders[trader].assort.loyal_level_items[item] = obj.loyal_level_items[item];
                }
            });
        }

        const itemHelper: ItemHelper = container.resolve<ItemHelper>("ItemHelper");

        const items = Object.values(dbT.templates.items);

        const magazines = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.MAGAZINE));
        const cylinders = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.CYLINDER_MAGAZINE));
        const ars = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.ASSAULT_RIFLE));
        const carbines = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.ASSAULT_CARBINE));
        const mgs = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.MACHINE_GUN));
        const srs = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.SNIPER_RIFLE));
        const mrs = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.MARKSMAN_RIFLE));
        const pistols = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.PISTOL));
        const smgs = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.SMG));
        const shotguns = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.SHOTGUN));

        for (const magazine of magazines)
        {
            for (const ammoType of magazine._props.Cartridges[0]._props.filters[0].Filter)
            {
                if (ammoType === "56dff0bed2720bb0668b4567") // 5.45
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb864e537337a92fef5033");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb87a4bc6372fabe5a3488");
                }
                if (ammoType === "59e6920f86f77411d82aa167") // 5.56
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fa8e0599c008dd9e0fb657");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fae1d6363bd83e0ab522ca");
                }

                if (ammoType === "64b7af5a8532cf95ee0a0dbd") // 7.62x39
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb7683fa5439c11ca9d9e1");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb7b5dd837431fe2228e26");
                }

                if (ammoType === "5e023e53d4353e3302577c4c") // 7.62x51
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb8a4e8de9185a63e72bb0");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb8ab727786a577b0c4786");
                }

                if (ammoType === "64b7bbb74b75259c590fa897") // 9x19
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb917da189607ad217ffef");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb91d7db7dfd315bade30d");
                }

                if (ammoType === "5fbe3ffdf8b6a877a729ea82") // .300
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fba5140558a76e49824c42");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb95a362464a647b52b698");
                }

                if (ammoType === "5efb0d4f4bc50b58e81710f3") // .45 ACP
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb98a14d1430da00a13500");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb98f0a03776db08b20324");
                }

                if (ammoType === "5fc275cf85fd526b824a571a") // .338 Lapua Magnum
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb9ac0cf03183ba3642f2b");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb9b3acc7ea11e689ad9fe");
                }

                if (ammoType === "5cadf6ddae9215051e1c23b2") // 12.7x55
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb9d173370c7729baed341");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb9d4bbc2ff36e9d6a3af4");
                }

                if (ammoType === "59e77a2386f7742ee578960a") // 7.62x54R
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb9fac1c55070606ecdff3");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fb9fb38243d4c4b9620605");
                }

                if (ammoType === "5c0d668f86f7747ccb7f13b2") // 9x39mm
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fbe6641ca64895de0c9030");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fbe6a3625f4d687b2b523b");
                }

                if (ammoType === "560d5e524bdc2d25448b4571") // 12 gauge
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fcc851e64b4074b611119c");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66fccc8962916c1f25af9936");
                }

                if (ammoType === "5737218f245977612125ba51") // 9x18mm
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66ff4c5156f7ddd2307556b2");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66ff4cb1a867da9c785d1065");
                }

                if (ammoType === "5735ff5c245977640e39ba7e") // 7.62x25
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66ff51f79af5ebd0cdbefb22");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("66ff527702b4665f67e8c191");
                }

                if (ammoType === "62330b3ed4dc74626d570b95") // .357
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("670547b27b51eb084de1bd17");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("670548094c31de82665fc4cd");
                }

                if (ammoType === "59e6658b86f77411d949b250") // .366
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("67054a16d70c257fec9c24d2");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("67054a6814d84a3bd821de8d");
                }

                if (ammoType === "5d6e69c7a4b9360b6c0d54e4") // 20/70
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("670556490b5d8fb1f9893724");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("670556991ca2c75e34ed4339");
                }

                if (ammoType === "5f647f31b6238e5dd066e196") // 23x75mm
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("6705584cabe9a5cb48c1a2eb");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("670558a674184d7a676d3a11");
                }

                if (ammoType === "64b6979341772715af0f9c39") // 4.6x30mm
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("67055a310bdc2881d62df49b");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("67055a6fc05ebf2065e699e1");
                }

                if (ammoType === "5cc86832d7f00c000d3a6e6c") // 5.7x28mm
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("67055c41eba56eaa35ba547e");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("67055c83237e8b00818cd005");
                }

                if (ammoType === "6529302b8c26af6326029fb7") // 6.8x51mm
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("67055ddbc4ff44d276a9afb9");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("67055e203cb46c6a4354cea2");
                }

                if (ammoType === "5a269f97c4a282000b151807") // 9x21mm
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("6705dba9e4e96fa86c4d5e43");
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("6705dbea85e6728deb5649c8");
                }

                if (ammoType === "6601546f86889319850bd566") // 20x1mm TOY GUN
                {
                    magazine._props.Cartridges[0]._props.filters[0].Filter.push("6705df7359d64ebd1df8274e");
                }
            }
        }

        for (const cylinder of cylinders)
        {
            for (const num in cylinder._props.Slots)
            {
                for (const ammoType of cylinder._props.Slots[num]._props.filters[0].Filter)
                {
                    if (ammoType === "5cadf6ddae9215051e1c23b2") // 12.7x55
                    {
                        cylinder._props.Slots[num]._props.filters[0].Filter.push("66fb9d173370c7729baed341");
                        cylinder._props.Slots[num]._props.filters[0].Filter.push("66fb9d4bbc2ff36e9d6a3af4");
                    }

                    if (ammoType === "5d6e6772a4b936088465b17c") // 12g
                    {
                        cylinder._props.Slots[num]._props.filters[0].Filter.push("66fcc851e64b4074b611119c")
                        cylinder._props.Slots[num]._props.filters[0].Filter.push("66fccc8962916c1f25af9936")
                    }

                    if (ammoType === "62330b3ed4dc74626d570b95") // .357
                    {
                        cylinder._props.Slots[num]._props.filters[0].Filter.push("670547b27b51eb084de1bd17");
                        cylinder._props.Slots[num]._props.filters[0].Filter.push("670548094c31de82665fc4cd");
                    }
                }
            }
        }

        for (const ar of ars)
        {
            if (ar._props)
            {
                if (ar._props.Chambers[0])
                {
                    if (ar._props.Chambers[0]._props)
                    {
                        if (ar._props.Chambers[0]._props.filters[0])
                        {
                            if (ar._props.Chambers[0]._props.filters[0].Filter)
                            {
                                if (ar._props.ammoCaliber === "Caliber545x39")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb864e537337a92fef5033");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb87a4bc6372fabe5a3488");
                                }
                                if (ar._props.ammoCaliber === "Caliber556x45NATO")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fa8e0599c008dd9e0fb657");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fae1d6363bd83e0ab522ca");
                                }

                                if (ar._props.ammoCaliber === "Caliber762x39")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb7683fa5439c11ca9d9e1");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb7b5dd837431fe2228e26");
                                }

                                if (ar._props.ammoCaliber === "Caliber762x51")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb8a4e8de9185a63e72bb0");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb8ab727786a577b0c4786");
                                }

                                if (ar._props.ammoCaliber === "Caliber762x35")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fba5140558a76e49824c42");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb95a362464a647b52b698");
                                }

                                if (ar._props.ammoCaliber === "Caliber127x55")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb9d173370c7729baed341");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fb9d4bbc2ff36e9d6a3af4");
                                }

                                if (ar._props.ammoCaliber === "Caliber9x39")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fbe6641ca64895de0c9030");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("66fbe6a3625f4d687b2b523b");
                                }

                                if (ar._props.ammoCaliber === "Caliber68x51")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("67055ddbc4ff44d276a9afb9");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("67055e203cb46c6a4354cea2");
                                }

                                if (ar._props.ammoCaliber === "Caliber366TKM")
                                {
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("67054a16d70c257fec9c24d2");
                                    ar._props.Chambers[0]._props.filters[0].Filter.push("67054a6814d84a3bd821de8d");
                                }
                            }
                        }
                    }
                }
            }
        }

        for (const carbine of carbines)
        {
            if (carbine._props)
            {
                if (carbine._props.Chambers[0])
                {
                    if (carbine._props.Chambers[0]._props)
                    {
                        if (carbine._props.Chambers[0]._props.filters[0])
                        {
                            if (carbine._props.Chambers[0]._props.filters[0].Filter)
                            {
                                if (carbine._props.ammoCaliber === "Caliber545x39")
                                {
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fb864e537337a92fef5033");
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fb87a4bc6372fabe5a3488");
                                }

                                if (carbine._props.ammoCaliber === "Caliber556x45NATO")
                                {
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fa8e0599c008dd9e0fb657");
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fae1d6363bd83e0ab522ca");
                                }

                                if (carbine._props.ammoCaliber === "Caliber762x39")
                                {
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fb7683fa5439c11ca9d9e1");
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fb7b5dd837431fe2228e26");
                                }

                                if (carbine._props.ammoCaliber === "Caliber762x51")
                                {
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fb8a4e8de9185a63e72bb0");
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fb8ab727786a577b0c4786");
                                }

                                if (carbine._props.ammoCaliber === "Caliber762x54R")
                                {
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fb9fac1c55070606ecdff3");
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fb9fb38243d4c4b9620605");
                                }

                                if (carbine._props.ammoCaliber === "Caliber9x39")
                                {
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fbe6641ca64895de0c9030");
                                    carbine._props.Chambers[0]._props.filters[0].Filter.push("66fbe6a3625f4d687b2b523b");
                                }
                            }
                        }
                    }
                }
            }
        }

        for (const mg of mgs)
        {
            if (mg._props)
            {
                if (mg._props.Chambers[0])
                {
                    if (mg._props.Chambers[0]._props)
                    {
                        if (mg._props.Chambers[0]._props.filters[0])
                        {
                            if (mg._props.Chambers[0]._props.filters[0].Filter)
                            {
                                if (mg._props.ammoCaliber === "Caliber545x39")
                                {
                                    mg._props.Chambers[0]._props.filters[0].Filter.push("66fb864e537337a92fef5033");
                                    mg._props.Chambers[0]._props.filters[0].Filter.push("66fb87a4bc6372fabe5a3488");
                                }

                                if (mg._props.ammoCaliber === "Caliber762x54R")
                                {
                                    mg._props.Chambers[0]._props.filters[0].Filter.push("66fb9fac1c55070606ecdff3");
                                    mg._props.Chambers[0]._props.filters[0].Filter.push("66fb9fb38243d4c4b9620605");
                                }
                            }
                        }
                    }
                }
            }
        }

        for (const sr of srs)
        {
            if (sr._props)
            {
                if (sr._props.Chambers[0])
                {
                    if (sr._props.Chambers[0]._props)
                    {
                        if (sr._props.Chambers[0]._props.filters[0])
                        {
                            if (sr._props.Chambers[0]._props.filters[0].Filter)
                            {
                                if (sr._props.ammoCaliber === "Caliber762x51")
                                {
                                    sr._props.Chambers[0]._props.filters[0].Filter.push("66fb8a4e8de9185a63e72bb0");
                                    sr._props.Chambers[0]._props.filters[0].Filter.push("66fb8ab727786a577b0c4786");
                                }

                                if (sr._props.ammoCaliber === "Caliber86x70")
                                {
                                    sr._props.Chambers[0]._props.filters[0].Filter.push("66fb9ac0cf03183ba3642f2b");
                                    sr._props.Chambers[0]._props.filters[0].Filter.push("66fb9b3acc7ea11e689ad9fe");
                                }

                                if (sr._props.ammoCaliber === "Caliber762x54R")
                                {
                                    sr._props.Chambers[0]._props.filters[0].Filter.push("66fb9fac1c55070606ecdff3");
                                    sr._props.Chambers[0]._props.filters[0].Filter.push("66fb9fb38243d4c4b9620605");
                                }

                                if (sr._props.ammoCaliber === "Caliber366TKM")
                                {
                                    sr._props.Chambers[0]._props.filters[0].Filter.push("67054a16d70c257fec9c24d2");
                                    sr._props.Chambers[0]._props.filters[0].Filter.push("67054a6814d84a3bd821de8d");
                                }
                            }
                        }
                    }
                }
            }
        }

        for (const mr of mrs)
        {
            if (mr._props)
            {
                if (mr._props.Chambers[0])
                {
                    if (mr._props.Chambers[0]._props)
                    {
                        if (mr._props.Chambers[0]._props.filters[0])
                        {
                            if (mr._props.Chambers[0]._props.filters[0].Filter)
                            {
                                if (mr._props.ammoCaliber === "Caliber762x51")
                                {
                                    mr._props.Chambers[0]._props.filters[0].Filter.push("66fb8a4e8de9185a63e72bb0");
                                    mr._props.Chambers[0]._props.filters[0].Filter.push("66fb8ab727786a577b0c4786");
                                }

                                if (mr._props.ammoCaliber === "Caliber86x70")
                                {
                                    mr._props.Chambers[0]._props.filters[0].Filter.push("66fb9ac0cf03183ba3642f2b");
                                    mr._props.Chambers[0]._props.filters[0].Filter.push("66fb9b3acc7ea11e689ad9fe");
                                }

                                if (mr._props.ammoCaliber === "Caliber762x54R")
                                {
                                    mr._props.Chambers[0]._props.filters[0].Filter.push("66fb9fac1c55070606ecdff3");
                                    mr._props.Chambers[0]._props.filters[0].Filter.push("66fb9fb38243d4c4b9620605");
                                }

                                if (mr._props.ammoCaliber === "Caliber9x39")
                                {
                                    mr._props.Chambers[0]._props.filters[0].Filter.push("66fbe6641ca64895de0c9030");
                                    mr._props.Chambers[0]._props.filters[0].Filter.push("66fbe6a3625f4d687b2b523b");
                                }
                            }
                        }
                    }
                }
            }
        }

        for (const pistol of pistols)
        {
            if (pistol._props)
            {
                if (pistol._props.Chambers[0])
                {
                    if (pistol._props.Chambers[0]._props)
                    {
                        if (pistol._props.Chambers[0]._props.filters[0])
                        {
                            if (pistol._props.Chambers[0]._props.filters[0].Filter)
                            {
                                if (pistol._props.ammoCaliber === "Caliber9x19PARA")
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66fb917da189607ad217ffef");
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66fb91d7db7dfd315bade30d");
                                }

                                if (pistol._props.ammoCaliber === "Caliber1143x23ACP")
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66fb98a14d1430da00a13500");
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66fb98f0a03776db08b20324");
                                }

                                if (pistol._props.ammoCaliber === "Caliber127x55")
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66fb9d173370c7729baed341");
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66fb9d4bbc2ff36e9d6a3af4");
                                }

                                if (pistol._props.ammoCaliber === "Caliber9x18PM" || pistol._props.ammoCaliber === "Caliber9x18PMM")
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66ff4c5156f7ddd2307556b2");
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66ff4cb1a867da9c785d1065");
                                }

                                if (pistol._props.ammoCaliber === "Caliber762x25TT")
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66ff51f79af5ebd0cdbefb22");
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("66ff527702b4665f67e8c191");
                                }

                                if (pistol._props.ammoCaliber === "Caliber9x33R") // .357
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("670547b27b51eb084de1bd17");
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("670548094c31de82665fc4cd");
                                }

                                if (pistol._props.ammoCaliber === "Caliber57x28") // 5.7x28mm
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("67055c41eba56eaa35ba547e");
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("67055c83237e8b00818cd005");
                                }

                                if (pistol._props.ammoCaliber === "Caliber9x21") // 5.7x28mm
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("6705dba9e4e96fa86c4d5e43");
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("6705dbea85e6728deb5649c8");
                                }

                                if (pistol._props.ammoCaliber === "Caliber20x1mm") // 5.7x28mm
                                {
                                    pistol._props.Chambers[0]._props.filters[0].Filter.push("6705df7359d64ebd1df8274e");
                                }
                            }
                        }
                    }
                }
            }
        }

        for (const smg of smgs)
        {
            if (smg._props)
            {
                if (smg._props.Chambers[0])
                {
                    if (smg._props.Chambers[0]._props)
                    {
                        if (smg._props.Chambers[0]._props.filters[0])
                        {
                            if (smg._props.Chambers[0]._props.filters[0].Filter)
                            {
                                if (smg._props.ammoCaliber === "Caliber9x19PARA")
                                {
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("66fb917da189607ad217ffef");
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("66fb91d7db7dfd315bade30d");
                                }
                    
                                if (smg._props.ammoCaliber === "Caliber1143x23ACP")
                                {
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("66fb98a14d1430da00a13500");
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("66fb98f0a03776db08b20324");
                                }

                                if (smg._props.ammoCaliber === "Caliber9x18PM" || smg._props.ammoCaliber === "Caliber9x18PMM")
                                {
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("66ff4c5156f7ddd2307556b2");
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("66ff4cb1a867da9c785d1065");
                                }

                                if (smg._props.ammoCaliber === "Caliber46x30")
                                {
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("67055a310bdc2881d62df49b");
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("67055a6fc05ebf2065e699e1");
                                }

                                if (smg._props.ammoCaliber === "Caliber57x28")
                                {
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("67055c41eba56eaa35ba547e");
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("67055c83237e8b00818cd005");
                                }

                                if (smg._props.ammoCaliber === "Caliber9x21")
                                {
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("6705dba9e4e96fa86c4d5e43");
                                    smg._props.Chambers[0]._props.filters[0].Filter.push("6705dbea85e6728deb5649c8");
                                }
                            }
                        }
                    }
                }
            }
        }

        for (const shotgun of shotguns)
        {
            if (shotgun._props)
            {
                if (shotgun._props.Chambers[0])
                {
                    if (shotgun._props.Chambers[1]) // Double-Barrel
                    {
                        if (shotgun._props.Chambers[0]._props && shotgun._props.Chambers[1]._props)
                        {
                            if (shotgun._props.Chambers[0]._props.filters[0] && shotgun._props.Chambers[1]._props.filters[0])
                            {
                                if (shotgun._props.Chambers[0]._props.filters[0].Filter && shotgun._props.Chambers[1]._props.filters[0].Filter)
                                {
                                    if (shotgun._props.ammoCaliber === "Caliber12g")
                                    {
                                        shotgun._props.Chambers[0]._props.filters[0].Filter.push("66fcc851e64b4074b611119c");
                                        shotgun._props.Chambers[0]._props.filters[0].Filter.push("66fccc8962916c1f25af9936");
                                        shotgun._props.Chambers[1]._props.filters[0].Filter.push("66fcc851e64b4074b611119c");
                                        shotgun._props.Chambers[1]._props.filters[0].Filter.push("66fccc8962916c1f25af9936");
                                    }
                                }
                            }
                        }
                    }
                    else if (shotgun._props.Chambers[0]._props)
                    {
                        if (shotgun._props.Chambers[0]._props.filters[0])
                        {
                            if (shotgun._props.Chambers[0]._props.filters[0].Filter)
                            {
                                if (shotgun._props.ammoCaliber === "Caliber762x54R")
                                {
                                    shotgun._props.Chambers[0]._props.filters[0].Filter.push("66fb9fac1c55070606ecdff3");
                                    shotgun._props.Chambers[0]._props.filters[0].Filter.push("66fb9fb38243d4c4b9620605");
                                }

                                if (shotgun._props.ammoCaliber === "Caliber12g")
                                {
                                    shotgun._props.Chambers[0]._props.filters[0].Filter.push("66fcc851e64b4074b611119c");
                                    shotgun._props.Chambers[0]._props.filters[0].Filter.push("66fccc8962916c1f25af9936");
                                }

                                if (shotgun._props.ammoCaliber === "Caliber20g")
                                {
                                    shotgun._props.Chambers[0]._props.filters[0].Filter.push("670556490b5d8fb1f9893724");
                                    shotgun._props.Chambers[0]._props.filters[0].Filter.push("670556991ca2c75e34ed4339");
                                }

                                if (shotgun._props.ammoCaliber === "Caliber23x75")
                                {
                                    shotgun._props.Chambers[0]._props.filters[0].Filter.push("6705584cabe9a5cb48c1a2eb");
                                    shotgun._props.Chambers[0]._props.filters[0].Filter.push("670558a674184d7a676d3a11");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = { mod: new Exploster() }