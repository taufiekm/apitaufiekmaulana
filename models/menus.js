'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    categoriesID: DataTypes.INTEGER
  }, {});
  menus.associate = function(models) {
    menus.hasMany(models.orders,{
      foreignKey: 'menusID',
    })
  };
  return menus;
};