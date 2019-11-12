const express = require("express");
const router = express.Router();
//引入存放数据的JS文件
const dataModel = require("../module/data");
const snSort = require("../module/sortData")
const snMust = require("../module/mustBuy")
const snCart = require("../module/cartInfo")
const snOrder = require('../module/orderList')
const snGoods = require('../module/snGoodsList')

//允许跨域设置

router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Headers","Content-Type");
    if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
    else next();
});
//   /sn目录下默认的文件
router.get("/",(req,res)=>{
    res.json(dataModel.getdata())
    //{orders:orderarr}  绑定到order.ejs模板上
})

//访问 /sort数据
router.get("/sort",(req,res)=>{
    res.json(snSort.getSort())
})

router.get("/must",(req,res)=>{
    res.json(snMust.getMust())
})

router.get("/cart",(req,res)=>{
    res.json(snCart.getCartInfo())
})

router.get("/order",(req,res)=>{
    res.json(snOrder.getOrderInfo())
})
router.get("/goods",(req,res)=>{
    res.json(snGoods.getGoodsItem())
})

module.exports = router;