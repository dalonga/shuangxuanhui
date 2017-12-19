
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },navigation:{
        nextEl:".swiper-button-next"
    },
});
//音乐部分
var music=document.getElementById("music");
var music_bg=music.getElementsByClassName("music_bg")[0];
var music_pic = music.getElementsByClassName("music_pic")[0];
var aud=music.getElementsByClassName("aud")[0];
//定义音乐的状态变量
var music_li=1;
music.onclick=function(){
    if(music_li==1) {
        //让背景gif隐藏
        music_bg.style.display = "none";
//        停止音乐图标的旋转
        music_pic.style.animation = "none";
        //停掉音乐
        aud.pause();
        music_li = 2;
    }else if(music_li==2){
        music_bg.style.display="block";

        music_pic.style.animation="run  linear infinite 1s";
        aud.play();
        music_li=1;
    }
}
//音乐部分

//地图部分
 //创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(116.403874,39.914889),12);
    }
    function setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
    var map;
      initMap()
    
    //标注点数组
//地图部分
