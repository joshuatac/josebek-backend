const express = require('express');
const { requireLogin, userMiddleware } = require('../common-middleware');
const { addOrder, getOrders, getOrder } = require('../controllers/order');
const router = express.Router();

router.post('/addOrder', requireLogin, userMiddleware, addOrder);
router.get('/getOrders', requireLogin, userMiddleware, getOrders);
router.post("/getOrder", requireLogin, userMiddleware, getOrder);




module.exports = router;
