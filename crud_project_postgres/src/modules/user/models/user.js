import DataTypes from 'sequelize';
import sequelize from '../../../config/database/database';


const user = sequelize.define("User", {
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
    timestamps: true
  });

export default user;