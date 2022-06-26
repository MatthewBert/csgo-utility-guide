//import [type]_[start_location]_[land_location] from ".."

//img_throw
import Molly_Mid_Window from "../img/utility-vertigo/Molly-MidWindow.jpg";
import Smoke_TSpawn_Scaffold from "../img/utility-vertigo/Smoke-AScaffold.jpg";
import Smoke_BMain_BCross from "../img/utility-vertigo/Smoke-BCross.jpg";
import Smoke_BStair_CTSpawn from "../img/utility-vertigo/Smoke-BCTSpawn.jpg";
import Smoke_BStair_BWindow from "../img/utility-vertigo/Smoke-BWindow.jpg";
import Smoke_Ramp_LeftASite from "../img/utility-vertigo/Smoke-LeftASite.jpg";
import Smoke_Mid_CT from "../img/utility-vertigo/Smoke-MidCT.jpg";
import Smoke_Mid_Elevator from "../img/utility-vertigo/Smoke-MidElevator.jpg";
import Smoke_Mid_Main from "../img/utility-vertigo/Smoke-MidMain.jpg";
import Smoke_Mid_Window from "../img/utility-vertigo/Smoke-MidWindow.jpg";
import Smoke_Ramp_RightASite from "../img/utility-vertigo/Smoke-RightASite.jpg";



//img_stand (_S)
import Smoke_TSpawn_Scaffold_S from "../img/utility-vertigo/Smoke-AScaffold_S.jpg";
import Smoke_BMain_BCross_S from "../img/utility-vertigo/Smoke-BCross_S.jpg";
import Smoke_BStair_CTSpawn_S from "../img/utility-vertigo/Smoke-BCTSpawn_S.jpg";
import Smoke_BStair_BWindow_S from "../img/utility-vertigo/Smoke-BWindow_S.jpg";
import Smoke_Ramp_LeftASite_S from "../img/utility-vertigo/Smoke-LeftASite_S.jpg";
import Smoke_Mid_CT_S from "../img/utility-vertigo/Smoke-MidCT_S.jpg";
import Smoke_Mid_Elevator_S from "../img/utility-vertigo/Smoke-MidElevator_S.jpg";
import Smoke_Mid_Main_S from "../img/utility-vertigo/Smoke-MidMain_S.jpg";
import Smoke_Mid_Window_S from "../img/utility-vertigo/Smoke-MidWindow_S.jpg";
import Smoke_Ramp_RightASite_S from "../img/utility-vertigo/Smoke-RightASite_S.jpg";

//util_land (_U)
import Molly_Mid_Window_U from "../img/utility-vertigo/Molly-MidWindow_U.jpg";
import Smoke_TSpawn_Scaffold_U from "../img/utility-vertigo/Smoke-AScaffold_U.jpg";
import Smoke_BMain_BCross_U from "../img/utility-vertigo/Smoke-BCross_U.jpg";
import Smoke_BStair_CTSpawn_U from "../img/utility-vertigo/Smoke-BCTSpawn_U.jpg";
import Smoke_Ramp_LeftASite_U from "../img/utility-vertigo/Smoke-LeftASite_U.jpg";
import Smoke_Mid_CT_U from "../img/utility-vertigo/Smoke-MidCT_U.jpg";
import Smoke_Mid_Elevator_U from "../img/utility-vertigo/Smoke-MidElevator_U.jpg";
import Smoke_Mid_Main_U from "../img/utility-vertigo/Smoke-MidMain_U.jpg";
import Smoke_Mid_Window_U from "../img/utility-vertigo/Smoke-MidWindow_U.jpg";
import Smoke_Ramp_RightASite_U from "../img/utility-vertigo/Smoke-RightASite_U.jpg";


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
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Molotov",
    util_icon: Molly_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Mid Corner",
    land_location: "Window",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Molly_Mid_Window,
    img_stand: Smoke_Mid_Window_S,
    util_land: Molly_Mid_Window_U,
    video: "N/A",
    description:
      "N/A",
    id: "de_vertigo_midcorner_window",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "T Spawn",
    land_location: "Scaffolding",
    movement: "Stationary",
    technique: "Jump Throw",
    img_throw: Smoke_TSpawn_Scaffold,
    img_stand: Smoke_TSpawn_Scaffold_S,
    util_land: Smoke_TSpawn_Scaffold_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_tspawn_scaffolding",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "T Spawn",
    land_location: "B Site Cross",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_BMain_BCross,
    img_stand: Smoke_BMain_BCross_S,
    util_land: Smoke_BMain_BCross_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_tspawn_bcross",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "B Stairs",
    land_location: "CT Spawn",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_BStair_CTSpawn,
    img_stand: Smoke_BStair_CTSpawn_S,
    util_land: Smoke_BStair_CTSpawn_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_bstairs_ctspawn",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "B Stairs",
    land_location: "Window",
    movement: "Stationary",
    technique: "Crouch Jump Throw",
    img_throw: Smoke_BStair_BWindow,
    img_stand: Smoke_BStair_BWindow_S,
    util_land: Smoke_Mid_Window_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_bstairs_window",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Ramp",
    land_location: "A Site Left",
    movement: "Stationary",
    technique: "Jump Throw",
    img_throw: Smoke_Ramp_LeftASite,
    img_stand: Smoke_Ramp_LeftASite_S,
    util_land: Smoke_Ramp_LeftASite_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_ramp_asiteleft",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Mid",
    land_location: "CT Spawn",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_Mid_CT,
    img_stand: Smoke_Mid_CT_S,
    util_land: Smoke_Mid_CT_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_mid_ctspawn",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Mid",
    land_location: "Elevator",
    movement: "Running",
    technique: "Left Click Throw",
    img_throw: Smoke_Mid_Elevator,
    img_stand: Smoke_Mid_Elevator_S,
    util_land: Smoke_Mid_Elevator_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_mid_elevator",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Counter-Terrorist",
    side_icon: CounterTerrorist,
    start_location: "Mid",
    land_location: "Mid Main",
    movement: "Running",
    technique: "Left Click Throw",
    img_throw: Smoke_Mid_Main,
    img_stand: Smoke_Mid_Main_S,
    util_land: Smoke_Mid_Main_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_mid_midmain",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Mid",
    land_location: "Mid Main",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_Mid_Window,
    img_stand: Smoke_Mid_Window_S,
    util_land: Smoke_Mid_Window_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_mid_window",
  },
  {
    map: "de_vertigo",
    mapTitle: "Vertigo",
    type: "Smoke",
    util_icon: Smoke_Grenade,
    side: "Terrorist",
    side_icon: Terrorist,
    start_location: "Ramp",
    land_location: "A Site Right",
    movement: "Stationary",
    technique: "Left Click Throw",
    img_throw: Smoke_Ramp_RightASite,
    img_stand: Smoke_Ramp_RightASite_S,
    util_land: Smoke_Ramp_RightASite_U,
    video: "N/A",
    description:
      "",
    id: "de_vertigo_ramp_asiteright",
  },
];
