const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const CookieParser = require('cookieparser')

app.use(CookieParser)
app.use(express.json)
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.post('/logout',(req,res)=>{
    
})

const authUser = (req,res,next)=>{
    let user;
    try {
        user = jwt.verify(req.cookies?.token, process.env.SECRET_KEY)
        delete user.iat
        req.user = user
        return next()
    } catch (error) {
        res.redirect('/login')
    }
}
app.use('/',authUser,(req,res)=>{
    return res.render('mainfid.ejs',{name: req.user?.userName})
})
app.get('/register',(req,res)=>{
     res.render('register')
})

const newUser = []
app.post('/register',async (req,res)=>{
    if(req.body?.password){
        try{
const bcryptPassword = await bcrypt.hash(req.body.password, 10)
newUser.push({
    firstName: req.body?.firstName , 
    lastName: req.body?.lastName,
    userName: req.body?.urlencoded,
    password: bcryptPassword,
    emailOrPhone: req.body?.emailOrPhone
})
return res.redirect('/login')
        }catch(error){return res.status(500).json({error})}
    }
})

app.get('/login',(req,res)=>{
    res.render('mainfid')
})

app.post('/login',async (req,res)=>{
    const user = req.body
    const token = await jwt.sign(user, process.env.SECRET_KEY,({expiresIn: '20m'}))
    res.cookie('token',token, {
        httpOnly: true,
        sameSite: 'strict'
    }).redirect('/mainfid')
})

app.listen(3309, () => {
    console.log('your login is runnig')
})