const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const categoryRoute = require("./routes/categories")
// const panier = require("./routes/panier")
// const produits = require("./routes/produits")

require("dotenv").config()
require("./models/index")

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

app.use("/categories", categoryRoute)
// app.use("/cart", panier)
// app.use("/produits", produits)

app.listen(process.env.port, () => {
  console.log(`Server running on ${process.env.port}`)
})
