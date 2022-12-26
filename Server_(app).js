const express = require('express')
const app = express()
const airlineRouter = require('./router/airlinecompanies')
const customerRouter = require('./router/customer')
const adminRouter = require('./router/adminstrators')
const countryRouter = require('./router/countries')
const flightRouter = require('./router/flights')
const ticketsRouter = require('./router/tickets')


 app.get('/redirect', (req,res)=>{
    res.redirect('http://localhost:3309/index.ejs')})

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('flight',flightRouter)
app.use('customer',customerRouter)
app.use('admin',adminRouter)
app.use('airline',airlineRouter)
app.use('country',countryRouter)
app.use('tickets', ticketsRouter)

app.listen(3308, ()=>{
    console.log('your server is running')
})