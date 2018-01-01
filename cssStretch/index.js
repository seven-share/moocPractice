function changeShow() {
    var list = document.getElementById("list");
    var li = list.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        li[i].onmouseover = function() {
            clearShow(li);
            this.className = "item active";

        }

    }
}

function clearShow(item) {
    for (var i = 0; i < item.length; i++) {
        item[i].className = "item";
    }

}
changeShow();