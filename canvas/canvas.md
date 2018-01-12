# CANVAS 绘图笔记
- 首先获取前端的canvas标签和准备绘图
    - var canvas = document.getElementById("canvas");
    - var context = canvas.getContext('2d');
    - canvas.width=num;
    - canvas.height=num;
- 之后的操作基本都是基于context的方法
- canvas绘图都是按照先设置状态，后进行绘制
- 移动
    - context.moveTo();
- 重新起点画图
    - cotext.beginPath();
- 封闭图形
    - context.closePath();
- 画直线（状态）
    - context.lineTo(x,y)
    - context.lineCap="butt|round|square";//线帽
    - context.lineJoin="bevel|round|miter"; // 斜角 | 圆角 | 尖角
- 画园（状态）
    - context.arc(x,y,r,起始角度，终止角度，true/false)
    - 起始和终止角度为弧度制，默认false为顺时针，true为逆时针
- 画切弧
    - context.arcTo(x1,y1,x2,y2,r);
        - x1为控制点，x2为结束辅助线上的点
- 二次贝塞尔曲线
    - context.quadraticCurveTo(cpx,cpy,x,y);
        - cpx为控制点
        - x，y为结束点
- 二次贝塞尔曲线
    - context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
        - 两个控制点，和一个结束点
- 画长方形（状态）
    - context.rect(x,y,width,height);
- 画轮廓（实际操作）
    - context.stroke()
        - context.strokeStyle=color[string]
        - context.width=num;
        - context.strokeRect(x,y,width,height);
- 填充（实际操作）
    - context.fill()
        - context.fillStyle=color|grandient|pattern;
        - context.fillRect();
    - 填充个渐变
        - 线性渐变
            - var grd=context.createLinearGradient(x0,y0,x1,y1);
            - grd.addColorStop(0,"black");
            - grd.addColorStop(1,"red");
            - context.fillStyle=grd;
        - 径向渐变
            - 使用方法同上，createRadialGradient(x0,y0,r0,x1,y1,r1);
        - 图片填充
            - context.createPattern(img,"repeat");
            - img获取方式
                - 直接document.getElementBy...()
                - 或var img=new Image();  
                img.src='路径';之后将img填入
- 图形变化（）
    - 缩放
        - context.scale(scalewidth,scaleheight);
        - scalewidth和scaleheight为百分数放大，例200%
    - 旋转
        - context.rotate(angle)
        - angle为弧度制
    - 位移
        - context.tanslate(x，y)
    - 保存状态和恢复状态
        - 由于图形变换会一直积累，所以每次图形变换之前将状态保存，之后再恢复原状，方便再次图形变换
        - context.save();
        - context.restore();
- 文字渲染
    - context.font="....";
    - context.textAlign="center|left|right";
    - context.textBaseLine="top|middle|bottom"
    - context.fillText("text",x,y,[maxWidth]);
    - context.strokeText("text",x,y,[maxWidth]);
    - 填充同上面一样，有很多style
- 阴影
    - context.shadowColor=color;
    - context.shadowOffsetX=num;
    - context.shadowOffsetY=num;//阴影偏移量，可为负数
    - context.shadowBlur=num;//模糊度
- 透明度
    - context.globalAlpha=0.0--1.0
- 覆盖和剪裁
    - context.globalCompositeOperation
    - 属性值查表
- context.clip();
    - 可以画任何图形，加上此方法后，下面的图像会被剪裁
    - 使用的时候，之前用context.save(),之后用context.restore,将剪裁路径每次恢复，否则路径将过多
- 非零环绕原则
    - 判断是否属于fill的填充区域的方法，这样填充后，内部加阴影效果比较好
- context.isPointInPath(x,y);
    - 判断该点是否在context绘制图形之内
    - 获取canvas内点击的坐标
        - var x=event.clientX-canvas.getBoundingClient().left;
        - var y=event.clientY-canvas.getBoundingClient().top;
- 扩展canvas方法
    -  CanvasRenderContext2D.prototype.方法名=function（）{}
    - 之后即可在context.下使用该方法

# CANVAS 图像处理部分
- var img = new Image();
- img.src = "img.jpg";
- context.drawImage(image,dx,dy)
    - 输入图像和所摆放的位置
- context.drawImage(image,dx,dy,dw,dh)
    - 图像摆放位置和图片大小
- context.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    - 图像截取位置，截取宽高
    - 图像摆放位置，图片大小
- 获取图像像素信息并处理
    - iamgeData=context.getImageData(x,y,w,h);
    - iamgeData的对象有width，height，data
        - pixelData=imageData.data
            - pixelData是像素所包含的信息，rgba四个值
            - 第i个像素：
                ```
                r:pixelDate[4*i=0]
                g:pixelDate[4*i=1]
                b:pixelDate[4*i=2]
                a:pixelDate[4*i=3]
                ```
            - 第x行，y列的像素
                i=x*width+y;  
                其他同上
    - dx,dy为放在画布的位置，dirty为处理后的图片的选区位置
        - 注意，在画布的放置位置是d和dirty的叠加
        - context.putImageData(
                imageData,
                dx,dy,
                dirtyX,dirtyY,
                dirtyW,dirtyH
            )
    - 图像处理时，使用for循环，历遍所有像素，进行rgba的改变，再将处理后的图片重新渲染回原图