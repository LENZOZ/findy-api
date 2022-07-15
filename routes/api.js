const router = require('express').Router();

const apiUsuarioRouter = require ('./api/usuario');
const apiLocalRouter = require('./api/local');
const apiProductoRouter = require('./api/producto');
const apiPromocionRouter = require('./api/promocion');
const apiEstadoRouter = require('./api/estado');
const apiMesaRouter = require('./api/mesa');
const apiCaracteristicaRouter = require('./api/caracteristica');
const apiReservaRouter = require('./api/reserva')

router.use('/usuario', apiUsuarioRouter);

router.use('/local', apiLocalRouter);

router.use('/producto', apiProductoRouter);

router.use('/promocion', apiPromocionRouter);

router.use('/estado', apiEstadoRouter);

router.use('/mesa', apiMesaRouter);

router.use('/caracteristica', apiCaracteristicaRouter);

router.use('/reserva', apiReservaRouter);


module.exports = router;