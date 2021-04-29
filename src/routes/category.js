const express = require("express");
const { requireLogin, adminMiddleware } = require("../common-middleware");
const { addCategory, getCategories, updateCategories, deleteCategories } = require("../controllers/category");
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid')
const path = require('path');




const storage = multer.diskStorage({
    destination: function(req, file, cb){

        cb(null, path.join(path.dirname(__dirname), 'uploads' ))  },
        filename: function (req, file, cb){
        cb(null, shortid.generate() + '-' + file.originalname)
    }
});


const upload = multer({ storage });



router.post('/category/create', requireLogin, adminMiddleware, upload.single('categoryImage'), addCategory);
router.get('/category/getcategory', getCategories);
router.post('/category/update', upload.single('categoryImage'), updateCategories);
router.post('/category/delete', deleteCategories);


module.exports = router;

