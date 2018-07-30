function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function moveElement(elementID, fianl_x, fianl_y, interval) {
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement)
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == fianl_x && ypos == fianl_y) {
        return true;
    };
    if (xpos < fianl_x) {
        var dist = Math.ceil((fianl_x - xpos) / 50);
        xpos = xpos + dist;
    };
    if (xpos > fianl_x) {
        var dist = Math.ceil((xpos - fianl_x) / 50);
        xpos = xpos - dist;
    }
    if (ypos < fianl_y) {
        var dist = Math.ceil((fianl_y - ypos) / 50);
        ypos = ypos + dist;
    };
    if (ypos > fianl_y) {
        var dist = Math.ceil((ypos - fianl_y) / 50);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + fianl_x + "," + fianl_y + "," + interval + ")"
    elem.movement = setTimeout(repeat, interval);
}

function prepareSlideshow() {
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("preview", 0, 0, 10);
    };
    links[1].onmouseover = function() {
        moveElement("preview", -533, 0, 10);
    };
    links[2].onmouseover = function() {
        moveElement("preview", -1066, 0, 10);
    };
    links[3].onmouseover = function() {
        moveElement("preview", -1599, 0, 10);
    };
}
addLoadEvent(prepareSlideshow);