// 规定画布宽高
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
// 圆球半径
var RADIUS = 8;
// 距离画布左上角的距离
var MARGINTOP = 60;
var MARGINLEFT = 30;
var endTime = new Date();
// 倒计时一小时
endTime.setTime(endTime.getTime() + 3600 * 1000);


var curShowTimeSeconds = 0;

var balls = [];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'purple', 'brown', 'gray', 'pink']

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;
curShowTimeSeconds = getCurrentShowTimeSeconds();

// 主执行程序
setInterval(function() {
    render(context);
    update();
}, 50)


function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret / 1000)
    return ret > 0 ? ret : 0;
}

function update() {
    // 首先是现在时间和之前时间相比较，进行时间的变化
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();
    var nextHours = parseInt(nextShowTimeSeconds / 3600);
    var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60);
    var nextSeconds = nextShowTimeSeconds % 60;

    var curHours = parseInt(curShowTimeSeconds / 3600);
    var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60);
    var curSeconds = curShowTimeSeconds % 60;

    // 如果有变化，则将变化的数字和位置传入balls数组
    if (nextSeconds != curSeconds) {
        if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
            addBalls(MARGINLEFT + 0, MARGINTOP, parseInt(curHours / 10));
        }
        if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
            addBalls(MARGINLEFT + 15 * (RADIUS + 1), MARGINTOP, parseInt(curHours % 10));
        }

        if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
            addBalls(MARGINLEFT + 39 * (RADIUS + 1), MARGINTOP, parseInt(curMinutes / 10));
        }
        if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
            addBalls(MARGINLEFT + 54 * (RADIUS + 1), MARGINTOP, parseInt(curMinutes % 10));
        }

        if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
            addBalls(MARGINLEFT + 78 * (RADIUS + 1), MARGINTOP, parseInt(curMinutes / 10));
        }
        if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
            addBalls(MARGINLEFT + 93 * (RADIUS + 1), MARGINTOP, parseInt(curSeconds % 10));
        }



        curShowTimeSeconds = nextShowTimeSeconds;
    }
    updateBalls();
}
// 移动小球的位置， 实现小球的散落和跳动

function updateBalls() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        // 小球的触底检测，将vy取反，向上运动
        if (balls[i].y > WINDOW_HEIGHT - RADIUS) {
            balls[i].y = WINDOW_HEIGHT - RADIUS;
            balls[i].vy = -balls[i].vy * 0.75
        }
    }

    var cot = 0;
    // 限制balls数组内的量
    for (var i = 0; i < balls.length; i++) {
        if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH) {
            balls[cot++] = balls[i]
        }
    }
    while (balls.length > Math.min(300, cot)) {
        balls.pop();
    }
}
// 将小球信息组织好，传入balls
function addBalls(x, y, num) {
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num].length; j++) {
            var aBall = {
                x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                g: 1.5 + Math.random(),
                vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                vy: -10,
                color: colors[Math.floor(Math.random() * colors.length)]
            }
            balls.push(aBall);
        }
    }
}
// 渲染函数，把组成数字的小圆球渲染出来
function render(ctx) {
    // 清除之前板子上的数字
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


    var hours = parseInt(curShowTimeSeconds / 3600);
    var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
    var seconds = curShowTimeSeconds % 60;
    // 渲染每一位数字
    renderDigit(MARGINLEFT, MARGINTOP, parseInt(hours / 10), ctx);
    renderDigit(MARGINLEFT + 15 * (RADIUS + 1), MARGINTOP, parseInt(hours % 10), ctx);
    renderDigit(MARGINLEFT + 30 * (RADIUS + 1), MARGINTOP, 10, ctx);
    renderDigit(MARGINLEFT + 39 * (RADIUS + 1), MARGINTOP, parseInt(minutes / 10), ctx);
    renderDigit(MARGINLEFT + 54 * (RADIUS + 1), MARGINTOP, parseInt(minutes % 10), ctx);
    renderDigit(MARGINLEFT + 69 * (RADIUS + 1), MARGINTOP, 10, ctx);
    renderDigit(MARGINLEFT + 78 * (RADIUS + 1), MARGINTOP, parseInt(seconds / 10), ctx);
    renderDigit(MARGINLEFT + 93 * (RADIUS + 1), MARGINTOP, parseInt(seconds % 10), ctx);


    // 把彩色掉落的小球渲染出来
    for (var i = 0; i < balls.length; i++) {
        ctx.fillStyle = balls[i].color;
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI);

        ctx.fill();
    }

}
// 渲染每一位的小球， 0 不填充颜色， 1 填充颜色

function renderDigit(x, y, num, ctx) {
    ctx.fillStyle = "rgb(0,102,153)";
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num].length; j++) {
            if (digit[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc(x + 2 * j * (RADIUS + 1) + RADIUS, y + 2 * i * (RADIUS) + RADIUS, RADIUS, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
}