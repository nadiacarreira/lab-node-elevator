  class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];
  }


  start() {
    this.start = setInterval(() => this.update(), 1000)
  }

  stop() {
    setTimeout (() => clearInterval(this.start));

  update() {
    this.log()
   }


  _passengersEnter(person) {

      this.passenger.push(person);
      this.requests.push(person.destinationFloor);
      console.log(`${person.name} has enter the elevator`);


  }
  _passengersLeave() {
    console.log(`${person.name} has left the elevator`);
  }

  floorUp() {
    this.floor < this.MAXFLOOR ? this.floor++ : this.floor = this.floor;

    // this.waittingList.forEach((e,i)=>{
    //   if(e.originFloor == this.floor){
    //     this._passengersEnter(e);
    //     this.waittingList.splice(i,1);
    //   };
    // })
  }
  floorDown() {
    this.floor > 0 ? this.floor-- :this.floor = this.floor;

    // this.passenger.forEach((e,i)=>{
    //   if(e.destinationFloor == this.floor){
    //     this._passengersLeave(e);
    //     this.passenger.splice(i,1);
    //   };
    // })
  }
  call(person) {
    this.requests.push(person.originFloor);
    this.waittingList.push(person);
    this._passengersEnter(person);
   this._passengersLeave(person);
  }
  log() {
    console.log(`directon ${this.direction} floor ${this.floor}`)
  }
}

module.exports = Elevator;
