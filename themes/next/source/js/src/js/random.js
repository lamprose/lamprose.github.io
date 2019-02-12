function randomRgbaColor() { //随机生成RGB颜色
  var r = Math.floor(Math.random() * 256); //随机生成256以内r值
  var g = Math.floor(Math.random() * 256); //随机生成256以内g值
  var b = Math.floor(Math.random() * 256); //随机生成256以内b值
  return "rgb("+r+','+g+','+b+')';  //返回rgba(r,g,b,a)格式颜色 
}
function randomTags(){
    $(this).css("color",randomRgbaColor);
}
$(document).ready(function () {
  var tags_a = $(".post-tags a");
  var home_tags_a= $(".home-post-tags a");
  tags_a.each(randomTags);
  home_tags_a.each(randomTags);
})
