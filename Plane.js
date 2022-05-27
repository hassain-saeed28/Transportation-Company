import { Vehicle } from "./Vehicle.js";

export class Plane extends Vehicle {
    static numberOfPlanes = 0 // static variable to count the number of planes.
    // defining some plane properties.
    #numberOfEngines 
    #planeType

    // constructor to set a value for the variables.
    constructor(name, manufactureCompany, ID, numberOfEngines, planeType){
        super(name, manufactureCompany, ID)
        this.#numberOfEngines = numberOfEngines
        this.#planeType = planeType
        Plane.incrementNumberOfPlanes()
    }

    // getting functions.
    getNumberOfEngines() {
        return this.#numberOfEngines
    }

    getPlaneType() {
        return this.#planeType
    }

    // setting functions.
    setNumberOfEngines(newNE) {
        this.#numberOfEngines = newNE
    }

    setPlaneType(newPT) {
        this.#planeType = newPT
    }
    
    // function to increase the number of planes.
    static incrementNumberOfPlanes(){
        Plane.numberOfPlanes++
    }
}