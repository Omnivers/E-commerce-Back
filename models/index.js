const { Sequelize } = require("sequelize")
require("dotenv").config()
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

const Categories = require("./categories")(sequelize)

// const Produits = require("./produits")(sequelize)

sequelize.sync({ alter: true })

const db = {
  sequelize,
  Categories,
};

module.exports = db;
