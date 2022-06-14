const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Mesa',{
        id_Mesa:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        capacidad: type.INTEGER,
        nro_mesa: type.INTEGER,
    },{
        freezeTableName: true
    });
}