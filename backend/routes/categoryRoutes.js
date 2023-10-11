const express = require("express");
const {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController,
} = require("../controller/categoryController");
const formidable = require("express-formidable");
const router = express.Router();

//create
router.post(
  "/create-category",
  formidable(),
  createCategoryController
);

//update
router.put(
  "/update-catergory/:id",
  updateCategoryController
);

//get all
router.get("/get-category", categoryController);

//get single category
router.get("/single-category/:slug", singleCategoryController);

//delete category

router.delete(
  "/delete-category/:id",
  deleteCategoryController
);

module.exports = router;