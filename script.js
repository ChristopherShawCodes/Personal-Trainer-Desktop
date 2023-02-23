$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    $(".banner-1").css("top", -(scrollTop *0.4)+"px");
    if(scrollTop>1200){
      $(".banner-2").css("top",+450 -(scrollTop *0.4)+"px");
    } if (scrollTop>2252) {
        $(".banner-3").css("top",+500 -(scrollTop *0.2)+"px");
    }  if (scrollTop>3250) {
        $(".banner-4").css("top",+500 -(scrollTop *0.2)+"px");
    }if($(window).width()<500) {
        $(".banner-2").css("top",+150 -(scrollTop *0.2)+"px");
        $(".banner-3").css("top",+1200 -(scrollTop *0.2)+"px");
        $(".banner-2").css("top",+150 -(scrollTop *0.2)+"px");
    }
  });

  var scrollLink = $(".scroll");

  scrollLink.click(function(e){
    e.preventDefault();
    $("body,html").animate({
      scrollTop: $(this.hash).offset().top
    },1000)
});