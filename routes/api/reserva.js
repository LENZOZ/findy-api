const router = require('express').Router();
const {Mesa, Usuario, Reserva} = require('../../db');

router.get('/:id', async (req,res)=>{
    const reservas = await Reserva.findAll({
        where: {Usuario_id_usuario: req.params.id}
    });
    res.send(reservas);
});

module.exports = router;