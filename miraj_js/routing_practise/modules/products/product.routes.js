const express = require("express");
const router = express.Router();

// Get all products
router.get("/", (req, res) => {
    const products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 }
    ]
    res.json(products);
});

// Get product by ID
router.get("/:name", (req, res) => {
    const name = req.params.name;
    res.json({ name: name, price: 100 });
});

module.exports = router;
