const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Producto',{
        id_producto:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        tipo_producto: type.STRING,
        stock:type.INTEGER,
        precio:type.INTEGER,
        descripcion:type.STRING,
        ruta_imagen:type.STRING,
    },{
        freezeTableName: true
    });
}