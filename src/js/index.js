(function(win) {
    let cp = new CardPool(Cards);

    hamburgerEvent("hamburger-container");

    document.querySelector('.pump:nth-of-type(1)').addEventListener('click', function() {
        tenPump(1);
    });
    document.querySelector('.pump:nth-of-type(2)').addEventListener('click', function() {
        tenPump(10);
    });

    mapView(Cards);

    function mapView(cardArray) {
        if (!Array.isArray(cardArray)) {
            return;
        }
        let mapBox = document.querySelector('.map-box');
        mapBox = createMapItem(mapBox, cardArray.length);

        let nodeList = mapBox.querySelectorAll('.map-card');
        for (let i = 0, len = nodeList.length; i < len; i++) {
            nodeList[i].style.backgroundImage = "url('https://images-1257102766.cos.ap-guangzhou.myqcloud.com/%E6%B0%B4%E6%B5%92/" + cardArray[i].id + ".jpg')";
            let index = Cards.findIndex(item => item.id == cardArray[i].id);
            nodeList[i].setAttribute("level", Cards[index].level);
        }
        let item = document.getElementsByClassName('map-card-container');
        for (let z = 0; z < item.length; z++) {
            enlargeCardEvent(item[z], '.map-card');
        }
    }

    function tenPump(num) {
        let box = document.querySelector('.box');
        box.innerHTML = "";
        box = createItem(box, num);

        let nodeList = box.querySelectorAll('.back');
        for (let i = 0, len = nodeList.length; i < len; i++) {
            let cardId = cp.getRandomCardId();
            nodeList[i].style.backgroundImage = "url('https://images-1257102766.cos.ap-guangzhou.myqcloud.com/%E6%B0%B4%E6%B5%92/" + cardId + ".jpg')";
            let index = Cards.findIndex(item => item.id == cardId);
            nodeList[i].setAttribute("level", Cards[index].level);
        }
        let item = document.getElementsByClassName('card-container');
        for (let z = 0; z < item.length; z++) {
            item[z].addEventListener("click", function() {
                enlargeCardEvent(this, '.back');
                setLevelShadow(this, '.back');
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

    function createMapItem(node, num) {
        if (node.tagName.toLocaleLowerCase() != 'div') {
            return;
        }
        for (let i = 0; i < num; i++) {
            let container = createDom(node, 'map-card-container');
            createDom(container, 'map-card');
            node.appendChild(container);
        }
        return node;
    }

    function setLevelShadow(that, className) {
        let level = that.querySelector(className).getAttribute("level");
        switch (level) {
            case "1":
                that.querySelector(className).style.animation = "shadowWaveRed 2s ease-in-out infinite";
                break;
            case "2":
                that.querySelector(className).style.animation = "shadowWaveOrange 2s ease-in-out infinite";
                break;
            case "3":
                that.querySelector(className).style.animation = "shadowWaveBlue 10s ease-in-out infinite";
                break;
        }
    }

    function enlargeCardEvent(that, className) {
        let showView = document.querySelector('.show');
        let maskView = document.querySelector('.mask');
        that.querySelector(className).onclick = function(e) {
            showView.style.display = "block";
            showView.style.zIndex = "3";
            showView.style.backgroundImage = this.style.backgroundImage;
            showView.style.animation = this.style.animation;
            maskView.style.opacity = "0.5"
            maskView.style.display = "block";
            stop();
            stopBubble(e);
            document.onclick = function() {
                showView.style.display = "none";
                showView.style.zIndex = "0";
                maskView.style.opacity = "0.5"
                maskView.style.display = 'none';　　　　　　
                document.onclick = null;
                move();
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
    //

    //滚动限制
    function stop() {
        let mo = function(e) { passive: false; };
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", mo, false); //禁止页面滑动
    }
    //取消滚动限制
    function move() {
        let mo = function(e) { passive: false };
        document.body.style.overflow = ''; //出现滚动条
        document.removeEventListener("touchmove", mo, false);
    }

    function hamburgerEvent(className) {
        let hbg = document.querySelector('.' + className);
        let btn = hbg.querySelectorAll(".hamburger-item");
        for (let i = 0; i < btn.length; i++) {
            (i == 0) ? btn[i].style.backgroundColor = "rgb(140, 224, 123)": "";
            btn[i].onclick = function() {
                for (let j = 0; j < btn.length; j++) {
                    if (i == j) {
                        btn[j].style.backgroundColor = "rgb(140, 224, 123)";
                        document.querySelector('.' + btn[j].getAttribute("name")).style.display = "flex";
                    } else {
                        btn[j].style.backgroundColor = "rgb(19, 113, 100)";
                        document.querySelector('.' + btn[j].getAttribute("name")).style.display = "none";
                    }
                }
            }
        }
    }
})(window);