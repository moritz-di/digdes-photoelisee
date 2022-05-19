$(document).ready(function(){
  // images

  // detect slides
  var slideCount = 0;
  $('.slide').each(function(){
    slideCount++;
  });
  console.log(slideCount);

  // hide all the slides but the first one
  $('.wrapper-side>.slide:not(:nth-child(1))').addClass('inactive');

  currentSlide = 1;
  // detect click on image and display next slide
  $('.wrapper-photo>img').click(function(){
    currentSlide++;
    $('.wrapper-side>.slide:not(:nth-child(1))').addClass('inactive');
    $('.wrapper-side>.slide:not(:nth-child(1))').addClass('inactive');
  });

})