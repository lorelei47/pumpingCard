/**
 * 数据初始化
 */
const CollectData = (function() {
    const CollectDataFunc = function() {
        this.cardGet = new Array();
        this.allMoney = new Number();
        this.init = function() {
            this.cardGet = new Array();
            this.allMoney = 1000;
            this.changeDom.apply(this, arguments);
            this.pumpCard.apply(this, [this.cardGet]);
        }
        this.pumpCard = function(cardArraybuf) {
            if (!Array.isArray(cardArraybuf)) {
                return;
            }
            let that = this;
            cardArraybuf.forEach(function(item) {
                if (that.cardGet.indexOf(item) == -1) {
                    that.cardGet.push(item);
                }
            });
            document.querySelector('.card-get').innerHTML = this.cardGet.length;
        }
        this.moneyState = function(num) {
            if (!isNaN(num)) {
                this.allMoney = this.allMoney - ((num == 10) ? 10 * 9 : 10);
            }
        }
        this.isEnoughMoney = function(num) {
            return (this.allMoney >= 10 * 9) || (num == 1) && (this.allMoney >= 10);
        }
        this.changeDom = function(num) {
            this.moneyState.apply(this, [num]);
            let nodeList = document.querySelectorAll('.money');
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].innerHTML = this.allMoney;
            }
            this.changeMap.apply(this, arguments);

        }
        this.changeMap = function() {
            let mapCard = document.querySelectorAll('.map-card');
            for (let i = 0; i < mapCard.length; i++) {
                let urlId = mapCard[i].style.backgroundImage.match(/%E6%B0%B4%E6%B5%92%2F(\S*).jpg/)[1];
                if (this.cardGet.indexOf(parseInt(urlId)) !== -1) {
                    mapCard[i].style.filter = "grayscale(0%)"
                } else {
                    mapCard[i].style.filter = "grayscale(100%)"
                }
            }
        }
        this.init.apply(this, arguments);
    }
    return CollectDataFunc;
})(window);