const router = require('express').Router();

const {Caracteristica} = require('../../db');

router.get('/:mesaId', async (req,res)=>{
    const caracteristicas = await Caracteristica.findAll({
        where: {id_Mesa: req.params.mesaId}
    });
    res.send(caracteristicas);
});



module.exports = router;