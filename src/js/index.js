(function(win) {
    let cp = new CardPool(Cards);
    cp.init();
    let box = document.querySelector('.box');
    box = createItem(box, 10);

    let nodeList = box.querySelectorAll('.back');

    for (let i = 0, len = nodeList.length; i < len; i++) {
        let cardId = cp.getRandomCardId();
        nodeList[i].style.backgroundImage = "url('../card/" + cardId + ".jpg')";
        let index = Cards.findIndex(item => item.id == cardId);
        nodeList[i].setAttribute("level", Cards[index].level);
    }

    let item = document.getElementsByClassName('card-container');
    for (let z = 0; z < item.length; z++) {
        item[z].addEventListener("click", function() {
            setLevelShadow(this);
            this.querySelector('.cover').style.transform = 'rotatey(180deg)';
            this.querySelector('.back').style.transform = 'rotatey(0deg)';
        });
    }

    function createItem(node, num) {
        if (node.tagName.toLocaleLowerCase() != 'div') {
            return;
        }
        for (let i = 0; i < num; i++) {
            let container = createDom(node, 'card-container');
            createDom(container, 'back');
            createDom(container, 'cover');
            node.appendChild(container);
        }
        return node;
    }

    function createDom(parent, className) {
        let div = document.createElement('div');
        div.classList.add(className);
        parent.appendChild(div);
        return div;
    }

    function setLevelShadow(that) {
        let level = that.querySelector('.back').getAttribute("level");
        switch (level) {
            case "1":
                that.querySelector('.back').style.boxShadow = "0 0 20px 15px red";
                break;
            case "2":
                that.querySelector('.back').style.boxShadow = "0 0 20px 15px rgba(255, 129, 0, 0.99)";
                break;
            case "3":
                // that.querySelector('.back').style.boxShadow = "0 0 20px blue";
                break;
        }
    }
})(window);