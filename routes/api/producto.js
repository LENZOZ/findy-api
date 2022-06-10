const router = require('express').Router();
const {Producto} = require('../../db');
const{Local} = require('../../db');

router.get('/:localId', async (req,res)=>{
    const productos = await Producto.findAll({
        where: {Local_id_local: req.params.localId}
    });
    res.send(productos);
});
module.exports = router;