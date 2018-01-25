
$(window).on('load', function () {
    // 百度统计
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?5cc7a6b1e956f918d5c45e1cb7ae19da";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    // io_which_way_alter();
});
// function io_which_way_alter(){
//     if($("#io_intro").hasClass('ready')){
//         $.getScript( "public/js/gpu/GPUFluid-1.3.js", function( data, textStatus, jqxhr ) {
//             $("#io_intro .preloader").remove();
//             $(".banner-con").removeClass('opa0');
//             $.getScript( "public/js/gpu/three761.min.js", function( data, textStatus, jqxhr ) {
//                 $.getScript( "public/js/gpu/home.js", function( data, textStatus, jqxhr ) {
//                     io_intro();
//
//                 });
//             });
//         });
//     }
    // if(!$("body").hasClass('transin')){
    //     $("body").addClass('transin');
    // }
// }
