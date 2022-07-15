const { type } = require("express/lib/response");

module.exports = (sequalize, type) => {
    return sequalize.define('Caracteristica',{
        id_caracteristica:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        caracteristica: type.STRING,
        id_Mesa: type.INTEGER
    },{
        freezeTableName: true
    });
}