const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Personal',{
        id_personal:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Local_id_local: type.INTEGER,
        cargo: type.STRING,
        correo:type.STRING,
        rut:type.INTEGER,
        nombre:type.STRING,
        fecha_nacimiento:type.DATE,
        telefono:type.INTEGER,
    },{
        freezeTableName: true,
    });
}