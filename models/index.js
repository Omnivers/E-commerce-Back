const { Sequelize } = require("sequelize")
const { DBNAME, DBUSER, HOSTNAME, PASSWORD } = process.env
console.log(DBUSER);


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
  
  
  sequelize.sync({ alter: true })
  
  const db = {
    sequelize
  }
  
  module.exports = db