/** 卡池 
 * init()：初始化卡池
 * getRandomCardId()：随机返回一张卡(id)
 * getCardPools(num)：生成一组卡池,num为卡池总数量
 **/
const CardPool = (function() {
    const CardPoolFunc = function(config) {
        this.CardBuffer = [];
        this.init = function() {
            this.CardBuffer = _pushToBuffer(config);
        }
        this.getRandomCardId = function() {
            if (this.CardBuffer.length == 0) {
                return null;
            }
            return _getRandomCard(this.CardBuffer);
        }
        this.getCardPools = function(num) {
            //TODO
        }
    }
    const _pushToBuffer = function(cardArray) {
        if (!Array.isArray(cardArray)) {
            return;
        }
        let cardbuffer = [];
        cardArray.forEach(function(item, index) {
            for (let i = 0; i < parseInt(item.weight); i++) {
                cardbuffer.push(item.id);
            }
        });
        return cardbuffer;
    }
    const _getRandomCard = function(cardbuffer) {
        let len = cardbuffer.length;
        let random = parseInt(Math.random() * len);
        return cardbuffer[random];
    }
    return CardPoolFunc;
})(window);