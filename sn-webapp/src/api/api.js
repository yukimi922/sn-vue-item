const BASEURL= 'http://127.0.0.1:3000'
export default {
    async getHomeData () {
        let res = await fetch(`${BASEURL}/sn`)
        let data = await res.json()
        return data
    },
    async getSortData () {
        //取数据的时候根据路由取数据
        let res = await fetch(`${BASEURL}/sn/sort`)
        let data = await res.json()
        return data
    },
    async getMustData () {
        //取数据的时候根据路由取数据
        let res = await fetch(`${BASEURL}/sn/must`)
        let data = await res.json()
        return data
    },
    async getCartData () {
        //取数据的时候根据路由取数据
        let res = await fetch(`${BASEURL}/sn/cart`)
        let data = await res.json()
        return data
    },
    async getOrderData () {
        //取数据的时候根据路由取数据
        let res = await fetch(`${BASEURL}/sn/order`)
        let data = await res.json()
        return data
    },
    async getGoodsData () {
        //取数据的时候根据路由取数据
        let res = await fetch(`${BASEURL}/sn/goods`)
        let data = await res.json()
        return data
    }
}