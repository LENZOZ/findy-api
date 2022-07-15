const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Reserva',{
        id_Reserva:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Usuario_id_usuario: type.INTEGER,
        Local_id_local: type.INTEGER,
        Mesa_id_mesa: type.INTEGER,
        fecha_reserva: type.DATE,
    },{
        freezeTableName: true
    });
}