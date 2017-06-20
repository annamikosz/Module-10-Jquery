$(function() {
  var $carousel = $('#carousel'),
      carouselList = $("#carousel ul"),
      rightArrow = $('.right-arrow').find('i'),
      leftArrow = $('.left-arrow').find('i'),
      interval;
 
  interval = setInterval(changeSlideRight, 2000);
  
  function changeSlideLeft() {
    carouselList.animate({'marginLeft': 0}, 500, moveFirstSlideLeft);
  }
  
  function moveFirstSlideLeft(){
    var firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");

    firstItem.before(lastItem);
    carouselList.css({'marginLeft': -400});
  }

  function changeSlideRight() {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlideRight);
  }

  function moveFirstSlideRight(){
    var firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");

    lastItem.after(firstItem);
    carouselList.css({'marginLeft':0});
  }
  
  rightArrow.on('click', function() {
    changeSlideRight();
  });
  leftArrow.on('click', function() {
    changeSlideLeft();
  });

  $carousel.hover(
    function() {
      clearInterval(interval);
    },
    function() {
      interval = setInterval(changeSlideRight, 2000);
    }
  );
     
});
