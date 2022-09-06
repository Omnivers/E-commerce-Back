const { Sequelize } = require("sequelize")
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

sequelize.sync({ alter: true })

module.exports = {
  sequelize,
  Categories,
}
