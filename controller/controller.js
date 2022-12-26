const  { AirlineCompanyOj,CustomersOj,AdminstratorsOj,flightsOj,countriesOj,TicketsOj }  = require('../model/objects');
const {AirlineCompany,Customers,Adminstrators,Flights,countries,tickets} = require('../model/methods');
const airlineKnex = new AirlineCompany()
const customerKnex = new Customers()
const adminKnex = new Adminstrators()
const flightKnex = new Flights()
const countryKnex = new countries()
const ticketKnex = new tickets()

class AirlineMethods{
    get_AllAirline = async (req, res)=>{
        try{
            const airline = await airlineKnex.getAllAirlineCompany();
            return res.Json(airline)
        }catch (error){
            rej.json({error:'error somthing wrong ' }).status(500)
        }
    }

    get_AirlineById = async (req, res) => {
        const id = req.params?.id;
        try{
            const airline = await airlineKnex.getAirlineById(id);
            if(airline.length > 0){
            return res.json (airline[0]);  
        }
        return res.json({ messege: 'There is no airline with ID ${id}' })
        
    }catch (error){
        return rej.json ({error:'ERROR somthing is wrong to find the airline by ID'})
    }}

    update_SpecificAirline = async(req,res)=>{
        const id = req.params?.id
        const { Name_,countryId,username,passward_ } = req.body
        const airlineObject = new AirlineCompanyOj( Name_,countryId,username,passward_)
    if(id && req.body){
        const data = airlineKnex.getAirlineById(id)
        if(data.length > 0){
            const airline = data[0]
            for (const key in airlineObject) {
                    const value = airlineObject[key]
                    if(value){
                        airline[key] = value
                    }
            }
            try{
    await airlineKnex.updateAirline(airline,id)
    return res.json(airline.id)
            }catch(error){
    return res.json({messege: 'somthing went wrong ',error}). status (500)
            }
        }else{
            return res.json({messege: 'there is no user with database'})
        }
    }else{
        return res.json({ message: 'body or id is missing' }).status (400)
    }
    }
    add_Airline = async (req,res)=>{
        const { Name_,countryId,username,passward_ } = req.body
        const airlineObject = new AirlineCompanyOj( Name_,countryId,username,passward_)
        if(req.body){
            try{
                const id = await airlineKnex.addAirline(airlineObject)
                return res.json(id)
            }catch(error){
    return res.json({error: 'something was wrong'})
            }
        }else{
            return res.json({message: 'something was not provided'})
        }
    }
    update_Airline = async (req, res) => {
        const id = req.params?.id
        const { Name_,countryId,username,passward_ } = req.body
        const airlineObject = new AirlineCompanyOj( Name_,countryId,username,passward_)
        if(id && req.body){
        const airline = await airlineKnex.getAirlineById(id)
        try {
            if(airline.length > 0){
                const data = await airlineKnex.updateAirline(airlineObject, id)
                return res.json(data)
            }else{
                const data = await airlineKnex.addAirline(airlineObject)
                return res.json(data)
            }
            
        } catch (error) {
            return res.json({error: 'somthing went  wrong'})
        }
        }else{
            return res.json({message: 'id or body are missing'})
        }
        }
        remove_Airline = async (req, res) => {
            const id = req.params?.id
            try{
                const data = await airlineKnex.removeAirline(id)
                return res.json(data)
            }catch(error){
                    return res.json({error: 'something went wrong'})
            }
        }
        get_AirlineByUserName = async (req,res)=>{
            const username = req.params?.username
            try{
                const data = await airlineKnex.getAirlineByUserName(username)
                if(data.length > 0){
                    return res.json(data[0])
                }else{
                    return res.json({message: 'username not found'})
                }
            }catch(error){
                return res.json({error: 'somthing went wrong'})
            }
        }
}
class CustomerMethods{
    update_SpecificCustomer = async (req,res)=>{
        const id = req.params?.id
        const {firstName, lastName, adress_, phoneNumber, creditCard, userName, password_} = req.body
        const customerObject = new CustomersOj(firstName, lastName, adress_, phoneNumber, creditCard, userName, password_) 
        if(id && req.body){
            const data = await customerKnex.getCustomerById(id)
            if(data.length > 0){
                const customer = data[0] 
                for (const key in customerObject) {
                        const value = customerObject[key]
                        if(value){
                            customerObject[key] = value
                        }
                }
                try {
                    await customerKnex.updateCustomer(customer,id)
                    return res.json(customer.id)
                } catch (error) {
                    return res.json({error: 'somthing went wrong'})
                }
           }else{return res.json({message: 'there is no customer in database'})}
        }else{return res.json({message: 'id or body is missing'})}
    }
    get_AllCustomers = async (req, res) => {
        try{
            const customers = await customerKnex.getAllCustomers()
            return res.json (customers)
        }catch (error){
            return res.json ({error: 'somthing is wrong'})
            
        }
    }
    get_CustomerById = async (req, res) => {
        const id = req.params?.id;
        try {
            const customer = customerKnex.getCustomerById(id)
            if(customer.length > 0){
            return res.json(customer[0])
            }else{
                return res.json({message: `id ${id} not found`})       
        }   
    }catch (error) {
        return res.json({error: 'somtething is wrong'})
        }
    }
    add_Customer = async (req,res)=>{
        const {firstName, lastName, adress_, phoneNumber, creditCard, userName, password_} = req.body
        const customerObject = new CustomersOj(firstName, lastName, adress_, phoneNumber, creditCard, userName, password_) 
        if(req.body){
            try{
    const id = await customerKnex.addCustomer(customerObject) 
    return res.json({id})
            }catch(error){
                return res.json({error})
            }
    
        }else{
            return res.json({ message: "No body was provided" }).status(400)
        }
    }
    remove_Customer = async (req,res)=>{
        const id = req.params?.id
        try{
            const data = await customerKnex.removeCustomer(id)
            return res.json(data)
        }catch(error){
            return res.json({ error: 'something went wrong' }).status(500)
        }
    }
    update_Customer = async (req, res) => {
        const id = req.params?.id;
        const {firstName, lastName, adress_, phoneNumber, creditCard, userName, password_} = req.body
        const customerObject = new CustomersOj(firstName, lastName, adress_, phoneNumber, creditCard, userName, password_) 
        if(id && req.body){
        const customer = customerKnex.getCustomerById(id)
        
        try {
            if(customer.length > 0) {
            const data = await customerKnex.updateCustomer(id, customerObject)
            return res.json (data);   
            }else{
                const data = customerKnex.addCustomer(customerObject)
                return res.json(data)
            }
            }catch(error){
                return res.json ({error: 'somthing is wrong'})
            }
        }else{
            return res.json({message: 'Body or ID is missing'})
        }   
    }
    get_CustomerByUsername = async(req,res) =>{
        const username = req.params?.userName;
        try {
            const data = await customerKnex.getCustomerByUsername(username)
            if (data.length > 0){
                return res.json(data[0])
            }else{
                return({messege: 'username not found'}
                )
            }
        } catch (error) {
            return res.json({error: 'somthing is wrong'})
    
        }   
    }
}
class AdminstratorsMethods{
get_AllAdmin = async (req, res) => {
        try{
            const admin = await adminKnex.getAllAdmins()
            return res.json (admin)
        }catch (error){
            return res.json ({error: 'somthing is wrong'})
            
        }
}
get_AdminById = async (req, res) => {
    const id = req.params?.id;
    try {
        const admin = adminKnex.getAdminById(id)
        if(admin.length > 0){
        return res.json(admin[0])
        }else{
            return res.json({message: `id ${id} not found`})       
    }   
}catch (error) {
    return res.json({error: 'somtething is wrong'})
    }
}
add_Admin = async (req,res)=>{
    const {firstName, lastName, userName, password_} = req.body
    const AdminstratorsObject = new AdminstratorsOj(firstName, lastName, userName, password_) 
    if(req.body){
        try{
const id = await adminKnex.addAdmin(AdminstratorsObject) 
return res.json({id})
        }catch(error){
            return res.json({error})
        }

    }else{
        return res.json({ message: "No body was provided" }).status(400)
    }
  
}
update_Admin = async (req,res) =>{
    const id = req.params?.id
    const{firstName, lastName, userName, password_} = req.body
    const AdminstratorsObject = new AdminstratorsOj(firstName, lastName, userName, password_)
    if(id & req.body){
        const admin = await adminKnex.getAdminById(id)
    try{
        if(admin.length > 0){
            const data = await adminKnex.updateAdmin(AdminstratorsObject,id)
            return res.json(data)
        }else{
            const data = await adminKnex.addAdmin(AdminstratorsObject)
            return res.json(data)
        }
    }catch(error){
      return  res.status(500).json({error: 'something went wrong'})
    }
    }else{
        return res.status(400).json({message: 'body or id is missing'})
    }
}
update_SpecificAdmin = async (req, res) => {
    const id = req.params?.id;         
    const {firstName, lastName, userName, password_} = req.body
    const AdminstratorsObject = new AdminstratorsOj (firstName, lastName, userName, password_)
    if(req.body && id){
        const data = adminKnex.getAdminById(id)
        if(data.length > 0){
            const admin = data[0]
            for (const key in AdminstratorsObject) {
               const value = AdminstratorsObject[key]
               if (value) {
                admin[key] = value;
               }
               try{
                await adminKnex.updateAdmin(AdminstratorsObject,id)
                return res.status(500).json(admin.id)

               }catch(error){
                return res.json({error: 'somthing is wrong'}).status(500)
               }   
             }
              }else{
                return res.json({message: 'user not found'})
          }
             }else{
                return res.json ({message: 'body or id is missing'})
             }
}
remove_Admin = async (req,res)=>{
    const id = req.params?.id
    try{
        const data = await adminKnex.removeAdmin(id)
        return res.json(data)
    }catch(error){
        return res.json({ error: 'something went wrong' }).status(500)
    }
}
get_AdminByUsername = async(req,res) =>{
    const username = req.params?.userName;
    try {
        const data = await adminKnex.getAdminByUsername(username)
        if (data.length > 0){
            return res.json(data[0])
        }else{
            return({messege: 'username not found'}
            )
        }
    } catch (error) {
        return res.json({error: 'somthing is wrong'})

    }   
}

}
class FlightsMethods{
    get_AllFlights = async (req, res) => {
        try{
            const flight = await flightKnex.getAllFlights()
            return res.json (flight)
        }catch (error){
            return res.json ({error: 'somthing is wrong'})
            
        }
    }
    remove_Flights = async (req,res) => {
        const id = req.params?.id
        try {
            const data = await flightKnex.removeFlights(id)
            if(data){
                return res.json(data) 
            }else{
                return res.json({message: `id ${id} not found`})
            }
        } catch (error) {
           return res.json({error: 'somthing went wrong'})
        }
    }  
    get_FlightsById = async (req, res) => {
        const id = req.params?.id;
        try {
            const flight = await flightKnex.getFlightsById(id)
            if(flight.length > 0){
            return res.json(flight[0])
            }else{
                return res.json({message: `id ${id} is not found`})
        }   
    }catch (error) {
        return res.json({error: 'somtething is wrong'})
        }
    }
    get_FlightsByUsername = async(req,res) =>{
        const username = req.params?.userName;
        try {
            const data = await flightKnex.getFlightsByUsername(username)
            if (data.length > 0){
                return res.json(data[0])
            }else{
                return({messege: 'username not found'}
                )
            }
        } catch (error) {
            return res.json({error: 'somthing is wrong'})
    
        }   
    }
    update_SpecificFlight = async(req,res) =>{
        const id = req.params?.id
        const{airlineCompany_id,originCountry_id,destenationCountry_id,departureTime,landingTime,remainingTickets} = req.body
        const FlightsObject = new flightsOj(airlineCompany_id,originCountry_id,destenationCountry_id,departureTime,landingTime,remainingTickets)
        if(id & req.body){
            const data = await flightKnex.getFlightsById(id)
            if(data.length > 0){
                const flight = data[0]
                for (const key in FlightsObject) {
                        const value = FlightsObject[key]
                        if(value){
                            flight[key] = value
                        }
                }
            try {
                await flightKnex.updateFlights(FlightsObject,id)
                return res.json(flight.id)
            } catch (error) {return res.status(500).json({error: 'something went wrong'})}
        }else{return res.status(400).json({message: 'there is no user with database'})}
        }else{return res.status(400).json({message: 'body or id is missing'})}
    }
    update_Flights = async (req,res) => {
        const id = req.params?.id
        const{airlineCompany_id,originCountry_id,destenationCountry_id,departureTime,landingTime,remainingTickets} = req.body
        const FlightsObject = new flightsOj(airlineCompany_id,originCountry_id,destenationCountry_id,departureTime,landingTime,remainingTickets)
        if(req.body && id){
        const flight = await flightKnex.getFlightById(id)
        try {
            if(flight.length > 0){
                const data = flightKnex.updateFlights(FlightsObject, id)
                return res.json(data)
            }else{
                const data = flightKnex.AddFlight(FlightsObject)
                return res.json (data)
            }
        } catch (error) {
            return res.json({error: 'somthing went wrong'})
        }
    }else{return res.status(400).json({message: 'body or id is missing'}) }
    }
    add_Flight = async (req,res)=>{
        const{airlineCompany_id,originCountry_id,destenationCountry_id,departureTime,landingTime,remainingTickets} = req.body
        const FlightsObject = new flightsOj(airlineCompany_id,originCountry_id,destenationCountry_id,departureTime,landingTime,remainingTickets)
        if(req.body){
            try{
            const data = await flightKnex.addFlights(FlightsObject)
            return res.json({data})
            }catch(error){
                return res.status(500).json({error: ''})
            }
        }else{return res.status(400).json({message: 'No body was provided'})}
    }
}  
class CountriesMethods{
        get_AllCountries = async (req,res) =>{
            try {
                const country = await countryKnex.getAllCountries()
                return res.json(country)
            } catch (error) {
                return res.status(500).json(error)
            }
        }
        get_CountriesById = async (req,res) =>{
        const id = req.params?.id
        try {
            const country = await countryKnex.getCountriesById(id)
            if(country.length > 0){
                return res.json(country[0])
            }else{return res.status(500).json({message: `id ${id} is not found`}) }
        } catch (error) {return res.status(400).json({error:'sometihng went wrong'})}
        }
        remove_Countries = async (req,res) =>{
            const id = req.params?.id
            try {
                const data = await countryKnex.removeCountries(id)
                if (data) {    return res.json(data)
                } else {return res.status(500).json({message: `id ${id} is not found`})}
            } catch (error) {return res.status(400).json({error: 'something went wrong'})}
        }
        get_CountriesByUsername = async (req,res) =>{
            req.params?.username
            try {
                const data = await countryKnex.getCountriesByUsername()
                if (data.length > 0) {
                    return res.json(data[0])
                } else {return res.status(500).json({message: `username ${username} was not found`})}
            } catch (error) {return res.status(400).json({error: 'spmething went wrong'})}
        }
        update_SpecificCountry = async (req,res)=>{
            const id = req.params?.id
            const {name_} = req.body
            const CountryObject = new countriesOj(name_)
            if(req.body & id){
                const data = await countryKnex.getCountriesById()
                if(data.length > 0){
                    const country = (data[0])
                    for (const key in CountryObject) {
                            const value = CountryObject[key];
                            if(value){
                                value = country[key]
                            }
                        }
                        try {
                            await countryKnex.updateCountries(CountryObject,id)
                            return res.json(country.id)
                        } catch (error) {
                            return res.json({error: `something went wrong`})}
                    }else{return res.json({message: 'there is no user with database'})}
                }else{return res.json({message: 'body or id is missing'})}
        }
        update_Countries = async (req,res)=>{
            const id = req.params?.id
            const {name_} = req.body
            const CountryObject = new countriesOj(name_)
            if (req.body & id) {
                const country = await countryKnex.getCountriesById(id)
                try {
                    if (data.length > 0) {
                        const data = countryKnex.updateCountries(CountryObject,id)
                        return res.json({data})
                    }else{
                        const data = await countryKnex.addCountries(CountryObject)
                        return res.json({data})
                    }
                } catch (error) {return res.status(500).json({error: 'somethong went wrong'})} 
            } else {return res.status(400).json({message: 'body or id is missing'})}
        }      
        add_Country = async (req,res)=>{
            const {name_} = req.body
            const CountryObject = new countriesOj(name_)
            if(req.body){
                try {
                    const data = await countryKnex.addCountries(CountryObject)
                    return res.json(data)
                } catch (error) {return res.status(500).json({error: 'something went wrong'})}
            }else{return res.status(400).json({message: 'No body was provided'})}
        }  
}
class TicketsMethods{
    //this function is to get all tickets from db
    get_AllTickets = async (req, res) =>{
        try {
           const data = await ticketKnex.getAllTickets()
           return res.json(data)
        } catch (error) {
            return res.json({error: 'somthing went wrong'})
        }
    }
    get_TicketById = async (req, res) =>{
        const id = req.params?.id
        try{
            const ticket = await ticketKnex.getTicketById(id)
            if(ticket.length > 0){
                return res.json(ticket[0])
            }else{return res.json({message: `id ${id} not found`})}
        }catch(error){return res.json({error: 'somthing went wrong'})}  
    }
    add_Ticket = async (req, res) =>{
        const {flightId, customerId} = req.body
        const ticketObject = new TicketsOj(flightId, customerId)
        if(req.body)
        try {
            const data = ticketKnex.addTicket(ticketObject)
            return res.json(data)
        } catch (error) {
            return res.json({error: 'somthing went wrong'})
        }
    }
    update_Tickets = async (req, res) =>{
        const id = req.params?.id
        const {flightId, customerId} = req.body
        const ticketObject = new TicketsOj(flightId, customerId)
        if(req.body && id){
            const ticket = await ticketKnex.getTicketById(id)
            try{
                if(ticket.length > 0){
                    const data = await ticketKnex.updateTickets(ticketObject, id)
                    return res.json(data[0])
                }else{
                    const data = await ticketKnex.addTicket(ticketObject)
                     return res.json(data)
                }            
            }catch(error){ return res.json({error: 'somthing went wrong'})}
        }else{return res.json ({message: 'id or body are missing'})}
        }
    update_SpecificTicket = async (req, res) =>{
            req.params?.id
            const {flightId, customerId} = req.body
            const ticketObject = new TicketsOj(flightId, customerId)
            if(req.body && id){
            const ticket = await ticketKnex.getTicketById(id)
            if(ticket.length > 0){
            const ticket = data[0]
            for (const key in ticketObject) {
            const  value = ticketObject[key];
            if(value){
            value = ticket[key]
            }
            } 
            try {
                await ticketKnex.updateTickets(ticketObject,id)
                return res.json(ticket.id)
            } catch (error) {
                return res.json ({error: 'somthing went wrong'})
            }
            }else{
                return res.json({message: 'there is no user in database'})}
            }else{return res.json({message: 'id or body is missing'})}    
            }
    remove_Tickets = async (req, res) =>{
                const id = req.params?.id
                try {
                const data = await ticketKnex.removeTickets(id)
                    return res.json(data)
                } catch (error) {return res.json({error: 'something went wrong'})}
                }
get_TicketsByUsername = async (req,res) =>{
                    req.params?.username
                    try {
                        const data = await ticketKnex.getTicketByUsername()
                        if (data.length > 0) {
                            return res.json(data[0])
                        } else {return res.status(500).json({message: `username ${username} was not found`})}
                    } catch (error) {return res.status(400).json({error: 'spmething went wrong'})}
                }
            }
        
        
        
    

module.exports ={ AirlineMethods
 ,CustomerMethods
 ,AdminstratorsMethods
 ,FlightsMethods
 ,CountriesMethods
 ,TicketsMethods}










































































