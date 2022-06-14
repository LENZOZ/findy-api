const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Estado',{
        id_Estado:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado: type.INTEGER
    },{
        freezeTableName: true
    });
}