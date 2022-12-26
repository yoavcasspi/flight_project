const express = require('express')
const route = express.Router()
const {AirlineMethods} = require('../controller/controller')
const airlineMethods = new AirlineMethods()

route.get('/:username', airlineMethods.get_AirlineByUserName)
route.delete('/:id', airlineMethods.remove_Airline)
route.put('/:id', airlineMethods.update_Airline)
route.post('/', airlineMethods.add_Airline)
route.patch('/:id',airlineMethods.update_SpecificAirline)
route.get('/:id', airlineMethods.get_AirlineById)
route.get('/', airlineMethods.get_AllAirline)

module.exports = route