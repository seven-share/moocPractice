var canvas = document.getElementById("canvas");
// 个人觉得这个规定canvas宽高的方法较为优雅
canvas.width = 800;
canvas.height = 800;
if (canvas.getContext('2d')) {
    var context = canvas.getContext('2d');
} else {
    alert("此浏览器不支持canvas，请更换浏览器")
}
setInterval(function() {
    render(context);
    update();
}, 40)
var x = 400;
var y = 400;
var vx = 5;
var vy = 10;
var vr = 2;
var radius = 150;

function render(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 画黑色幕布
    // ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    // 画白色探照灯
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.clip();
    // 画文字
    ctx.font = 'bold 80px Arial';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#058";
    ctx.fillText("探照时间，你好", canvas.width / 2, canvas.height / 2);
    ctx.restore();
}

function update() {
    if (x + radius > canvas.width) {
        x = canvas.width - radius;
        vx = -vx;
    };
    if (x - radius < 0) {
        x = radius;
        vx = -vx;
    };
    if (y + radius > canvas.height) {
        y = canvas.height - radius;
        vy = -vy;
    };
    if (y - radius < 0) {
        y = radius;
        vy = -vy;
    };
    x += vx;
    y += vy;
    if (radius > 200) {
        vr = -vr;
    }
    if (radius < 100) {
        vr = -vr;
    };
    radius += vr;
}