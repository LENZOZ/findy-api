const router = require('express').Router();
const {Promocion} = require('../../db');
const{Local} = require('../../db');


router.get('/', async (req,res)=>{
    const promociones = await Promocion.findAll({
    });
    res.send(promociones);
});
module.exports = router;