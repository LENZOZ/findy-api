const router = require('express').Router();

const {Local} = require('../../db');


router.get('/', async (req,res)=>{
    const locales = await Local.findAll();
    res.send(locales);
});

router.get('/:localId', async (req,res)=>{
    const local = await Local.findOne({
        where: {id_local: req.params.localId}
    });
    res.send(local);
});

router.post('/', async (req, res)=>{
    const local = await Local.create(req.body);
    res.json(local);
});

router.put('/:localId', async (req,res)=>{
    await Local.update(req.body, {
        where: {id_local: req.params.localId}
        });
        res.json({ succes: 'se ha modificado'})
});

router.delete('/:localId', async (req,res)=>{
    await Local.destroy({
        where: {id_local: req.params.localId}
    });
    res.json({success: 'Local deleted'});
})

module.exports = router;