const router = require('express').Router();

const middlewares = require('./middlewares');
const apiUsuarioRouter = require ('./api/usuario');
const apiLocalRouter = require('./api/local');
const apiProductoRouter = require('./api/producto');
const apiPromocionRouter = require('./api/promocion');
router.use('/usuario', apiUsuarioRouter);

router.use('/local', apiLocalRouter);

router.use('/producto', apiProductoRouter);

router.use('/promocion', apiPromocionRouter)


module.exports = router;