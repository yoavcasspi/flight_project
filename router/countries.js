const express = require('express')
const route = express.Router()
const {CountriesMethods} = require('../controller/controller')
const countryMethods = new CountriesMethods()

route.get('/',countryMethods.get_AllCountries)
route.get('/:id',countryMethods.get_CountriesById)
route.get('/:username',countryMethods.get_CountriesByUsername)
route.post('/',countryMethods.add_Country)
route.patch('/:id',countryMethods.update_SpecificCountry)
route.put('/:id',countryMethods.update_Countries)
route.delete('/:id',countryMethods.remove_Countries)

module.exports = route