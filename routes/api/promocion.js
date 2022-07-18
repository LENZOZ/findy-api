const router = require('express').Router();
const {Promocion} = require('../../db');
const{Local} = require('../../db');


router.get('/:localId', async (req,res)=>{
    const promociones = await Promocion.findAll({
        where: {Local_id_local: req.params.localId, 
            estado:1,
            }
    });
    res.send(promociones);
});
module.exports = router;