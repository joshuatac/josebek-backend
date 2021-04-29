const express = require("express");
const { requireLogin, adminMiddleware } = require("../common-middleware");
const { createProduct, getProductsbySlug, getProductDetailsById, getProducts, deleteProductById } = require("../controllers/product");

const multer = require('multer');
const router = express.Router();
const shortid = require('shortid')
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb){

        cb(null, path.join(path.dirname(__dirname), 'uploads' ))  },
        filename: function (req, file, cb){
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage });

router.post('/product/create', requireLogin, adminMiddleware, upload.array('productPicture') ,createProduct);
router.get('/products/:slug', getProductsbySlug);
router.get(`/product/:productId`, getProductDetailsById);
router.delete(
    "/product/deleteProductById",
    requireLogin, adminMiddleware,
    deleteProductById
  );
  router.post(
    "/product/getProducts",
    requireLogin, adminMiddleware,
    getProducts
  );

module.exports = router;

