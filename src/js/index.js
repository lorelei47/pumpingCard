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

    let span = document.getElementsByClassName('card-container');
    for (let z = 0; z < span.length; z++) {
        span[z].addEventListener("click", function() {
            let tr = this.querySelector('.cover').style.transform;
            if (this.querySelector('.back').getAttribute("level")) {
                this.querySelector('.back').style.boxShadow = "0 0 20px 10px orange";
            }
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
})(window);