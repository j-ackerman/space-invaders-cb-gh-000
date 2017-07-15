class CrewMember{
  constructor(position){
    this.position = position;
    this.currentShip = "Looking for a Rig";
    this.onShip = false;
  }
  engageWarpDrive(){
    if(this.onShip === true && this.position === 'Pilot'){
      this.currentShip.warpDrive = "engaged!";
      return "Warp drive engaged.";
    } else {
      return "had no effect";
    }
  }
  setsInvisibility(){
    if(this.onShip === true && this.position === 'Defender'){
      this.currentShip.cloaked = true;
      return "Cloaked!";
    } else {
      return "had no effect";
    }
  }
  chargePhasers(){
    if(this.onShip === true && this.position === 'Gunner'){
      this.currentShip.phasersCharge = "charged!";
      return "Phasers charged";
    } else {
      return "had no effect";
    }
  }
}

//var picard = new CrewMember("Jon Luc Picard", "Captain", enterprise);
//var worf = new CrewMember("Worf", "Lieutenant", enterprise)
