import DataTypes from 'sequelize';
import {sequelize} from '../../../config/database/database.js';


const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: true,
    freezeTableName: true,
});

// Sync the model with the database to create table if it doesn't exist
await User.sync();

export default User;