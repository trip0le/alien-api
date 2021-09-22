const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req, res)=>{
    try{
        const aliens  = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Err'+err)
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const alien  = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Err'+err)
    }
})

router.post('/', async(req, res)=>{
    const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
   })
   try{
        const a1 = await alien.save()
        res.json(a1)
   }catch(err){
       res.send('Error')
   }
})

router.patch('/:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        await alien.remove()
        res.json(`element with id : ${req.params.id} has been deleted from the database`)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router