'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.hasMany(models.Account)
      Transaction.belongsToMany(models.User, {through:models.Account})
    }

  }
  Transaction.init({
  amount:{

    type: DataTypes.INTEGER,
    allowNull:false,
    validate:{
      notEmpty:{msg :'Amount is not Empty'},
      notNull:{msg : 'Amount is required'} 
    }
  },

  type: {
    type: DataTypes.STRING,
    allowNull:false,
    validate:{
      notEmpty:{msg :'Type is not Empty'},
      notNull:{msg : 'Type is required'} 
    }
  },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};