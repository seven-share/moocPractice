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

function preparePlaceholder() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/1.jpg");
    placeholder.setAttribute("alt", "my galaery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("1.jpg");
    description.appendChild(desctext);
    // var div = document.getElementsByTagName("div");
    // div[0].appendChild(placeholder);
    // div[0].appendChild(description);
    var gallary = document.getElementById("imageGallery");
    // gallary.parentNode.insertBefore(placeholder, gallary);
    // gallary.parentNode.insertBefore(description, gallary);
    insertAfter(placeholder, gallary);
    insertAfter(description, gallary);
}

function prepareGallery() {
    var gallary = document.getElementById("imageGallery");
    var links = gallary.getElementsByTagName("a");
    for (var i = 0; i <= links.length; i++) {
        links[i].onclick = function() {
            showPic(this);
            return false;
        };
    }
}

function showPic(whitchPic) {
    var source = whitchPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.src = source;
    var description = document.getElementById("description");
    description.firstChild.nodeValue = source;
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSlibling);
    }
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);