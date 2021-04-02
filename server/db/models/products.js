'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsToMany(models.Orders, {
         through: 'ProductsOrders',
         as: 'Orders',
         foreignKey: 'product_id',
         otherKey: 'order_id'
        });
    }
  };
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.REAL,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING,
    complement: DataTypes.STRING,
    flavor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};