export default {
    async getHomeData () {
        let res = await fetch('http://localhost:3000/sn')
        let data = await res.json()
        return data
    },
    async getSortData () {
        //取数据的时候根据路由取数据
        let res = await fetch('http://localhost:3000/sn/sort')
        let data = await res.json()
        return data
    },
    async getMustData () {
        //取数据的时候根据路由取数据
        let res = await fetch('http://localhost:3000/sn/must')
        let data = await res.json()
        return data
    },
    async getCartData () {
        //取数据的时候根据路由取数据
        let res = await fetch('http://localhost:3000/sn/cart')
        let data = await res.json()
        return data
    },
}