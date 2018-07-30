function changePic() {
    var imageGallery = document.getElementById("imageGallery");
    var imgs = imageGallery.getElementsByTagName("img");
    var post = document.getElementById("post");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function() {
            var s = this.getAttribute("src");
            console.log(post.src)
            post.src = s;
        }
    }
}
addLoadEvent(changePic);