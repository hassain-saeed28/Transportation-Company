import { Vehicle } from "./Vehicle.js"
import { Car } from "./Car.js"
import { Plane } from "./Plane.js"
import { Employee } from "./Employee.js"
import { Driver } from "./Driver.js"
import { Pilot } from "./Pilot.js"
import { Booking } from "./Booking.js"

let booking1 = new Booking(new Pilot("Ali",1212,"9/10/1999", "International"), new Plane("Airbus", "AB", 1234, 5, "traditional"))
let booking2 = new Booking(new Driver("hassan",1212,"9/11/1299", "Normal"), new Car("Airbus23", "AC", 1111, 3, "Normal"))
let booking3 = new Booking(new Driver("Khaled", 9999, "1/1/1111", "SD"), new Plane("Boing", "MM", 8976, 2, "Jet"))
let list = [booking1, booking2, booking3]

for(let i = 0 ; i < list.length ; i++){
    console.log("Is the booking valid: " + Booking.checkIfValid(list[i].getEmployee(), list[i].getVehicle()))
}
