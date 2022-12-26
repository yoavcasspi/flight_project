const express = require('express')
const route = express.Router()
const {TicketsMethods} = require ('../controller/controller')
const ticketsMethods= new TicketsMethods()

route.get('/', ticketsMethods.get_AllTickets)
route.put('/:id', ticketsMethods.update_Tickets)
route.get('/:id', ticketsMethods.get_TicketById)
route.patch('./:id', ticketsMethods.update_SpecificTicket)
route.delete('/:id', ticketsMethods.remove_Tickets)
route.post('/', ticketsMethods.add_Ticket)
route.get('/:username', ticketsMethods.get_TicketsByUsername)

module.exports = route
