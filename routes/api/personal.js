const router = require('express').Router();
const {Personal} = require('../../db');


router.get('/:localId', async (req,res)=>{
    const personal = await Personal.findAll({
        where: {Local_id_local: req.params.localId
            }
    });
    res.send(personal);
});
module.exports = router;