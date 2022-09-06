const express = require("express")
const app = express()
require("dotenv").config()
const { Produits } = require("../models")

app.post("/", async (req, res) => {
  try {
    const produits = await Produits.create(req.body)
    res.json(produits)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.get("/", async (req, res) => {
  try {
    const produits = await Produits.findAll({
      attributes: ["id", "title", "image"],
    })

    res.json(produits)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const produits = await Produits.findOne({
      where: {
        id,
      },
    })

    if (produits) {
      res.json(produits)
    } else {
      res.status(404).json("produits not found")
    }
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Produits.destroy({
      where: { id },
    })

    res.status(204).json("Deleted")
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.put("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const produits = await Produits.update(req.body, {
      where: {
        id,
      },
    })

    res.json(produits)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

module.exports = app