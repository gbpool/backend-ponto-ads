const { DateTypes } = required('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DateTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type:DateTypes.STRING,
        allowNull: false
    },
    email: {
        type: DateTypes.STRING,
        allowNull: false
    },
    login: {
        type:DateTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DateTypes.STRING,
        allowNull: false
    }
    
    },{
    timestamps: true
})