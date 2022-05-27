import { Employee } from "./Employee.js"
export class Pilot extends Employee {
    
    static numberOfPilots = 0 // static variable to count the number of pilots.
    // Defining the pilot properties.
    #licsenseType

    // constructor to assign a value to the variables.
    constructor(name, ID, dateOfBirth, licsenseType){
        super(name, ID, dateOfBirth)
        this.#licsenseType = licsenseType
        Pilot.incrementNumberOfPilots()
    }
    // getting functions.
    getLicsenseType() {
        return this.#licsenseType
    }

    // setting functions.
    setLicsenseType(newLT) {
        this.#licsenseType = newLT
    }

    // function to increase the number of pilots.
    static incrementNumberOfPilots(){
        Pilot.numberOfPilots++
    }
}