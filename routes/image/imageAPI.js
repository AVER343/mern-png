const express = require('express')
const router = new express.Router();
const Image = require('../../models/json-data/json-data')
router.get('/image',async (req,res)=>{
       try{ const list=await Image.find({})
        res.status(200).send({listArray:list[0].list})
    }
    catch(e)
    {
        res.status(400).send({ERROR:"ERROR"})
    }
    })
module.exports=router