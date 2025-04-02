const express = require("express");
const router = express.Router();
const data = require("../data");
router.get("/", (req, res) => {
  res.json({ users: data.products });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const new_id = data.products.findIndex((item) => item.id === parseInt(id));
  if (new_id === -1) {
    res.status(404).json({ message: `Product with ID: ${id} not found` });
  } else {
    res.json({ product: data.products[new_id] });
  }
});
router.post("/", (req, res) => {
  const obj = req.body;
  const id = obj.id;
  const result = data.products.findIndex((item) => item === Number(id));

  if (result !== -1) {
    res.status(400).json({ message: "ID Duplicate! , ( ID ALREADY FOUND ) " });
  } else if (
    req.body.name !== "" &&
    req.body.price !== "" &&
    req.body.price > 0 &&
    req.body.stock >= 0
  ) {
    data.products = [...data.products, obj];
    res.json({ message: "Success" });
  } else
    res.json({ message: "Couldnt add the obj ( name or price missing )." });
});
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const updated_info = req.body;
  const num = data.products.findIndex((item) => item.id === Number(id));
  if (num === -1) {
    res.status(404).json({ message: "Error 404" });
  } else if (req.body.price > 0 && req.body.stock >= 0) {
    data.products[num] = updated_info;
    res.json({ message: "Successfully , updated" });
  } else {
    res.json({
      message:
        "Stock or price is invalid, Must be positive number or above zero",
    });
  }
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(data.products);

  const num = data.products.findIndex((item) => item.id === Number(id));
  if (num === -1) {
    res.status(404).json({ message: "ID not found" });
  } else {
    data.products.splice(num, 1);
    res.status(200).json({ message: "Product deleted" });
  }
  console.log(data.products);
});

module.exports = router;
