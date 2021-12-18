function Car(speed,brake){
    this.speed = speed
    this.brake = brake
}

Car.prototype.accelerate = function(speed){
    this.speed = speed
    console.log(`New speed after acceleration, ${this.speed}`)
}

Car.prototype.brakes = function(brake){
    this.speed = this.speed - brake
    console.log(`New speed after braking, ${this.speed}`)
}

const ElectricCar = function(battery,speed, brake){
    this.battery = battery
    Car.call(this,speed,brake)
    console.log(this.speed,this.brake,this.battery)
}

ElectricCar.prototype = Object.create(Car.prototype)
ElectricCar.prototype.getTest = function(){
    return this.test
}
ElectricCar.prototype.batteryDrain = function(drain){
    this.battery = this.battery - drain
    console.log(`New speed ${this.speed} battery ${this.battery}`)
}


let ather = new ElectricCar(99,100,5);

ather.batteryDrain(2);
ather.accelerate(110)

