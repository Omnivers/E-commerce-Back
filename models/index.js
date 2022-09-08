const { Sequelize } = require("sequelize")
const produits = require("./produits")
const { DB_NAME, DB_USERNAME, DB_HOSTNAME, DB_PASSWORD } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOSTNAME,
  dialect: "mysql",
  logging: false,
})

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log(`Connected to DB ${sequelize.config.database}`)
  } catch (e) {
    console.log(e)
  }
}

connectDb()

const Categories = require("./categories")(sequelize)
const Produits = require("./produits")(sequelize)
const Order = require("./order")(sequelize)

sequelize.sync({ alter: true })

Produits.belongsToMany(Order, {
  through: "products_orders",
})
Order.belongsToMany(Produits, {
  through: "products_orders",
})
Categories.belongsToMany(Produits, {
  through: "products_categories",
})
Produits.belongsToMany(Categories, {
  through: "products_categories",
})

module.exports = {
  sequelize,
  Categories,
  Order,
  Produits
}
