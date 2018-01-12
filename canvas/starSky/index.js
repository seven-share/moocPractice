var canvas = document.getElementById("canvas");
// 个人觉得这个规定canvas宽高的方法较为优雅
canvas.width = 1200;
canvas.height = 800;
if (canvas.getContext('2d')) {
    var context = canvas.getContext('2d');
} else {
    alert("此浏览器不支持canvas，请更换浏览器")
}
var skyStyle = context.createLinearGradient(0, 0, 0, 1200);
skyStyle.addColorStop(0, 'black');
skyStyle.addColorStop(1, '#035');
context.fillStyle = skyStyle;

context.fillRect(0, 0, canvas.width, canvas.height);

for (var i = 0; i < 100; i++) {
    var r = Math.random() * 10 + 10;
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height * 0.4;
    var rot = Math.random() * 360;
    drawStar(context, x, y, r, r / 2, rot);
}



function drawStar(ctx, x, y, outerR, innerR, rot) {
    ctx.beginPath();
    for (var i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos((18 + i * 72 - rot) / 180 * Math.PI) * outerR + x,
            Math.sin((18 + i * 72 - rot) / 180 * Math.PI) * outerR + y
        );
        ctx.lineTo(Math.cos((54 + i * 72 - rot) / 180 * Math.PI) * innerR + x,
            Math.sin((54 + i * 72 - rot) / 180 * Math.PI) * innerR + y
        );
    }
    ctx.fillStyle = '#fb3';
    ctx.strokeStyle = '#fd5';
    ctx.lineWidth = 3;
    ctx.lineJoin = "round"

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}