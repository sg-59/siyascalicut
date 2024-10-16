const logged = require('../Controller/authcontroller')

const router=require('express').Router()

router.post('/login',logged)

module.exports=router