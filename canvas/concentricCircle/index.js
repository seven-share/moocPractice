var canvas = document.getElementById("canvas");
// 个人觉得这个规定canvas宽高的方法较为优雅
canvas.width = 1024;
canvas.height = 768;
if (canvas.getContext('2d')) {
    var context = canvas.getContext('2d');
} else {
    alert("此浏览器不支持canvas，请更换浏览器")
}

function drawCircle(r) {
    context.beginPath();
    context.lineWidth = 5;
    context.arc(300, 300, r, 0, 2 * Math.PI, false);
    context.stroke();

}
for (var i = 0; i < 20; i++) {
    (function(j) {
        var repeat = "drawCircle(" + 10 * j + ")";
        setTimeout(repeat, j * 500);
    })(i)
}

// }
// context.lineWidth = 5;
// context.strokeStyle = 'black';

// context.arc(300, 300, 50, 0.5 * Math.PI, 0);
// context.stroke()