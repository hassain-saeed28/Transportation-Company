export class Vehicle {

    static numberOfVehicles; // This variable will count the number of vehicles .
    // Defining the vehicles properties as variables.
    #name
    #manufactureCompany    
    #ID
    // A constructor to assign values to the varibles.
    constructor(name, manufactureCompany, ID){
        this.#name = name
        this.#manufactureCompany = manufactureCompany
        this.#ID = ID

        Vehicle.incrementNumberOfVehicles()
    }

    // Getting functions to get the value of the variables.
    getName() {
        return this.#name
    }

    getMC() {
        return this.#manufactureCompany
    }

    getID() {
        return this.#ID
    }

    // Setting functions to set a new value for the variables.
    setName(newName) {
        this.#name = newName
    }

    setMC(newMC) {
        this.#manufactureCompany = newMC
    }

    setID(newID) {
        this.#ID = newID
    }

    static incrementNumberOfVehicles(){
        Vehicle.numberOfVehicles++
    }

} 

