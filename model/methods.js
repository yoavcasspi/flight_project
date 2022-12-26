const {knex} = require('../db/db')

//https://knexjs.org/guide/query-builder.html for Knex queries
//res.Json

class AirlineCompany {
// dvir - this function is to get all data from airline_company
getAllAirlineCompany = async () => {
    const data = await knex ('airline_company').select("*");
    return data;
} 
//dvir - this function is for update some data in airline_company 
updateAirline = async () => {
    const data = await knex ('airline_company').update(airline).where(airline || 'id', "=", id);
    return data;
}
// casspi- this function is for add airlinecompany
addAirline = async (airline)=>{
    const data = await knex('airline_company').insert('airline')
return data
}
//casspi- this function is for delete data
 removeAirline = async (id) => {
    const data = await knex('airline_company').delete().where('id', "=" , id)
    return data
 }
// casspi- this function is fot add airline by username
getAirlineByUserName = async (username) => {
    const data = await knex('airline_company').select("*").where('username', "=", username)
    return data 
}
// shem

 getAirlineById = async (id) => {
    const data = await knex('airline_company').select("*").where('id', "=", id);
    return data;
}   
}
class Customers{
    // this function is to get customer by username
    getCustomerByUsername = async (username) => {
        const data = await knex ('customers').select("*").where('username', "=", username)
        return data;
    }
    

//this function is to add another customer to the database
addCustomer = async (customer) => {
    const data = await knex ('customers').insert('customer')
    return data;
}


    // this function is to get all customers
getAllCustomers = async () =>{
    const data = await knex ('customers').select("*")
    return data;
}

// casspi- this function is for get customer by ID
getCustomerById = async (id)=>{
    const data = await knex('customers').select('*').where('id', '=', id)
    return data
}
//  casspi - this functions is for uppdate customer
updateCustomerById = async (customer,id)=>{
    const data = await knex('customers').update(customer).where('id', '=', id)
    return data 
}
//casspi - this function is for delete customer 
removeCustomer = async (id) => {
    const data = await knex('customers').delete().where('id', "=", id);
    return data
}
}
class Adminstrators{
    getAllAdmins = async () =>{
        const data = await knex ('adminstrators').select("*")
        return data;
    }

    getAdminByUsername = async (username) => {
        const data = await knex ('adminstrators').select("*").where('username', "=", username)
        return data;
    }

    addAdmin = async (admin) => {
        const data = await knex ('adminstrators').insert('admin')
        return data;
    }
    getAdminById = async (id)=>{
        const data = await knex('adminstrators').select('*').where('id', '=', id)
        return data
    }
    updateAdmin = async (admin,id)=>{
        const data = await knex('adminstrators').update(admin).where('id', '=', id)
        return data 
    }
    removeAdmin = async (id) =>{
        const data = await knex ('adminstrators').delete().where('id', "=", id)
return data
    }
}
class Flights{
    // this function is to get customer by username
    getFlightsByUsername = async (username) => {
        const data = await knex ('flights').select("*").where('username', "=", username)
        return data;
    }
    

//this function is to add another customer to the database
addFlights = async (flight) => {
    const data = await knex ('flights').insert('flight')
    return data;
}


    // this function is to get all customers
getAllFlights = async () =>{
    const data = await knex ('flights').select("*")
    return data;
}

// casspi- this function is for get customer by ID
getFlightsById = async (id)=>{
    const data = await knex('flights').select('*').where('id', '=', id)
    return data
}
//  casspi - this functions is for uppdate customer
updateFlights = async (flight,id)=>{
    const data = await knex('flights').update(flight).where('id', '=', id)
    return data 
}
//casspi - this function is for delete customer 
removeFlights = async (id) => {
    const data = knex('flights').delete().where('id', "=", id);
    return data
}
}
class countries{
     // this function is to get customer by username
     getCountriesByUsername = async (username) => {
        const data = await knex ('countries').select("*").where('username', "=", username)
        return data;
    }
    // casspi- this function is for get customer by ID
    getCountriesById = async (id)=>{
    const data = await knex('countries').select('*').where('id', '=', id)
    return data
}
    //this function is to add another customer to the database
    addCountries = async (country) => {
    const data = await knex ('countries').insert('country')
    return data
}
// this function is to get all customers
    getAllCountries = async () =>{
    const data = await knex ('countries').select("*")
    return data
}
    //  casspi - this functions is for uppdate customer
    updateCountries = async (country,id)=>{
    const data = await knex('countries').update(country).where('id', '=', id)
    return data 
}
    //casspi - this function is for delete customer 
    removeCountries = async (id) => {
    const data = await knex('countries').delete().where('id', "=", id);
    return data
}
}
class tickets{
    //this function is to get all tickets from db
    getAllTickets = async () =>{
        const data = await knex ('tickets').select("*")
        return data;
    }
    // this function is to get ticket by id
    getTicketById = async(id) =>{
        const data = await knex ('tickets').select("*").where('id', "=", id)
        return data;
    
    }
    //this function is to add another ticket to db
    addTicket = async (ticket) => {
        const data = await knex ('tickets').insert('ticket')
        return data
    }
    //this function is to update ticket
    updateTickets = async (ticket,id)=>{
        const data = await knex('tickets').update(ticket).where('id', '=', id)
        return data 
    }
    //this function is to delete ticket
    removeTickets = async (id) => {
        const data = await knex('tickets').delete().where('id', "=", id);
        return data
    }
         // this function is to get ticket by username
         getTicketByUsername = async (username) => {
            const data = await knex ('tickets').select("*").where('username', "=", username)
            return data;
        }
}

module.exports= {
 AirlineCompany,
 Customers,
 Adminstrators,
 Flights,
 countries,
 tickets}