'use strict';
const {
  Model,
  Transaction
} = require('sequelize');
const { hashPassword } = require("../helpers/bcript")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Account)
      User.hasOne(models.Profile)
      User.belongsToMany(models.Transaction,{through: models.Account})
    }
  }
  User.init({
    email: {type : DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: {
          args:true,
          msg: "Email is not Valid"
        },
        notNull:{
          args:true,
          msg:"Email is required"       
        },
        notEmpty:{
          args:true,
          msg:"Email is required"   
        }
      }
    },
    password: {type : DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: {
          args:true,
          msg: "Email is not Valid"
        },
        notNull:{
          args:true,
          msg:"Email is required"       
        },
        notEmpty:{
          args:true,
          msg:"Email is required"   
        }
      }
    },

    role: {type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"user"
    }
    
  }, {
    sequelize,
    modelName: 'User',
    
  });

  User.beforeCreate( (user, options) => {
    const hashedPassword =  hashPassword(user.password);
    user.password = hashedPassword;
  });
  return User;
};