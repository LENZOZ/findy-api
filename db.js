const Sequelize = require('sequelize');

const UsuarioModel = require('./models/usuario');
const LocalModel = require('./models/local');
const ProductoModel = require('./models/producto');
const PromocionModel = require('./models/promocion');
const EstadoModel = require('./models/estado');
const MesaModel = require('./models/mesa');

const sequelize = new Sequelize('cfi82355_findy','cfi82355_cfi82355','FUJnGvZMwLzUqXAYqnUB',{
    host:'findy.cl',
    dialect: 'mysql'
});

const Usuario = UsuarioModel(sequelize, Sequelize);
const Local = LocalModel(sequelize, Sequelize);
const Producto = ProductoModel(sequelize, Sequelize);
const Promocion = PromocionModel(sequelize, Sequelize);
const Estado = EstadoModel(sequelize, Sequelize);
const Mesa = MesaModel(sequelize, Sequelize);

sequelize.sync({force: false}).then(()=>{
    console.log('tablas sincronizadas')
})

Producto.belongsTo(Local, {foreignKey: "Local_id_local"});
Local.hasMany(Producto,{foreignKey: "Local_id_local"});

Promocion.belongsTo(Local, {foreignKey: "Local_id_local"});
Local.hasMany(Promocion,{foreignKey: "Local_id_local"})

Mesa.belongsTo(Local, {foreignKey: "Local_id_local"});
Local.hasMany(Mesa,{foreignKey: "Local_id_local"});

Mesa.belongsTo(Estado, {foreignKey: "Estado_id_Estado"});
Estado.hasMany(Mesa,{foreignKey: "Estado_id_Estado"});



module.exports = {
    Usuario,
    Local,
    Producto,
    Promocion,
    Estado,
    Mesa
}