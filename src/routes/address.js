const express = require("express");
const { requireLogin, userMiddleware } = require("../common-middleware");
const { addAddress, getAddress } = require("../controllers/address");
const router = express.Router();


router.post('/user/address/create', requireLogin, userMiddleware, addAddress);
router.get("/user/getaddress", requireLogin, userMiddleware, getAddress);


module.exports = router; 
 
