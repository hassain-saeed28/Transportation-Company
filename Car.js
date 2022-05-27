import { Vehicle } from "./Vehicle"

export class Car extends Vehicle {
    static numberOfCars = 0
    #engineType
    #gearType

    constructor(name, manufactureCompany, ID, engineType, gearType){
        super(name, manufactureCompany, ID)
        this.#engineType = engineType
        this.#gearType = gearType
        Car.incrementNumberOfCars()
    }

    getEngineType() {
        return this.#engineType
    }

    getGearType() {
        return this.#gearType
    }

    setEngineType(newET) {
        this.#engineType = newET
    }

    setGearType(newGT) {
        this.#gearType = newGT
    }

    static incrementNumberOfCars() {
        this.numberOfCars++ 
    }

}