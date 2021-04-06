$(function(){
    // a 태그 성격제거
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });
    //marquee
    $('.marquee_slide').marquee({
        duplicated: true,
        delayBeforeStart: 0,
        pauseOnHover: true
    });
    $('.marquee_slide2').marquee({
        direction: 'right',
        delayBeforeStart: 0,
        pauseOnHover: true
    });

    //메뉴버튼 클릭시
    $('#nav-icon').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('.display').stop().slideToggle();
    });

    $(window).resize(function(){
        $('.display').css('display','none');
        let wt = $(window).width();
        if(wt > 768 && $('.display').is(':hidden')) {
            $('.display').removeAttr('style');
        } 
    });

    //스크롤시 배경이미지이동
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.section_box',
            start:'top center',//브라우저 기준 움직임의 시작점
            //end:'top 90%',//브라우저 기준 움직임의 끝점
            end:'bottom center',
            //markers:true,시작과 끝의 기준 확인 가능
            scrub:true//스크롤의 움직임을 기준으로 실행
        }
    });
    tl.to('.bg_box',6, {'background-position':'0 100%'})

    //마우스스크롤시
    AOS.init();

    //슬라이드
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    
    //마우스를 올렸을때
    $('.section1 .rotate').hover(function(){ //mouseenter()
        $('.section1 .more').css('display','block');
    }, function(){//mouseleave()
        $('.section1 .more').css('display','none');
    });
    $('.section1 .more').hover(function(){ //mouseenter()
        $('.section1 .more').css('display','block');
    }, function(){//mouseleave()
        $('.section1 .more').css('display','none');
    });

    $('.section2 .rotate').hover(function(){ //mouseenter()
        $('.section2 .more').css('display','block');
    }, function(){//mouseleave()
        $('.section2 .more').css('display','none');
    });
    $('.section2 .more').hover(function(){ //mouseenter()
        $('.section2 .more').css('display','block');
    }, function(){//mouseleave()
        $('.section2 .more').css('display','none');
    });

    $('.section3 .rotate').hover(function(){ //mouseenter()
        $('.section3 .more').css('display','block');
    }, function(){//mouseleave()
        $('.section3 .more').css('display','none');
    });
    $('.section3 .more').hover(function(){ //mouseenter()
        $('.section3 .more').css('display','block');
    }, function(){//mouseleave()
        $('.section3 .more').css('display','none');
    });
});