const router = require('express').Router();

const {Estado} = require('../../db');


router.get('/', async (req,res)=>{
    const Estados = await Estado.findAll();
    res.send(Estados);
});

module.exports = router;