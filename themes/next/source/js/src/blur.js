//动态标题
// 啦啦啦，啦啦，去呀~ 
// 冲出你的窗口
var OriginTitile = document.title;
var OriginIcon = $('[rel="icon"]').attr('href');
console.log(OriginIcon);
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/disconnect.png");
        document.title = ' 喔唷，崩溃啦！ ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', OriginIcon);
        document.title = ' 又好了(*^_^*) ';
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});