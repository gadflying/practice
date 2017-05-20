const MIN = 1;
const MAX = 50;

const nearestDeep = (floor, direction, queue) => {
  if (floor < MIN || floor > MAX) {
    return null;
  } else if (queue[floor]) {
    return floor;
  } else {
    return nearestDeep(floor + direction, direction, queue);
  }
};

const nearest = (floor, direction, queue) => {
  const nextFloor = nearestDeep(floor + direction, direction, queue);
  queue[nextFloor] = false;
  return nextFloor;
};

const insert = (floor, queue) => {
  queue[floor] = true;
  return queue;
}

const masterQueue = { 1: true, 5: true, 10: true, 12: true, 35: true };

// const nearestFloor = nearest(floor, direction, masterQueue);
// console.log(nearestFloor, masterQueue);

// const elevator = {
//   nextFloor: 1,
//   direction: 1,
//   queue: [],
// }

// const createElevator = () => ({
//   floor: 1,
//   direction: 1,
//   queue: {},
// })
//
// const elevator = createElevator();
// insert(25, masterQueue);
// const nearestFloor = nearest(elevator.floor, elevator.direction, masterQueue);
//
//
//
// console.log(masterQueue);
// console.log(nearestFloor);
//
//
// const TIMES_RUN = 10;
//
// const elevators = [
//   createElevator(),
//   createElevator(),
//   createElevator(),
//   createElevator(),
// ];
//
// const timeoutIds = [];
//




function Elevator(id) {
  this.id = id;
  this.floor = 1;
  this.direction = 1;
  this.queue = {};
}

Elevator.prototype.nearest = function() {
  const { nextFloor, direction, queue } = this;
  const nearestFloor = nearestDeep(nextFloor + direction, direction, queue);
  queue[nearestFloor] = false;
  return nearestFloor;
};

Elevator.prototype.insert = function(floor) {
  this.queue[floor] = true;
}

const main = () => {
  const elevators = [
    new Elevator(1),
    new Elevator(2),
    new Elevator(3),
    new Elevator(4),
  ];

  elevators.forEach((elevator) => {
    const { floor, direction } = elevator;
    const nearestFloor = nearest(floor, direction, masterQueue);
    elevator.insert(nearestFloor);
    console.log(elevator.queue);
  });
}

main();

// elevator.insert(2);
// elevator.insert(7);
// console.log(elevator.nearest());
// console.log(elevator.queue);
// nearest is a hashtable
//

// Elevator has window of accepting new floors
// -- Any number of floors can be added to the queue
// When window closes, starts process to go to next floor
// -- Elevator calls nearest on MasterList
// Elevator gets floor
// Elevator goes to floor
//
