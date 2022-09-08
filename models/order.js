const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  const Order = sequelize.define("Order", {
    total: {
      type: DataTypes.INTEGER,
    }
  })

  return Order
}
