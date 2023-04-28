const express = require('express');
const router = express.Router();

const Data = require('../models/bardata.js');
const Data1=require('../models/emission.js')
const Data3=require('../models/data.js')




  
router.get('/bardata', async (req, res) => {
  try {
    const classrooms = await Data.find();
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch emission' });
  }
});
router.get('/emission', async (req, res) => {
  try {
    const classrooms = await Data1.find();
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch emission' });
  }
});
router.get('/percentage', async (req, res) => {
  try {
    const classrooms = await Data3.find();
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch emission' });
  }
});
router.post('/bardata', async (req, res) => {
    const {name ,month,index,value}=req.body;
  try {
    new Data(req.body).save().then((item)=>{
        res.json(item);
      });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch emission' });
  }
});

router.post('/emission', async (req, res) => {
    
  try {
    new Data(req.body).save().then((item)=>{
        res.json(item);
      });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch emission' });
  }
});
router.post('/percentage', async (req, res) => {
    
  try {
    new Data3(req.body).save().then((item)=>{
        res.json(item);
      });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch emission' });
  }
});




  

 
  


module.exports = router;
