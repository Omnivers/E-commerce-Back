const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  const Categories = sequelize.define("Categories", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  })

  return Categories
}
