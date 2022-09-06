const { Sequelize } = require("sequelize")
const { DBNAME, DBUSER, HOSTNAME, PASSWORD } = process.env

const sequelize = new Sequelize(DBNAME, DBUSER, PASSWORD, {
  host: HOSTNAME,
  dialect: "mysql",
  logging: false,
})

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log(`Connected to DB ${DBNAME}`)
  } catch (e) {
    console.log(e)
  }
}

connectDb()

const Categories = require("./Categories")(sequelize)
const Produits = require("./Produits")(sequelize)

sequelize.sync({ alter: true })

const db = {
  sequelize,
  Categories,
  Produits,
}

module.exports = db
