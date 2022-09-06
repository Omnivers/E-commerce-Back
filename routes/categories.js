const express = require("express")
const app = express()
const Categories = require("../models")

app.post("/", async (req, res) => {
  try {
    const categories = await Categories.create(req.body)
    res.json(categories)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.get("/", async (req, res) => {
  try {
    const category = await Categories.findAll({
      attributes: ["id", "title", "image"],
    })

    res.json(category)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const category = await Categories.findOne({
      where: {
        id,
      },
    })

    if (category) {
      res.json(category)
    } else {
      res.status(404).json("Category not found")
    }
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Categories.destroy({
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
    const category = await Categories.update(req.body, {
      where: {
        id,
      },
    })

    res.json(category)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

module.exports = app
