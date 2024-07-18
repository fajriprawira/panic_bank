'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
  }
  Profile.init({
    fullname: DataTypes.STRING,
    dateofbirth: DataTypes.STRING,
    addres: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};