class Spaceship{
  constructor(name,crew,phasers,shields){
    this.name = name;
    if(crew === undefined) this.crew = [];
    else this.crew = crew;
    if(phasers === undefined) this.phasers = 5;
    else this.phasers = phasers;
    if(shields === undefined) this.shields = 4;
    else this.shields = shields;
    this.cloaked = false;
    this.phasersCharge = "uncharged";
    this.warpDrive = "disengaged";
    if(crew.length > 0) this.docked = false;
    else this.docked = true;
    for(var i = 0; i < crew.length; i++){
      crew[i].currentShip = this;
      crew[i].onShip = true;
    }
  }
}
