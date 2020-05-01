const express = require('express')
const router = new express.Router();
const auth= require('../../middlewares/auth')
const jwt = require('jsonwebtoken')
const User= require('../../models/user/user')
router.post('/signup',async (req,res) => {
  try{ 
    const {password,email,name} = req.body
    const user = await new User({password,email,name})
    const token = await user.generateJWT()
    console.log(user)
     res.status(200).send({user,token})
}
catch(e)
    {
        res.status(400).send({ERROR:"ERRORs"})
    }
})
router.get('/me',auth,(req,res)=>{
   res.send({user:req.user,token:req.token})
})
router.post('/login',async (req,res)=>{
    try
    {console.log(req.body)
    const {email,password} = req.body
    console.log(email,password)
    const user = await User.findByCredentials(email,password)
    const token = await user.generateJWT()
    res.send({user,token})
    }
    catch(e)
    {
        console.log(e)
        res.status(400).send({e})
    }
})
router.get('/all',async (req,res) =>{
   const users= await User.find()
   try{ 
        res.send({users})
    }
   catch(e)
   {
       res.status(400).send(e)
   }
})
router.post('/logout',auth,async(req,res)=>{
    req.user.tokens=req.user.tokens.filter(token=>token.token!=req.token)
    req.token=''
    await req.user.save()
    res.send({user:'',token:''})
})
router.post('/logout/all',auth,async (req,res)=>{
    req.user.tokens=[]
    req.token=''
    await req.user.save()
    res.send({user:'',token:''})
})
module.exports= router