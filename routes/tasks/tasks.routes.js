const express = require('express')
const router = new express.Router();
const User = require('../../models/user/user')
const auth= require('../../middlewares/auth')
const Task = require('../../models/task/tasks')
router.post('/tasks',auth,async (req,res)=>{
   try{ 
       console.log(req.body.item)
        const user =await User.findOne({_id:req.user._id})
        await user.favourites.push(req.body.item)
        await user.save()
        res.send(user)
    }
    catch(e)
    {
        res.status(400).send({e:e})
    }
})
router.get('/tasks',auth,async(req,res)=>{
   try{ 
       const user =await User.findOne({_id:req.user._id})
        res.send(user)
    }
    catch(e)
    {
        res.status(400).send({ERROR:"ERROR"})
    }
})
router.delete('/tasks/:id',auth,async(req,res)=>{
    const user =await User.findOne({_id:req.user._id})
    let favourites=await user.favourites.map(elem=>elem._id!=req.params.id?elem:null).filter(elem=>elem!==null)
    user.favourites=favourites
    await user.save()
    res.status(200).send(user)
   
})
module.exports= router