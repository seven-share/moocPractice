var timer = null;

window.onscroll = function() {
        show();
    }
    //鼠标滚轮事件
document.body.onmousewheel = function() {
    clearInterval(timer);
}

function changeBg() {
    var btn = document.getElementById("top");
    btn.onmouseover = function() {
        btn.style.backgroundPositionY = "-100px";
    }
    btn.onmouseout = function() {
        btn.style.backgroundPositionY = "0";
    }

    btn.onclick = function() {
        timer = setInterval(function() {
            t = document.documentElement.scrollTop | document.body.scrollTop;
            document.documentElement.scrollTop = document.body.scrollTop = t - Math.ceil(t / 4);
            if (t == 0) {
                clearInterval(timer);
            }
        }, 50)
    }
}
changeBg();

function show() {
    var backToTop = document.getElementById("backToTop");
    var t = document.documentElement.scrollTop | document.body.scrollTop;
    if (t < 500) {
        backToTop.style.display = "none"
    } else {
        backToTop.style.display = "block"
    }
}