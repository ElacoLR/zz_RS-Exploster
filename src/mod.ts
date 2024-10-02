import { keys } from 'ts-transformer-keys';

import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";

import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { BaseClasses } from "@spt/models/enums/BaseClasses";
import { CustomizationCallbacks } from '@spt/callbacks/CustomizationCallbacks';

class Exploster implements IPostDBLoadMod, IPostSptLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const CustomItem = container.resolve<CustomItemService>("CustomItemService");

        const HE_12g: NewItemFromCloneDetails = {
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
                StackMaxSize: 10
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
            },
        };

        const Cluster_12g: NewItemFromCloneDetails = {
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
                StackMaxSize: 5
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
        };

        const HE_127: NewItemFromCloneDetails = {
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
                StackMaxSize: 5
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
        };

        const Cluster_127: NewItemFromCloneDetails = {
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
                StackMaxSize: 5
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
        };

        const HE_300: NewItemFromCloneDetails = {
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
                StackMaxSize: 30
            },
            parentId: "5485a8684bdc2da71d8b4567",
            newId: "66fba5140558a76e49824c42",
            fleaPriceRoubles: 3500,
            handbookPriceRoubles: 2000,
            handbookParentId: "66fb955a896c89fbf84cff83",
            locales: {
                en: {
                    name: ".300 High Explosive",
                    shortName: ".300 HE",
                    description: "Experimental High Explosive round by CBJ Tech. Contains a 6.1g tungsten core projectile inside 1g plastic sabot. It has improved armor penetrating capabilities and improved velocity."
                }
            },
        };

        const Cluster_300: NewItemFromCloneDetails = {
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
                StackMaxSize: 30
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
        };

        const HE_338: NewItemFromCloneDetails = {
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
                StackMaxSize: 10
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
        };

        const Cluster_338: NewItemFromCloneDetails = {
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
                StackMaxSize: 10
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
        };
        
        const HE_45: NewItemFromCloneDetails = {
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
                StackMaxSize: 50
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
        };

        const Cluster_45: NewItemFromCloneDetails = {
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
                StackMaxSize: 30
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
        };

        const HE_545: NewItemFromCloneDetails = {
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
                StackMaxSize: 60
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
        };

        const Cluster_545: NewItemFromCloneDetails = {
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
                StackMaxSize: 60
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
        };

        const HE_556: NewItemFromCloneDetails = {
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
                StackMaxSize: 30
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
        };

        const Cluster_556: NewItemFromCloneDetails = {
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
                StackMaxSize: 30
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
        };

        const HE_762: NewItemFromCloneDetails = {
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
                StackMaxSize: 20
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
        };

        const Cluster_762: NewItemFromCloneDetails = {
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
                StackMaxSize: 20
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
        };

        const HE_762_NATO: NewItemFromCloneDetails = {
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
                StackMaxSize: 20
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
        };

        const Cluster_762_NATO: NewItemFromCloneDetails = {
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
                StackMaxSize: 20
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
        };

        const HE_76254: NewItemFromCloneDetails = {
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
                StackMaxSize: 20
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
        };

        const Cluster_76254: NewItemFromCloneDetails = {
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
                StackMaxSize: 20
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
        };

        const HE_919: NewItemFromCloneDetails = {
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
                StackMaxSize: 50
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
        };

        const Cluster_919: NewItemFromCloneDetails = {
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
                StackMaxSize: 30
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
        };

        const HE_939: NewItemFromCloneDetails = {
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
                StackMaxSize: 20
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
        };

        const Cluster_939: NewItemFromCloneDetails = {
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
                StackMaxSize: 20
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
        };

        CustomItem.createItemFromClone(HE_12g);
        CustomItem.createItemFromClone(Cluster_12g);
        CustomItem.createItemFromClone(HE_127);
        CustomItem.createItemFromClone(Cluster_127);
        CustomItem.createItemFromClone(HE_300);
        CustomItem.createItemFromClone(Cluster_300);
        CustomItem.createItemFromClone(HE_338);
        CustomItem.createItemFromClone(Cluster_338);
        CustomItem.createItemFromClone(HE_45);
        CustomItem.createItemFromClone(Cluster_45);
        CustomItem.createItemFromClone(HE_545);
        CustomItem.createItemFromClone(Cluster_545);
        CustomItem.createItemFromClone(HE_556);
        CustomItem.createItemFromClone(Cluster_556);
        CustomItem.createItemFromClone(HE_762);
        CustomItem.createItemFromClone(Cluster_762);
        CustomItem.createItemFromClone(HE_762_NATO);
        CustomItem.createItemFromClone(Cluster_762_NATO);
        CustomItem.createItemFromClone(HE_76254);
        CustomItem.createItemFromClone(Cluster_76254);
        CustomItem.createItemFromClone(HE_919);
        CustomItem.createItemFromClone(Cluster_919);
        CustomItem.createItemFromClone(HE_939);
        CustomItem.createItemFromClone(Cluster_939);
        
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
                        "66fb99657afe7a3258877e5c": 4
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
                        "66fbe750a17da691f175fa88": 4
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
                        ]
                    },
                    "loyal_level_items": {
                        "66fb9b923aa5154823e7f654": 4,
                        "66fb9bab8905354c20a517eb": 4,
                        "66fd343340b6f5e320193ce8": 3,
                        "66fd3454b66027cd672b9d31": 3
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
                    if (shotgun._props.Chambers[0]._props)
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
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = { mod: new Exploster() }