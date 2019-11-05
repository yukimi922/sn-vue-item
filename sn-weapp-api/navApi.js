import BASEURL from './bascURL'
// const NAVURL = `${BASEURL}/pic-src.json`
const NAVURL = `http://106.12.218.147/pic-src.json`
export default {
    async getNavInfo(){
        let res = await fetch('http://106.12.218.147/pic-src.json')
        let data = await res.json()
        return data
    }
}