const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

// TODO: format User table to have all necessary parameters
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        pass: {
            // TODO: reformat this variable to properly validate
            // TODO: figure out password hashing
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [12],
            },
        },
        progress_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'progress',
                key: 'id'
            }
        },
        inventory_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'inventory',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
