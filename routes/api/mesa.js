const router = require('express').Router();
const {Mesa} = require('../../db');

router.get('/:localId', async (req,res)=>{
    const mesas = await Mesa.findAll({
        where: {Local_id_local: req.params.localId}
    });
    res.send(mesas);
});
module.exports = router;

router.post('/', async (req,res) => {
    const mesa = await Mesa.findOne({where: {mesa_id: req.body.mesa} });
    if (mesa) {
        mesa.Estado = "1";
        await mesa.save();
        res.json(mesa);
      } else {
        console.log("Mesa not found");
      }
    
   });
   