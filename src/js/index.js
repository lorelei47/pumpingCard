(function(win) {
    let cp = new CardPool(Cards);

    document.querySelector('.pump:nth-of-type(1)').addEventListener('click', function() {
        tenPump(1);
    });
    document.querySelector('.pump:nth-of-type(2)').addEventListener('click', function() {
        tenPump(10);
    });

    function tenPump(num) {
        let box = document.querySelector('.box');
        box.innerHTML = "";
        box = createItem(box, num);

        let nodeList = box.querySelectorAll('.back');
        for (let i = 0, len = nodeList.length; i < len; i++) {
            let cardId = cp.getRandomCardId();
            nodeList[i].style.backgroundImage = "url('src/card/" + cardId + ".jpg')";
            let index = Cards.findIndex(item => item.id == cardId);
            nodeList[i].setAttribute("level", Cards[index].level);
        }
        let item = document.getElementsByClassName('card-container');
        for (let z = 0; z < item.length; z++) {
            item[z].addEventListener("click", function() {
                enlargeCardEvent(this);
                setLevelShadow(this);
                this.querySelector('.cover').style.transform = 'rotatey(180deg)';
                this.querySelector('.back').style.transform = 'rotatey(0deg)';
            });
        }
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
                that.querySelector('.back').style.animation = "shadowWaveRed 2s ease-in-out infinite";
                break;
            case "2":
                that.querySelector('.back').style.animation = "shadowWaveOrange 2s ease-in-out infinite";
                break;
            case "3":
                that.querySelector('.back').style.animation = "shadowWaveBlue 10s ease-in-out infinite";
                break;
        }
    }

    function enlargeCardEvent(that) {
        let showView = document.querySelector('.show');
        let maskView = document.querySelector('.mask');
        that.querySelector('.back').onclick = function(e) {
            showView.style.opacity = "1";
            showView.style.zIndex = "3";
            showView.style.backgroundImage = this.style.backgroundImage;
            showView.style.animation = this.style.animation;
            maskView.style.opacity = "0.5"
            maskView.style.display = "block";
            stopBubble(e);
            document.onclick = function() {
                showView.style.opacity = "0";
                showView.style.zIndex = "0";
                maskView.style.opacity = "0.5"
                maskView.style.display = 'none';　　　　　　
                document.onclick = null;　
            }
        };
        showView.onclick = function(event) {
            //只阻止了向上冒泡，而没有阻止向下捕获，所以点击con的内部对象时，仍然可以执行这个函数
            stopBubble(event);
        };
        //阻止冒泡函数
        function stopBubble(e) {
            if (e && e.stopPropagation) {
                e.stopPropagation(); //w3c
            } else {
                window.event.cancelBubble = true; //IE
            }
        }

    }

    //添加css规则
    function addCSSRule(sheet, selector, rules, index) {
        if ("insertRule" in sheet) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        } else if ("addRule" in sheet) {
            sheet.addRule(selector, rules, index);
        }
    }
    //删除CSS规则
    function delCSSRule(sheet) {
        sheet.deleteRule(0)
    }
})(window);