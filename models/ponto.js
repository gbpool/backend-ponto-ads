const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ponto = sequelize.define('Ponto', {
    id_ponto: {
<<<<<<< HEAD
        type:DataTypes.INTEGER,
=======
        type: DataTypes.INTEGER,
>>>>>>> 3e6a7a87cf67544f5b9a8fba79aeb4d1ffa10504
        autoIncrement: true,
        primaryKey: true
    },
    justificativa: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    anexo: {
        type: DataTypes.STRING,
<<<<<<< HEAD
        allowNull:true
    },
    passado: {
        type:DateTypes.BOOLEAN,
        allowNull:true
=======
        allowNull: true
    },
    passado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
>>>>>>> 3e6a7a87cf67544f5b9a8fba79aeb4d1ffa10504
    },
    dataHora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
<<<<<<< HEAD
        type: DataTypes.ENUM('entrada,saida,intervalo,volta-intervalo'),
=======
        type: DataTypes.ENUM('entrada', 'saida', 'intervalo', 'volta'),
>>>>>>> 3e6a7a87cf67544f5b9a8fba79aeb4d1ffa10504
        allowNull: false
    }
},{
    timestamps: true
});

<<<<<<< HEAD
module.exports = ponto;
=======
module.exports = Ponto;
>>>>>>> 3e6a7a87cf67544f5b9a8fba79aeb4d1ffa10504
