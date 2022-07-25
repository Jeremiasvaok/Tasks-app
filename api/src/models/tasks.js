const {DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('tasks',
  {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey:true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.TEXT,
    },
    done:{
        type: DataTypes.BOOLEAN
    }
});
};