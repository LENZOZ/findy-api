const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

const {Usuario, Administrador} = require('../../db');
const administrador = require('../../models/administrador');


router.post('/registro',[
    check ('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('contrasenna', 'La contraseña es obligatoria').not().isEmpty(),
    check('correo', 'El correo debe estar correcto').isEmail()
],async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }

    req.body.contrasenna = bcrypt.hashSync(req.body.contrasenna, 10);
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
});

router.post('/login', async (req,res) => {
 const usuario = await Usuario.findOne({where: {correo: req.body.correo} });
 if (usuario){
    const iguales = bcrypt.compareSync(req.body.contrasenna, usuario.contrasenna);
    if(iguales){
        res.send(usuario);
    }else{
        res.json({error: 'Error en usuario y/o contraseña'});
    }
 }else{
     res.json({error: 'Error en usuario y/o contraseña'});
 }
});

router.post('/loginA', async (req,res) => {
    let usuario = await Usuario.findOne({where: {correo: req.body.correo} });
    const id = usuario.id_usuario;
    const credencial= await Administrador.findOne({where:{Usuario_idUsuario:id}});
    if (credencial){
       const iguales = bcrypt.compareSync(req.body.contrasenna, usuario.contrasenna);
       if(iguales){
           res.send(credencial);
           
       }else{
           res.json({error: 'Error en usuario y/o contraseña'});
       }
    }else{
        res.json({error: 'Error en usuario y/o contraseña'});
    }
   });

module.exports = router;