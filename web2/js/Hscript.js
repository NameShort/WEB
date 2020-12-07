//접기/펼치기
$('.btn').click(function(e){
    e.preventDefault();
    $('.nav').slideToggle();
    $('.btn').toggleClass("open");

    if($('.btn').hasClass("open")){
        //open일 때
        $('.btn').find('i').attr("class", "fa fa-angle-up");
    }else{
        //open이 없을 때 
        $('.btn').find('i').attr("class", "fa fa-angle-down");
    }
});

$(window).resize(function(){
    var wWidth = $(window).width();
    if(wWidth > 600){
        $('.nav').removeAttr('style');
    }
});

//lightbox
$('.lightbox').lightGallery({
    
});

//이미지 슬라이더
$(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                autoplay: false
                }
        }
    ]
});

/*공유하기 밑 링크 열기*/
$(".google").click(function(e){
    e.preventDefault();
    window.open('https://plus.google.com/share?url=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
})
$(".twitter").click(function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
});  
$(".HTML5").click(function(e){
    e.preventDefault();
    window.open('https://webzz.tistory.com/');

});
$(".github").click(function(e){
    e.preventDefault();
    window.open('https://github.com/NameShort');
    
});