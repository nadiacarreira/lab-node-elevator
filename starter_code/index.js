const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator ();
let person = new Person ("nerea", 1, 4);

elevator.start();
elevator.floorUp();
elevator.call(person1);
