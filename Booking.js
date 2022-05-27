import { Vehicle } from "./Vehicle.js"
import { Employee } from "./Employee.js"
import { Car } from "./Car.js"
import { Driver } from "./Driver.js"
import { Pilot } from "./Pilot.js"
import { Plane } from "./Plane.js"

class Booking {
    static numberOfBookings = 0 // static variable to count the number of bookings.
    // Defining the booking properties.
    #dateOfBooking
    #employee
    #vehicle
    
    // constructor to assign values to the variables.
    constructor(employee, vehicle){
        this.#dateOfBooking = new Date()
        this.#employee = employee
        this.#vehicle = vehicle
        Booking.incrementNumberOfBookings()
    }    
        

    // getting functions
    getDateOfBooking(){
        return this.#dateOfBooking
    }

    getEmployee(){
        return this.#employee   
    }

    getVehicle(){
        return this.#vehicle  
    }
    // static function to check if the employee able to take the vehicle.
    static checkIfValid(employee, vehicle){
        if ((employee instanceof Driver && vehicle instanceof Car) || (employee instanceof Pilot && vehicle instanceof Plane)){
            return true
        }
        else {
            return false
        }
    }

    // static function to increase the number of bookings
    static incrementNumberOfBookings(){
        Booking.numberOfBookings++
    }
}