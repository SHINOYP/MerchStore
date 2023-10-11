const express = require("express");
const {
    createProductController,
    // getProductController,
    // getSingleProductController,
    // productPhotoController,
    // deleteProductController,
    // updateProductController,
    // productFilterController,
    // productCountController,
    // productListController,
    // searchProductController,
    // relatedProductController,
    // braintreeTokenController,
    // braintreePaymentController,
  } = require("../controller/productController");
  const formidable = require("express-formidable");
  const {upload} =require("../helpers/fileHelper")
  const router = express.Router();

  //create product
  router.post(
    "/create-product",
    (req, res, next) => {
      upload('poster').single("img")(req, res, function (err) {
        if (err) {
          return res.status(400).json({ error: "File upload failed." });
        }
        next();
      });
    },
    formidable(),
    createProductController
  );
  
  

  module.exports = router;