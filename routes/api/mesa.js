const router = require('express').Router();
const {Mesa, Usuario, Reserva} = require('../../db');

router.get('/:localId', async (req,res)=>{
    const mesas = await Mesa.findAll({
        where: {Local_id_local: req.params.localId}
    });
    res.send(mesas);
});

router.post('/', async (req,res) => {
    const mesa = await Mesa.findOne({where: {id_Mesa: req.body.mesaId} });
    const usuario = await Usuario.findOne({where: {id_usuario: req.body.id} });
    if (mesa) {
       const reserva = await Reserva.create({
          Usuario_id_usuario: req.body.id,
          Mesa_id_mesa: req.body.mesaId,
          Local_id_local:mesa.Local_id_local,
          fecha_reserva:req.body.fecha
        });

        mesa.Estado_id_Estado = "1";
        await mesa.save();
        res.json(reserva);
      } else {
        console.log("Mesa no encontrada");
      }
    
   });
   

   module.exports = router;