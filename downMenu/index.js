function showAddressList() {
    var down = document.getElementById("down");
    var addressList = document.getElementById("addressList");
    down.onclick = function() {
        if (addressList.style.display == "block") {
            down.style.backgroundPositionY = "0";
            addressList.style.display = "none";
        } else {
            down.style.backgroundPositionY = "-25px";
            addressList.style.display = "block";
        }
        // if (addressList.style.display == "block") {
        //     down.style.backgroundPositionY = "0px";
        //     addressList.style.display = "none";
        // };

    }
}
showAddressList();

function selectAddress() {
    var selectAddress = document.getElementsByClassName("selectAddress")[0];
    var addressList = document.getElementById("addressList");
    var items = addressList.getElementsByTagName("li");
    var down = document.getElementById("down");
    for (var i = 0; i < items.length; i++) {
        var spans = items[i].getElementsByTagName("span");
        for (var j = 0; j < spans.length; j++) {
            spans[j].onclick = function() {
                selectAddress.innerHTML = this.innerHTML;
                selectAddress.style.color = "black";
                addressList.style.display = "none";
                down.style.backgroundPositionY = "0px"
            }
        }
    }
}
selectAddress();

function maskClose() {
    var mask = document.getElementById("mask");
    var addressBoard = document.getElementsByClassName("addressBoard")[0];
    mask.onclick = function() {
        addressBoard.style.display = "none"
        mask.style.display = "none";
    }
}
maskClose();

function addressBoardShow() {
    var btn = document.getElementsByClassName("btn")[0];
    var addressBoard = document.getElementsByClassName("addressBoard")[0];
    btn.onclick = function() {
        addressBoard.style.display = "block";
        var mask = document.getElementById("mask");
        mask.style.display = "block";
    }
}
addressBoardShow();

function close() {
    var close = document.getElementsByClassName("close")[0];
    var addressBoard = document.getElementsByClassName("addressBoard")[0];
    var mask = document.getElementById("mask");
    close.onclick = function() {
        addressBoard.style.display = "none";
        mask.style.display = "none";
    }
}
close();

function confirm() {
    var confirm = document.getElementsByClassName("confirm")[0];
    var addressBoard = document.getElementsByClassName("addressBoard")[0];
    var mask = document.getElementById("mask");
    confirm.onclick = function() {
        addressBoard.style.display = "none";
        mask.style.display = "none";
    }
}
confirm();