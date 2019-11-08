module.exports = {
    getCartInfo(){
        let a = {
            checkedAll:true,
            shops:[
                {
                    name: '百草味官方旗舰店',
                    sid: 0,
                    products: [
                        {
                            pid:0,
                            title: '百草味 蜜饯 抱抱果118g 新疆特产红枣灰枣夹核桃仁 大枣子零食满减',
                            total: 1,
                            price: 24,
                            pr2: 90,
                            sale: '全民嘉年华',
                            img: './images/9-HP4oyRNmkO-Bn6-F1F6A.jpg',
                            checked:true
                        }
                    ]
                },
                {
                    name:'三只松鼠旗舰店',
                    sid:1,
                    products:[
                        {
                            pid:0,
                            title:'【三只松鼠_开心果100g】休闲零食每日坚果特产炒货干果孕妇无漂白',
                            total: 1,
                            price:39,
                            pr2: 90,
                            sale:'大惠聚',
                            img:'./images/QosokJAEs-Y95r0uJ__V4A.png',
                            checked: true
                        },
                        {
                            pid:1,
                            title:'【三只松鼠_夏威夷果160g】休闲零食每日坚果特产炒货干果奶油味送开口器',
                            total: 1,
                            price:39,
                            pr2: 90,
                            sale:'大惠聚',
                            img:'./images/qZomyyQ5kxaLDGh0c84o-w.png',
                            checked: true
                        }
                    ]
                }

            ]

        }
        return a;
    }
}