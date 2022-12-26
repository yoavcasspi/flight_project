const express = require('express')
const route = express.Router()
const {CustomerMethods} = require('../controller/controller')
const customersMethods = new CustomerMethods()

route.get('/:username', customersMethods.get_CustomerByUsername)
route.put('/:id',customersMethods.update_Customer )
route.delete('/:id',customersMethods.remove_Customer )
route.post('/',customersMethods.add_Customer)
route.get('/:id',customersMethods.get_CustomerById )
route.get('/',customersMethods.get_AllCustomers )
route.patch('/:id',customersMethods.update_SpecificCustomer)

module.exports = route