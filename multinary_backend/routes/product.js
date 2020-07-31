const express = require("express");
const router = express.Router();
var multer  = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
});

var upload = multer({ storage: storage })
const {
  getProductById,
  createProduct,
  getAllproduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllUniqueCategories,
  getProductByCategory,
  getProductByCategoryId,
  getAllProducts
} = require("../controller/product");


//all of params

router.param("productId", getProductById);
router.param("categoryId", getProductByCategoryId);

//all of actual routes
//create route
router.post(
  "/product/create",
  upload.single('productImage'),
  createProduct
);

router.get(
    "/product",
    getAllproduct
  );

// // read routes
router.get("/product/:productId", getProduct);
router.get("/product/category/:categoryId", getProductByCategory);


// //delete route
router.delete(
  "/product/:productId",
  deleteProduct
);

router.put(
  "/product/:productId",
  updateProduct
)



module.exports = router;
