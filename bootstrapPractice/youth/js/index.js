$('.nav').singlePageNav({
    offset:70
})

new WOW().init();

$(window).scroll(function(){
    var s=$(window).scrollTop();
    console.log(s)
    if(s>180){
        $('#memory img').addClass('animated swing')
    }
    if(s>500){
        $('#memory img').removeClass('animated swing')
    }
})
$('#back img').mouseover(function(event){
    $(event.target).addClass('animated tada');
})
$('#back img').mouseout(function(event){
    $(event.target).removeClass('animated tada');
})
$('#beforeDate img').mouseover(function(){
    $(event.target).addClass('animated bounce');
    show($('#beforeDate'))
})
$('#beforeDate img').mouseout(function(){
    $(event.target).removeClass('animated bounce');
})
function show(target){
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "red"
      }).html("❄");
    var height=target.offset().top;

    var documentWidth = $('.container').width();
    var documentHieght = $(document).height();

    var millisec = 100;

    var timeInterval = setInterval(function(){
        var startLeft = Math.random() * documentWidth;
        var endLeft = Math.random() * documentWidth;
        var flakeSize = 5 + 20 * Math.random();
        var durationTime = 4000 + 7000 * Math.random();
        var startOpacity = 0.7 + 0.3 * Math.random();
        var endOpacity = 0.2 + 0.2 * Math.random();
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": height+'px',
          }).animate({ //执行动画
            "left": endLeft,
            "opacity": endOpacity,
            "top": height+300+'px'
          }, durationTime, function() {
            //4、当雪花落下后，删除雪花。
            $(this).remove(); 
          });
          target.mouseout(function(){
              clearInterval(timeInterval)
          })
    },millisec)
}
$('#faraway img').mouseover(function(event){
    $(event.target).addClass('animated rubberBand');
})
$('#faraway img').mouseout(function(event){
    $(event.target).removeClass('animated rubberBand');
})
$('#recent img').mouseover(function(event){
    $(event.target).addClass('animated pulse');
})
$('#recent img').mouseout(function(event){
    $(event.target).removeClass('animated pulse');
})