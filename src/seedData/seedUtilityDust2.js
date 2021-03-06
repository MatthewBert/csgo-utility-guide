//import [type]_[start_location]_[land_location] from ".."

//img_throw
import Molly_Car_Barrel from "../img/utility-dust2/Molly-Car.jpg";
import Molly_Window_OutsideTunnel from "../img/utility-dust2/Molly-Window.jpg";
import Smoke_OutsideA_ALongCorner from "../img/utility-dust2/Smoke-ALongCorner.jpg";
import Smoke_BDoors_UpperTunnel from "../img/utility-dust2/Smoke-Bdoors.jpg";
import Smoke_DoubleStack_UpperTunnel from "../img/utility-dust2/Smoke-DoubleStack.jpg";
import Smoke_Plat_UpperTunnel from "../img/utility-dust2/Smoke-Plat.jpg";
import Smoke_CTMid_LowerTunnel from "../img/utility-dust2/Smoke-CTMid.jpg";
import Smoke_CTRamp_Cat from "../img/utility-dust2/Smoke-CTRamp-CAT.jpg";
import Smoke_CTRamp_Long from "../img/utility-dust2/Smoke-CTRamp-LONG.jpg";
import Smoke_CTSpawn_Xbox from "../img/utility-dust2/Smoke-CTSpawn.jpg";
import Smoke_Xbox_TSpawn from "../img/utility-dust2/Smoke-Xbox.jpg";

//img_stand (_S)
import Molly_Car_Barrel_S from "../img/utility-dust2/Molly-Car_S.jpg";
import Molly_Window_OutsideTunnel_S from "../img/utility-dust2/Molly-Window_S.jpg";
import Smoke_OutsideA_ALongCorner_S from "../img/utility-dust2/Smoke-ALongCorner_S.jpg";
import Smoke_BTunnnel_Corner from "../img/utility-dust2/BTunnel-Corner_S.jpg";
import Smoke_CTMid_LowerTunnel_S from "../img/utility-dust2/Smoke-CTMid_S.jpg";
import Smoke_CTRamp_Cat_S from "../img/utility-dust2/Smoke-CTRamp-CAT_S.jpg";
import Smoke_CTRamp_Long_S from "../img/utility-dust2/Smoke-CTRamp-LONG_S.jpg";
import Smoke_CTSpawn_Xbox_S from "../img/utility-dust2/Smoke-CTSpawn_S.jpg";
import Smoke_Xbox_TSpawn_S from "../img/utility-dust2/Smoke-Xbox_S.jpg";

//util_land (_U)
import Molly_Car_Barrel_U from "../img/utility-dust2/Molly-Car_U.jpg";
import Molly_Window_OutsideTunnel_U from "../img/utility-dust2/Molly-Window_U.jpg";
import Smoke_OutsideA_ALongCorner_U from "../img/utility-dust2/Smoke-ALongCorner_U.jpg";
import Smoke_BDoors_UpperTunnel_U from "../img/utility-dust2/Smoke-Bdoors_U.jpg";
import Smoke_DoubleStack_UpperTunnel_U from "../img/utility-dust2/Smoke-DoubleStack_U.jpg";
import Smoke_Plat_UpperTunnel_U from "../img/utility-dust2/Smoke-Plat_U.jpg";
import Smoke_CTMid_LowerTunnel_U from "../img/utility-dust2/Smoke-CTMid_U.jpg";
import Smoke_CTRamp_Cat_U from "../img/utility-dust2/Smoke-CTRamp-CAT_U.jpg";
import Smoke_CTRamp_Long_U from "../img/utility-dust2/Smoke-CTRamp-LONG_U.jpg";
import Smoke_CTSpawn_Xbox_U from "../img/utility-dust2/Smoke-CTSpawn_U.jpg";
import Smoke_Xbox_TSpawn_U from "../img/utility-dust2/Smoke-Xbox_U.jpg";

//icon images
import CounterTerrorist from "../img/icons/counter-terrorist.png";
import Terrorist from "../img/icons/terrorist.png";
import Smoke_Grenade from "../img/icons/smoke-grenade.png";
import Molly_Grenade from "../img/icons/molly-grenade.png";
//DONT FORGET TO IMPORT WHEN USED
//import He_Grenade from "../img/icons/he-grenade.png";
//import Flash_Grenade from "../img/icons/flash-grenade.png";

// map:             MapName,
// mapTitle:        MapName WITHOUT the de_ prefix,
// type:            [Smoke, Flash, Molly, Explosive]
// util_icon:       a png image of the icon for the utility [Smoke_Grenade,Molly_Grenade,He_Grenade,Flash_Grenade]
// side:            [Terrorist, Counter-Terrorist]
// side_icon:       a png image of the icon for the side [CT, T]
// start_location:  Mid,
// land_location:   Mid Window,
// movement:        [Stationary, Walking, Running]
// technique:       [Left Click Throw, Right Click Throw, Jump Throw]
// img_throw:       image file of where to aim,
// img_stand:       image file of where to stand,
// util_land:       image file of where the utility landed,
// video:           video source for the throw,
// description:     describe the utilty
// id:              [MapName_StartLocation_LandLocation_Type] (all lowercase)
export default [
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Molotov",
    util_icon: Molly_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Long A Barrel",
    land_location: "Car",
    movement: "Stationary",
    technique: "Jump Throw",
    img_throw: Molly_Car_Barrel,
    img_stand: Molly_Car_Barrel_S,
    util_land: Molly_Car_Barrel_U,
    video: "N/A",
    description:
      "Terrorist can throw a safe molotov from the A Long Barrel to Car which should push out any player playing at car allowing your to safely peak the player as he leaves the location. ",
    id: "de_dust2_longabarrel_car_molotov",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Molotov",
    util_icon: Molly_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Outside B Tunnel",
    land_location: "Window",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Molly_Window_OutsideTunnel,
    img_stand: Molly_Window_OutsideTunnel_S,
    util_land: Molly_Window_OutsideTunnel_U,
    video: "N/A",
    description:
      "Terrorist can throw a safe molotov by standing on the crates outside of B Tunnel. This Molotov will prevent any Counter-Terrorist from entering the site from window.",
    id: "de_dust2_outsidebtunnel_window_molotov",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Outside A",
    land_location: "A Long Corner",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_OutsideA_ALongCorner,
    img_stand: Smoke_OutsideA_ALongCorner_S,
    util_land: Smoke_OutsideA_ALongCorner_U,
    video: "N/A",
    description:
      "Terrorist can throw this smoke to block off any Counter-Terrorist from holding the corner looking into A Long Doors. This is a very common spot for Counter-Terrorist to hold so smoking it off will force any player at that corner to rotate off.",
    id: "de_dust2_outsidea_alongcorner_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Upper Tunnel",
    land_location: "B Doors",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_BDoors_UpperTunnel,
    img_stand: Smoke_BTunnnel_Corner,
    util_land: Smoke_BDoors_UpperTunnel_U,
    video: "N/A",
    description:
      "Terrorist can easily smoke off B Doors from inside Upper Tunnels.",
    id: "de_dust2_uppertunnel_bdoors_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Upper Tunnel",
    land_location: "Double Stack",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_DoubleStack_UpperTunnel,
    img_stand: Smoke_BTunnnel_Corner,
    util_land: Smoke_DoubleStack_UpperTunnel_U,
    video: "N/A",
    description:
      "Terrorist can easily smoke off Double Stack from inside Upper Tunnels.",
    id: "de_dust2_uppertunnel_doublestack_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Upper Tunnel",
    land_location: "Plat",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_Plat_UpperTunnel,
    img_stand: Smoke_BTunnnel_Corner,
    util_land: Smoke_Plat_UpperTunnel_U,
    video: "N/A",
    description:
      "Terrorist can easily smoke off Plat from inside Upper Tunnels.",
    id: "de_dust2_uppertunnel_plat_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Lower Tunnel",
    land_location: "CT Mid",
    movement: "Throw",
    technique: "Left Click Throw",
    img_throw: Smoke_CTMid_LowerTunnel,
    img_stand: Smoke_CTMid_LowerTunnel_S,
    util_land: Smoke_CTMid_LowerTunnel_U,
    video: "N/A",
    description:
      "Terrorist can throw this smoke from outside Lower Tunnels to cut off vision from CT Mid and B. Doing this can allow the Terrorist to safely push into CT Spawn without being seen from enemies that are still in B.",
    id: "de_dust2_lowertunnel_ctmid_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Cat",
    land_location: "CT Ramp",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_CTRamp_Cat,
    img_stand: Smoke_CTRamp_Cat_S,
    util_land: Smoke_CTRamp_Cat_U,
    video: "N/A",
    description:
      "Terrorist can throw this smoke to block off vision from CT Spawn. This smoke is very good if you have other teammates pushing A Long to allow them to cross onto the site safely, just make sure Cat is clear before using this smoke.",
    id: "de_dust2_cat_ctramp_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "A Long",
    land_location: "CT Ramp",
    movement: "Stationary",
    technique: "Jump Throw",
    img_throw: Smoke_CTRamp_Long,
    img_stand: Smoke_CTRamp_Long_S,
    util_land: Smoke_CTRamp_Long_U,
    video: "N/A",
    description:
      "Terrorist can throw this smoke to block off vision from CT Spawn. This smoke is very good if you want to push up A Long and safely cross onto A site without having to worry about enemies in CT Spawn.",
    id: "de_dust2_along_ctramp_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Xbox",
    land_location: "CT Spawn",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_CTSpawn_Xbox,
    img_stand: Smoke_CTSpawn_Xbox_S,
    util_land: Smoke_CTSpawn_Xbox_U,
    video: "N/A",
    description:
      "Terrorist can throw this classic smoke for an excellent Mid to B smoke. Combo this with a flash through the doors for an unstoppable Mid take with your team!",
    id: "de_dust2_xbox_ctspawn_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "T Spawn",
    land_location: "Xbox",
    movement: "Stationary",
    technique: "Jump Throw",
    img_throw: Smoke_Xbox_TSpawn,
    img_stand: Smoke_Xbox_TSpawn_S,
    util_land: Smoke_Xbox_TSpawn_U,
    video: "N/A",
    description:
      "Terrorist can throw this fast Xbox smoke from T spawn allowing the team to cross onto cat without being spotted from CT Mid.",
    id: "de_dust2_tspawn_xbox_smoke",
  },
];
