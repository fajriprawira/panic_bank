'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      Account.belongsTo(models.User);
      Account.belongsTo(models.Transaction);
    }
  }

  Account.init({
    noAccount: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Account',
  });

  return Account;
};
