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

function slide() {
    var ul = document.getElementById("ul");
    var liList = ul.getElementsByTagName("li");
    var allPic = document.getElementById("allPic");

    allPic.style.position = "absolute";
    allPic.style.left = "0px";
    allPic.style.top = "0px";

    liList[0].onmouseover = function() {
        moveElement("allPic", 0, 0, 10)
    }
    liList[1].onmouseover = function() {
        moveElement("allPic", -1080, 0, 10)
    }
    liList[2].onmouseover = function() {
        moveElement("allPic", -2160, 0, 10)
    }
    liList[3].onmouseover = function() {
        moveElement("allPic", -3240, 0, 10)
    }
    liList[4].onmouseover = function() {
        moveElement("allPic", -4320, 0, 10)
    }
}

window.onscroll = function() {
    var t = document.body.scrollTop || document.documentElement.scrollTop;
    var navTop = document.getElementById("navTop");
    if (t > 400) {
        navTop.className = "fix";
    } else {
        navTop.className = "";
    }
}
addLoadEvent(slide);

function highLight() {
    var navTop = document.getElementById("navTop");
    var li = navTop.getElementsByTagName("li");
    var links = navTop.getElementsByTagName("a");
    var allPic = document.getElementById("allPic");
    for (var i = 0; i < links.length; i++) {
        li[i].className = "";
        var url = links[i].getAttribute("href");
        if (window.location.href.indexOf(url) != -1) {
            li[i].className = "here";
            var left = "-" + i * 1080 + "px";
            allPic.style.left = left;
        }
    }
}
addLoadEvent(highLight);
// index.html


// function show() {
//     var name = document.getElementById("name")
//     var a = name.getElementsByTagName("a");

//     for (var i = 0; i < a.length; i++) {
//         var sectionID = a[i].getAttribute("href").split("#")[1];
//         a[i].sectionID = sectionID;
//         a[i].onclick = function() {
//             // alert(this.sectionID);
//             showSection(this.sectionID);
//             return false;
//         }



//     }
// }

// function showSection(sectionID) {
//     var section = document.getElementsByTagName("section");
//     for (var i = 0; i < section.length; i++) {
//         section[i].className = "vanish"
//         if (section[i].getAttribute("id") == sectionID) {
//             section[i].className = "";
//         }
//     }
// }
// addLoadEvent(show);
// // about.html

// function changePic() {
//     var imageGallery = document.getElementById("imageGallery");
//     var imgs = imageGallery.getElementsByTagName("img");
//     var post = document.getElementById("post");
//     alert(1)
//     for (var i = 0; i < imgs.length; i++) {
//         imgs[i].onclick = function() {
//             var src = imgs.getAttribute("src");
//             alert(src);
//             post.style.src = src;
//         }
//     }
// }
// addLoadEvent(changePic);