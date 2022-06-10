const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Local',{
        id_local:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        rut: type.STRING,
        ubicacion:type.STRING,
        cantidad_mesas:type.INTEGER,
        ruta_imagen:type.STRING

    },{
        freezeTableName: true
    });
}