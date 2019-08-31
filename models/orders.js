'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    menusID: DataTypes.INTEGER,
    transactionsID: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.TIME
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};