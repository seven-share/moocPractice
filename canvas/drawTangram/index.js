var tangram = [
    { p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }], color: "#caff67" },
    { p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }], color: "#67becf" },
    { p: [{ x: 800, y: 0 }, { x: 800, y: 400 }, { x: 600, y: 600 }, { x: 600, y: 200 }], color: "#ef3d6l" },
    { p: [{ x: 600, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }], color: "#f9f5la" },
    { p: [{ x: 400, y: 400 }, { x: 600, y: 600 }, { x: 400, y: 800 }, { x: 200, y: 600 }], color: "#a594c0" },
    { p: [{ x: 200, y: 600 }, { x: 400, y: 800 }, { x: 0, y: 800 }], color: "#fa8ecc" },
    { p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }], color: "#f6ca29" },
]
var canvas = document.getElementById("canvas");
// 个人觉得这个规定canvas宽高的方法较为优雅
canvas.width = 800;
canvas.height = 800;
if (canvas.getContext('2d')) {
    var context = canvas.getContext('2d');
} else {
    alert("此浏览器不支持canvas，请更换浏览器")
}

for (i = 0; i < tangram.length; i++) {
    draw(tangram[i], context);
}

function draw(piece, cxt) {
    cxt.beginPath();
    cxt.moveTo(piece.p[0].x, piece.p[0].y);
    for (var i = 1; i < piece.p.length; i++) {
        cxt.lineTo(piece.p[i].x, piece.p[i].y);
    }
    cxt.closePath();
    cxt.fillStyle = piece.color;
    cxt.fill()

    cxt.strokeStyle = "black";
    cxt.lineWidth = 2;
    cxt.stroke();



}