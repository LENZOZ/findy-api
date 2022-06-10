module.exports = (sequelize, type) => {
    return sequelize.define('Usuario', {
        id_usuario:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        apellido : type.STRING,
        contrasenna: type.STRING,
        fecha_nacimiento: type.DATE,
        rut: type.STRING,
        correo: type.STRING,
        num_telefonico: type.INTEGER,
        ruta_imagen:type.STRING,
    },{
        freezeTableName: true
    });
}