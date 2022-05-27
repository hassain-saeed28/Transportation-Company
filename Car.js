import { Vehicle } from "./Vehicle"

export class Car extends Vehicle {
    static numberOfCars = 0 // static variable to count the number of cars.
    // Defining the car properties.
    #engineType
    #gearType

    // consturctor to set values to the variables.
    constructor(name, manufactureCompany, ID, engineType, gearType){
        super(name, manufactureCompany, ID)
        this.#engineType = engineType
        this.#gearType = gearType
        Car.incrementNumberOfCars()
    }

    // getting functions.
    getEngineType() {
        return this.#engineType
    }

    getGearType() {
        return this.#gearType
    }

    // setting functions.
    setEngineType(newET) {
        this.#engineType = newET
    }

    setGearType(newGT) {
        this.#gearType = newGT
    }

    // function to increase the number of cars.
    static incrementNumberOfCars() {
        this.numberOfCars++ 
    }

}