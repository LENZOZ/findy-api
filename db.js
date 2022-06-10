const Sequelize = require('sequelize');

const UsuarioModel = require('./models/usuario');
const LocalModel = require('./models/local');
const ProductoModel = require('./models/producto');
const PromocionModel = require('./models/promocion');

const sequelize = new Sequelize('cfi82355_findy','cfi82355_cfi82355','FUJnGvZMwLzUqXAYqnUB',{
    host:'findy.cl',
    dialect: 'mysql'
});

const Usuario = UsuarioModel(sequelize, Sequelize);
const Local = LocalModel(sequelize, Sequelize);
const Producto = ProductoModel(sequelize, Sequelize);
const Promocion = PromocionModel(sequelize, Sequelize);

sequelize.sync({force: false}).then(()=>{
    console.log('tablas sincronizadas')
})

Producto.belongsTo(Local, {foreignKey: "Local_id_local"});
Local.hasMany(Producto,{foreignKey: "Local_id_local"});

Promocion.belongsTo(Local, {foreignKey: "Local_id_local"});
Local.hasMany(Promocion,{foreignKey: "Local_id_local"})


module.exports = {
    Usuario,
    Local,
    Producto,
    Promocion
}