// about.html
function show() {
    var name = document.getElementById("name")
    var a = name.getElementsByTagName("a");

    for (var i = 0; i < a.length; i++) {
        var sectionID = a[i].getAttribute("href").split("#")[1];
        a[i].sectionID = sectionID;
        a[i].onclick = function() {
            // alert(this.sectionID);
            showSection(this.sectionID);
            return false;
        }



    }
}

function showSection(sectionID) {
    var section = document.getElementsByTagName("section");
    for (var i = 0; i < section.length; i++) {
        section[i].className = "vanish"
        if (section[i].getAttribute("id") == sectionID) {
            section[i].className = "";
        }
    }
}
addLoadEvent(show);