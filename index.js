const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const categoryRoute = require("./routes/categories")
const orders = require("./routes/orders")
const produits = require("./routes/produits")

require("./models")

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

app.use("/categories", categoryRoute)
app.use("/products", produits)
app.use("/orders", orders)

app.listen(process.env.port, () => {
  console.log(`Server running on ${process.env.port}`)
})
