const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Produits = sequelize.define("Produits", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  })

  return Produits
}
