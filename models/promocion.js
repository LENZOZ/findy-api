const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Promocion',{
        id_Promocion:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_inicio: type.DATE,
        fecha_termino: type.DATE,
        descripcion:type.STRING,
        hora_inicio:type.DATE,
        hora_termino:type.DATE,
        ruta_imagen:type.STRING,
        estado:type.INTEGER
    },{
        freezeTableName: true
    });
}