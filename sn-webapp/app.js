const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello express')
})
// eslint-disable-next-line no-unused-vars
app.get('/cart/info', function (req, res) {
    //引入存放数据的模块
    // eslint-disable-next-line no-unused-vars
    const data = require('./data');
    res.send(data)
})
// eslint-disable-next-line no-console
app.listen(3001,()=>{console.log('listing in 3001')})