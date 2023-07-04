// 드래그 방지
var omitformtags = ["input", "textarea", "select"]
omitformtags = omitformtags.join("|")

function disableselect(e) {
    if (omitformtags.indexOf(e.target.tagName.toLowerCase()) == -1)
        return false
}

function reEnable() {
    return true
}

if (typeof document.onselectstart != "undefined")
    document.onselectstart = new Function("return false")
else {
    document.onmousedown = disableselect
    document.onmouseup = reEnable
}







const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');



window.addEventListener('scroll', _.throttle(function() {
     
    if (window.scrollY > 500){
        // 배지 숨기기
        // badgeEl.style.display = 'none'
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
        
    // 버튼 보이기
    gsap.to('#to-top', .2,{
        x: 0
    });


    } else {
        // badgeEl.style.display = 'block'
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });

    // 버튼 숨기기
    gsap.to('#to-top', .2,{
        x: 100
        });
    }
}, 300));

// _.throttle(함수, 밀리세컨드단위 시간 추가 ex 300은 0.3초 임)


toTopEl.addEventListener('click', function(){

    gsap.to(window, .7, {
        scrollTo: 0
    });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1,{
        delay : (index + 1) * 0.7, //0.7, 1.4, 2.1 ...
        opacity: 1
    });
} );

// New Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {

        direction: 'vertical',
        autoplay: true,
        loop: true

});


new Swiper('.promotion .swiper-container',
{
    slidesPerView: 3, //한번에 보여줄 슬아이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, //슬라이드 가운데 출력
    loop: true,
      autoplay: {
         delay: 5000,
      },

pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickalbe: true,
},
navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
}
      
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation:{
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'

    }

});





const promotionEl = document.querySelector('.promotion');
const promotinToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotinToggleBtn.addEventListener('click', function () {

    isHidePromotion = !isHidePromotion
    if (isHidePromotion){
    //숨김처리
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    //보임처리

    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }



function floatingObject(selector, delay, size){
    // gsap.to(요소, 시간, 옵션);
    
    gsap.to(selector,  //선택자
        random(1.5, 2.5), //애니메이션 동작 시간
    
    { // 옵션
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay),
            
    });
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)



const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());


});







