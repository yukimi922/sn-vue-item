module.exports = {
    getOrderInfo(){
        let a = {
            order:[
                {
                    title:'待支付',
                    num:0
                },
                {
                    title:'待收货',
                    num:0
                },
                {
                    title:'评价有礼',
                    num:0
                },
                {
                    title:'退换/售后',
                    num:0
                },
                {
                    title:'常购清单',
                    num:0
                }
            ]
        }
        return a;
    }
}