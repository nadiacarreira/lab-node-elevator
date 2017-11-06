class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.intervalID = [];
  }

  start() {
    this.intervalID = setInterval(()=>this.update(),1*1000)
}
  stop() {
    clearInterval(this.intervalID);
  }
  update() {
  this.log() }


  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
  console.log(`directon ${this.direction} floor ${this.floor}`) }
}

module.exports = Elevator;
