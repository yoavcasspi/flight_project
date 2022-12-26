const express = require('express')
const route = express.Router()
const {FlightsMethods} = require('../controller/controller')
const flightsMethods = new FlightsMethods()

route.get('/',flightsMethods.get_AllFlights)
route.get('/:id',flightsMethods.get_FlightsById)
route.get('/:username',flightsMethods.get_FlightsByUsername)
route.post('/',flightsMethods.add_Flight)
route.patch('/:id',flightsMethods.update_SpecificFlight)
route.put('/:id',flightsMethods.update_Flights)
route.delete('/:id',flightsMethods.remove_Flights)

module.exports = route