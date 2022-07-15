const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Administrador',{
        Usuario_idUsuario:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Local_id_local: type.INTEGER
    },{
        freezeTableName: true,
        timestamps: false
    });
}