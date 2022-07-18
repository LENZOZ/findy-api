const router = require('express').Router();
const moment = require('moment')
const {Mesa, Usuario, Reserva} = require('../../db');
const { Op } = require('sequelize')

router.get('/:id', async (req,res)=>{
    const reservas = await Reserva.findAll({
        where: {Usuario_id_usuario: req.params.id}
    });
    res.send(reservas);
});

router.post('/', async (req,res)=>{
    const reservas = await Reserva.findAll({
        where: {Local_id_local: req.body.localId, 
        fecha_reserva:{[Op.gte]:moment().subtract(7, 'days').toDate()},
        }
    });
    res.send(reservas);
});

router.get('/total/:id', async (req,res)=>{
    const reservas = await Reserva.findAll({
        where: {Local_id_local: req.params.id
        }
    });
    res.send(reservas);
});



module.exports = router;