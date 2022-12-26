
class AirlineCompanyOj{
    constructor(Name_,countryId,username,password_){
    this.Name = Name_?? null;
    this.country_id = countryId?? null;
    this.user_name = username
    this.passward = password_;
}
}
class CustomersOj {
    constructor (firstName, lastName, adress_, phoneNumber, creditCard, userName, password_){
    this.first_name = firstName?? null;
    this.last_name = lastName?? null;
    this.adress = adress_?? null;
    this.phone_no = phoneNumber?? null;
    this.credit_card = creditCard?? null;
    this.useer_name = userName;
    this.password = password_;
   }
}
class AdminstratorsOj{
    constructor (firstName, lastName, userName, password_){
        this.first_name = firstName?? null;
        this.last_name = lastName?? null;
        this.user_name = userName;
        this.password = password_;
    }
}
class flightsOj{
    constructor(airlineCompany_id,originCountry_id,destenationCountry_id,departureTime,landingTime,remainingTickets ){
        this.airline_company_id = airlineCompany_id?? null
        this.origin_country_id = originCountry_id?? null
        this.destenation_country_id = destenationCountry_id?? null
        this.departure_time = departureTime?? null
        this.landing_time = landingTime?? null
        this.remaining_tickets = remainingTickets?? null
    }
}
class countriesOj{
    constructor(name_){
        this.Name_ = name_?? null
    }
}
class TicketsOj{
    constructor(flightId, customerId, ){
        this.flight_id = flightId?? null
        this.customer_id = customerId?? null
    }
}
module.exports =  { AirlineCompanyOj,CustomersOj,AdminstratorsOj,flightsOj,countriesOj, TicketsOj }