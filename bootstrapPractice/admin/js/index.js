var reSizeDiv=function(){
    $("#myCanvas").width('100%')
    $("#myCanvas").height('300')
}
reSizeDiv()

var myChart = echarts.init(document.getElementById('myCanvas'));
var option = {
    toolbox:{
        show:true,

    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['pc访问量','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'pc访问量',
            type:'line',
            color:'black',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};


myChart.setOption(option);

window.onresize = function() {  
    reSizeDiv();
    myChart.resize();  
}; 


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: '等你下课',
        artist: '周杰伦',
        url: './static/waitAfterClass.mp3',
        cover: './static/waitAfterClass.png'
    }],
    mini: true
});