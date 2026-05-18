const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Juego = sequelize.define(
    'Juego',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'El Título No Puedo Estar Vacío...'
                }
            },
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'sc'
        },
        finished: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, 
    {
        tableName: 'Juego'
    }
)

module.exports = Juego
