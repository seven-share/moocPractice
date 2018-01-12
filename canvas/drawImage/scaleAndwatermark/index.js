var canvas = document.getElementById("canvas");
// 个人觉得这个规定canvas宽高的方法较为优雅
canvas.width = 1152;
canvas.height = 768;
if (canvas.getContext('2d')) {
    var context = canvas.getContext('2d');
} else {
    alert("此浏览器不支持canvas，请更换浏览器")
}
var watermarkCanvas = document.getElementById("watermarkCanvas");
var watermarkContext = watermarkCanvas.getContext('2d');



var img = new Image();
var slider = document.getElementById("scale-range")
var scale = slider.value;
img.src = "img-lg.jpg";
img.onload = function() {
    //设置水印
    watermarkCanvas.width = 600;
    watermarkCanvas.height = 100;
    watermarkContext.font = "bold 50px Arial"
    watermarkContext.lineWidth = "1"
    watermarkContext.fillStyle = "rgba(255,255,255,0.5)"
    watermarkContext.textBaseline = "middle";
    watermarkContext.fillText("===fdsafdsa==", 20, 50)


    drawImageByScale(scale);
    slider.onmousemove = function() {
        scale = slider.value;
        drawImageByScale(scale);
    }




}

function drawImageByScale(scale) {
    var imageWidth = 1152 * scale;
    var imageHeight = 768 * scale;

    dx = (canvas.width - imageWidth) / 2;
    dy = (canvas.height - imageHeight) / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, dx, dy, imageWidth, imageHeight);
    context.drawImage(watermarkCanvas, canvas.width - watermarkCanvas.width, canvas.height - watermarkCanvas.height)


}