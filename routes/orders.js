const express = require("express")
const app = express()
const { Order } = require("../models")

app.post("/", async (req, res) => {
  try {
    // const order = await Order.create(req.body)
    // res.json(order)
    console.log("dddd");
  } catch (e) {
    res.status(500).json("Internal server error")
  }
})

app.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (e) {
    res.status(500).json("Internal server error")
  }
})

module.exports = app