//import [type]_[start_location]_[land_location] from ".."
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

// map:             MapName,
// mapTitle:        MapName without the de_ prefix,
// type:            [smoke, flash, etc]
// side:            [Terrorist, Counter-Terrorist]
// start_location:  Mid,
// land_location:   Mid Window,
// movement:        [Stationary, Walking, Running]
// technique:       [Left Click Throw, Right Click Throw, Jump Throw]
// img_throw:       image file of where to aim,
// img_stand:       image file of where to stand,
// video:           video source for the throw,
// description:     describe the utilty
// id:              [MapName_StartLocation_LandLocation_Type]
export default [
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Molly",
    side: "Terrorist",
    start_location: "Long A Barrel",
    land_location: "Car",
    movement: "Stationary",
    technique: "Jump Throw",
    img_throw: Molly_Car_Barrel,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can throw a safe molotov from the A Long Barrel to Car which should push out any player playing at car allowing your to safely peak the player as he leaves the location. ",
    id: "de_dust2_longabarrel_car_molotov",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Molly",
    side: "Terrorist",
    start_location: "Outside B Tunnel",
    land_location: "Window",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Molly_Window_OutsideTunnel,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can throw a safe molotov by standing on the crates outside of B Tunnel. This Molotov will prevent any Counter-Terrorist from entering the site from window.",
    id: "de_dust2_outsidebtunnel_window_molotov",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "Outside A",
    land_location: "A Long Corner",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_OutsideA_ALongCorner,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can throw this smoke to block off any Counter-Terrorist from holding the corner looking into A Long Doors. This is a very common spot for Counter-Terrorist to hold so smoking it off will force any player at that corner to rotate off.",
    id: "de_dust2_outsidea_alongcorner_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "Upper Tunnel",
    land_location: "B Doors",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_BDoors_UpperTunnel,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can easily smoke off B Doors from inside Upper Tunnels.",
    id: "de_dust2_uppertunnel_bdoors_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "Upper Tunnel",
    land_location: "Double Stack",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_DoubleStack_UpperTunnel,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can easily smoke off Double Stack from inside Upper Tunnels.",
    id: "de_dust2_uppertunnel_doublestack_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "Upper Tunnel",
    land_location: "Plat",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_Plat_UpperTunnel,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can easily smoke off Plat from inside Upper Tunnels.",
    id: "de_dust2_uppertunnel_plat_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "Lower Tunnel",
    land_location: "CT Mid",
    movement: "Throw",
    technique: "Left Click Throw",
    img_throw: Smoke_CTMid_LowerTunnel,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can throw this smoke from outside Lower Tunnels to cut off vision from CT Mid and B. Doing this can allow the Terrorist to safely push into CT Spawn without being seen from enemies that are still in B.",
    id: "de_dust2_lowertunnel_ctmid_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "Cat",
    land_location: "CT Ramp",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_CTRamp_Cat,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can throw this smoke to block off vision from CT Spawn. This smoke is very good if you have other teammates pushing A Long to allow them to cross onto the site safely, just make sure Cat is clear before using this smoke.",
    id: "de_dust2_cat_ctramp_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "A Long",
    land_location: "CT Ramp",
    movement: "Stationary",
    technique: "Jump Throw",
    img_throw: Smoke_CTRamp_Long,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can throw this smoke to block off vision from CT Spawn. This smoke is very good if you want to push up A Long and safely cross onto A site without having to worry about enemies in CT Spawn.",
    id: "de_dust2_along_ctramp_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "Xbox",
    land_location: "CT Spawn",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_CTSpawn_Xbox,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can throw this classic smoke for an excellent Mid to B smoke. Combo this with a flash through the doors for an unstoppable Mid take with your team!",
    id: "de_dust2_xbox_ctspawn_smoke",
  },
  {
    map: "de_dust2",
    mapTitle: "Dust2",
    type: "Smoke",
    side: "Terrorist",
    start_location: "T Spawn",
    land_location: "Xbox",
    movement: "Stationary",
    technique: "Jump Throw",
    img_throw: Smoke_Xbox_TSpawn,
    img_stand: "",
    video: "N/A",
    description:
      "Terrorist can throw this fast Xbox smoke from T spawn allowing the team to cross onto cat without being spotted from CT Mid.",
    id: "de_dust2_tspawn_xbox_smoke",
  },
];
