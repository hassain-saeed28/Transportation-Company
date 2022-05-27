export class Employee {

    static numberOfEmployees = 0 // static varialbe to count the number of employees.
    // Defining Employee properties.
    #name
    #ID
    #dateOfBirth

    // constructor to set values for the variables.
    constructor(name, ID, dateOfBirth){
        this.#name = name
        this.#ID = ID
        this.#dateOfBirth = dateOfBirth
        Employee.incrementNumberOfEmployees()
    }

    // getting functions
    getName() {
        return this.#name
    }

    getID() {
        return this.#ID
    }

    getDateOfBirth() {
        return this.#dateOfBirth
    }

    // setting functions.
    setName(newName) {
        this.#name = newName
    }

    setID(newID) {
        this.#ID = newID
    }

    setDateOfBirth(newDB) {
        this.#dateOfBirth = newDB
    }

    // function to increase the number of employees.
    static incrementNumberOfEmployees(){
        Employee.numberOfEmployees++
    }

}