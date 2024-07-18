'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Account);
      User.hasOne(models.Profile);
      User.belongsToMany(models.Transaction, { through: models.Account });
    }
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Email is not Valid"
        },
        notNull: {
          args: true,
          msg: "Email is required"
        },
        notEmpty: {
          args: true,
          msg: "Email is required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Password is required"
        },
        notEmpty: {
          args: true,
          msg: "Password is required"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user"
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password);
      }
    }
  });

  return User;
};
