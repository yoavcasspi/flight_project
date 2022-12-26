const express = require('express')
const route = express.Router()
const {AdminstratorsMethods}= require('../controller/controller')
const adminMethod = new AdminstratorsMethods()

route.get('/',adminMethod.get_AllAdmin)
route.post('/', adminMethod.add_Admin)
route.get('/:id',adminMethod.get_AdminById)
route.get('/:username',adminMethod.get_AdminByUsername)
route.put('/:id',adminMethod.update_Admin)
route.patch('/:id',adminMethod.update_SpecificAdmin)
route.delete('/:id',adminMethod.remove_Admin)

module.exports = route