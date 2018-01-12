var canvas = document.getElementById("canvas");
// 个人觉得这个规定canvas宽高的方法较为优雅
canvas.width = 1152;
canvas.height = 768;
if (canvas.getContext('2d')) {
    var context = canvas.getContext('2d');
} else {
    alert("此浏览器不支持canvas，请更换浏览器")
}
var img = new Image();
img.src = "img-lg.jpg";


var isMouseDown = false;
var scale;

var offCanvas = document.getElementById("offCanvas");
var offContext = offCanvas.getContext("2d");




img.onload = function() {
    offCanvas.width = img.width;
    offCanvas.height = img.height;
    scale = offCanvas.width / canvas.width;

    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    offContext.drawImage(img, 0, 0);

}

function windowToCanvas(x, y) {
    var bbox = canvas.getBoundingClientRect();
    return { x: x - bbox.left, y: y - bbox.top }
}
canvas.onmousedown = function(e) {
    e.preventDefault();
    var point = windowToCanvas(e.clientX, e.clientY);
    console.log(point)
    isMouseDown = true;
    drawCanvasWithmagnifier(true, point);

}

canvas.onmousemove = function(e) {
    if (isMouseDown == true) {
        var point = windowToCanvas(e.clientX, e.clientY);
        drawCanvasWithmagnifier(true, point)
    }
}
canvas.onmouseup = function(e) {
    isMouseDown = false;
    drawCanvasWithmagnifier(false)
}
canvas.onmouseout = function(e) {
    isMouseDown = false;
    drawCanvasWithmagnifier(false)
}


function drawCanvasWithmagnifier(isShowMagifier, point) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
    if (isShowMagifier) {
        drawMagnifier(point);
    }
}

function drawMagnifier(point) {
    var imageLG_cx = point.x * scale;
    var imageLG_cy = point.y * scale;
    var mr = 200;
    var sx = imageLG_cx - mr
    var sy = imageLG_cy - mr;

    var dx = point.x - mr;
    var dy = point.y - mr;



    context.save();
    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = '#069';
    context.arc(point.x, point.y, mr, 0, 2 * Math.PI)

    context.stroke();
    context.clip();

    context.drawImage(offCanvas, sx, sy, 2 * mr, 2 * mr, dx, dy, 2 * mr, 2 * mr);
    context.restore()
}