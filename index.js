const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const port = process.env.port
const categories = require("./routes/categories")
const panier = require("./routes/panier")
const produits = require("./routes/produits")

require('dotenv').config()
require("./models/index")

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))


// app.use("/categories", categories)
// app.use("/cart", panier)
// app.use("/produits", produits)


app.listen(port, () => {
  console.log(`Server running on ${process.env.port}`)
})