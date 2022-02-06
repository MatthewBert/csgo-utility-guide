// map:             MapName,
// mapTitle:        MapName without the de_ prefix,
// type:            [smoke, flash, etc]
// side:            [Terrorist, Counter-Terrorist]
// start_location:  Mid,
// land_location:   Mid Window,
// movement:        Jump Throw,
// img_throw:       image file of where to aim,
// img_stand:       image file of where to stand,
// video:           video source for the throw,
// description:     describe the utilty
// id:              [MapName_StartLocation_LandLocation_Type]

//import [type]_[start_location]_[land_location] from ".."    

export default [
    {
      map: "de_vertigo",
      mapTitle: "Vertigo",
      type: "Smoke",
      side: "Terrorist",
      start_location: "T Spawn",
      land_location: "Xbox",
      movement: "Jump",
      img_throw: "https://i.imgur.com/EynAUdb.png",
      img_stand: "",
      video: "/",
      description:
        "idk bro",
      id: "de_vertigo_idkbro"
    },
    {
      map: "de_vertigo",
      mapTitle: "Vertigo",
      type: "Smoke",
      side: "Terrorist",
      start_location: "XBox",
      land_location: "CT Spawn",
      movement: "None",
      img_throw: "https://i.imgur.com/2AOEyqk.png",
      img_stand: "",
      video: "/",
      description:
        "null",
      id: "null"
    },
    {
      map: "de_vertigo",
      mapTitle: "Vertigo",
      type: "Smoke",
      side: "Terrorist",
      start_location: "B Tunnel",
      land_location: "B Doors",
      movement: "Jump",
      img_throw: "https://i.imgur.com/Ow7Q96t.png",
      img_stand: "",
      video: "/",
      description:
        "",
       id: "empty"
    },
  ];
  