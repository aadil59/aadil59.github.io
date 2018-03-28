var Carousel = (function () {
    'use strict';

    var carouselWrapper = document.querySelector(".carousel");
    
    var itemList = carouselWrapper.querySelector(".carousel-list");
    var wrapperWidth = carouselWrapper.clientWidth;
    var prev = carouselWrapper.querySelector(".prev");
    var next = carouselWrapper.querySelector(".next");
    var items = itemList.children;
    var slidePrev = prev.addEventListener('click', slidePrev);
    var slideNext = next.addEventListener('click', slideNext);
//    var amount = itemList.childElementCount;
    var amount = items.length;
    var currentElm = items[0];
    var counter = 0;

function navigate(direction) {
    currentElm.classList.remove('active');
    if (counter < 0) {
        counter = amount - 1;
    }
    if (!items[counter]) { 
      counter = 0;
    }
    currentElm = items[counter];
    currentElm.classList.add('active');
}
    // SLIDE NEXT
    function slideNext(ev) {
        (counter+1<amount)?counter++:counter=0;
//        console.log('right Clicked:'+counter);
        itemList.style.transform = "translateX(-"+wrapperWidth*(counter)+"px)";
        navigate(1);
    }
    
    // SLIDE PREVIOUS
    function slidePrev(ev) {
        (counter>0)?counter--:counter=amount-1;
//        console.log('Left Clicked:'+counter);
        itemList.style.transform = "translateX(-"+wrapperWidth*(counter)+"px)";
        navigate(-1);
    }
    navigate(0);
})();
