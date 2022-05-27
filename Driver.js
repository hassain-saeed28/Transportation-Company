import { Employee } from "./Employee.js";

export class Driver extends Employee {

    static numberOfDrivers = 0 // static variable to cont the number of drivers.
    // Defining the driver properties.
    #carTypeCanDrive

    // constructor to assign a value to the variables.
    constructor(name, ID, dateOfBirth, carTypeCanDrive){
        super(name, ID, dateOfBirth)
        this.#carTypeCanDrive = carTypeCanDrive
        Driver.incrementNumberOfDrivers()
    }

    // getting functions
    getCTCD() {
        return this.#carTypeCanDrive
    }

    // setting functions.
    setName(newCTCD) {
        this.#carTypeCanDrive = newCTCD
    }

    // function to increase the number of drivers.
    static incrementNumberOfDrivers(){
        Driver.numberOfDrivers++
    }
}