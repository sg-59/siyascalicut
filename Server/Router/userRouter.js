const { postInfo,getData, singleData, sinDatainQuery, updateData, deleteUser, Nodemailerdata } = require('../Controller/UserController')
const verifyToken = require('../jwtverify')

const router=require('express').Router()


router.post('/postData',postInfo)
router.get('/GetfullData/:id',verifyToken,getData)
router.post("/getSingledata",singleData)
router.get('/query',sinDatainQuery)
router.put('/updateData',updateData)
router.delete('/deleteData',deleteUser)
router.post('/sendemail',Nodemailerdata)
module.exports=router