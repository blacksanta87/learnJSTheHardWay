let cars = 40;
let spaceInACar = 4.0;
let drivers = 30;
let passengers = 90;
let carsNotDriven = cars - drivers;
let carsDriven = drivers;
let carpoolCapacity = carsDriven * spaceInACar;
let averagePassengersPerCar = passengers / carsDriven;


console.log(`There are ${cars} cars available.`);
console.log(`There are only ${drivers} drivers available.`);
console.log(`There will be ${carsNotDriven} empty cars today.`);
console.log(`We can transport ${carpoolCapacity} people today.`);
console.log(`We have ${passengers} to carpool today.`);
console.log(`We need to put about ${averagePassengersPerCar} in each car.`);