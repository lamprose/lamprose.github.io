$(document).ready(function(){var i=$(".sidebar-inner"),o=CONFIG.sidebar.offset||12;function t(){var e=$(".header-inner").height()+o,t=function(){var e=$("#footer"),t=$(".footer-inner"),i=e.outerHeight()-t.outerHeight();return e.outerHeight()+i}();e+($("#sidebar").height()+NexT.utils.getSidebarb2tHeight())<$("#content").height()&&(i.affix({offset:{top:e-o,bottom:t}}),i.affix("checkPosition")),$("#sidebar").css({"margin-top":e+10,"margin-left":"auto"})}t(),window.matchMedia("(min-width: 992px)").addListener(function(e){e.matches&&($(window).off(".affix"),i.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),t())})});