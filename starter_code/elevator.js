class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.intervalID;
  }

  start() {
    this.intervalID = setInterval(() => {
      this.floorUp();
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalID);
  }
  update() {
    this.log();
  }


  _passengersEnter() {}
  _passengersLeave() {}

  floorUp() {
    this.floor < this.MAXFLOOR ? this.floor++ : this.floor = this.floor;
  }
  floorDown() {
    this.floor > 0 ? this.floor-- :this.floor = this.floor;
  }
  call() {}
  log() {
    console.log(`directon ${this.direction} floor ${this.floor}`)
  }
}

module.exports = Elevator;
