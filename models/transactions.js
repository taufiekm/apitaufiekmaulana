'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    tabelNumber: DataTypes.INTEGER,
    finishedTime: DataTypes.TIME,
    subtotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    servicesCharge: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE,
    isPaid: DataTypes.BOOLEAN
  }, {});
  transactions.associate = function(models) {
    transactions.hasMany(models.orders,{
      foreignKey: 'transactionsID',
    })
  };
  return transactions;
};