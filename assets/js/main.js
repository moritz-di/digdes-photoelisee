$(document).ready(function(){

console.log('main.js -> ready')

// ============================================
//                    HOME
// ============================================


// load the first object of each image to the iframe
// $('.wrapper-models>a>iframe').each(function(){
//   var thisid = $(this).attr('data-id')
//   $(this).attr('src', artwork[thisid].models[0])
// })


// ============================================
//                    SINGLE
// ============================================


// get the url and it's current paramenters
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const page_id = urlParams.get('id')
const page_model = urlParams.get('model')

// load image
$('.wrapper-photo>img').attr('src', '../assets/artworks/' + artwork[page_id].image)

// load & display the targets
let targets = artwork[page_id].target[page_model]
targets.forEach((element,index) => {
  $('.wrapper-photo').append("<div class='target target-" + index + "'></div>")
  console.log(index)
    $('.wrapper-photo>.target-' + index).css({
      'top' : element[0] + '%', 
      'left' : element[1] + '%',
      'height' : element[2] + 'px',
      'width' : element[2] + 'px'
    })
});

// model
$('.model>iframe').attr('src', artwork[page_id].models[page_model])
// text
$('.info>p').text(artwork[page_id].text[page_model])
// credits
$('.credits>span').text(artwork[page_id].credits)

var gotoId = page_id
var gotoModel = page_model

// switch to the next model
$('.wrapper-photo>.target').click(function(){
  // set up the model count
  gotoModel++
  // redirect to the success-page if all the objects were found
  if(gotoModel == artwork[page_id].models.length){
    window.location.href = '/pages/success.html'
  } else{ // or display the next object
    window.location.href = '/pages/artwork.html?id=' + gotoId + '&model=' + gotoModel //+ '&hint=0'
  }
})


// show the correct button & content (hint/help)
var hint = 0

$('.wrapper-hint>.btn').click(function(){
  console.log('btn')
// show a hint and the help button
  if(hint == 0){
    $('.btn.hint').toggleClass('hidden')
    $('.btn.help').toggleClass('hidden')
    hint = 1
    console.log('hint displayed')
    $('.wrapper-photo').toggleClass('hint')
// if the hint is already displayed, show the help page
  } else if (hint == 1){
    $('.btn.hint').toggleClass('hidden')
    $('.btn.help').toggleClass('hidden')
    console.log('help displayed')
    $('.overlay-help').toggleClass('active')
    hint = 2;
    $('.wrapper-photo').toggleClass('hint')
  }
});


$('.btn.back').click(function(){
// close help if open
  if(hint == 2){
    $('.overlay-help').toggleClass('active')
    $('.wrapper-photo').removeClass('hint')
    hint = 0

// goto prev model
  } else if(gotoModel > 0 && hint == 0){
    var prevModel = gotoModel - 1
    window.location.href = '/pages/artwork.html?id=' + gotoId + '&model=' + prevModel
  }

// if first model, goto home
  else if (gotoModel == 0 && hint == 0){
    window.location.href = '/'
  }
})

// ============================================
//                success links
// ============================================

$('.wrapper-models>iframe').contents().click(function(){
  console.log('click detected')
  var linkTo = $(this).attr('data-link')
  console.log(linkTo)
})

$("iframe").on("load", function(){
  $(this).contents().on("mousedown, mouseup, click", function(){
      alert("Click detected inside iframe.");
  });
});


// ============================================
//                    cursor
// ============================================

var cursor = $('#cursor');

$(window).mousemove(function(e) {
    cursor.css({
        top: e.clientY - cursor.height() / 2,
        left: e.clientX - cursor.width() / 2
    });
});

// ============================================
//                    panzoom
// ============================================


const elem = document.getElementById('panzoom-element')
const panzoom = Panzoom(elem, {
  maxScale: 10
})
panzoom.pan(20, 20)
panzoom.zoom(1, { animate: true })

// Panning and pinch zooming are bound automatically (unless disablePan is true).
// There are several available methods for zooming
// that can be bound on button clicks or mousewheel.
// button.addEventListener('click', panzoom.zoomIn)
elem.addEventListener('wheel', panzoom.zoomWithWheel)

}); // ready :)








//let hasChildren = typeof(targets[0]) === "number" ? false : true; 

// artwork.forEach((artwork, index)=>{
//   console.log(artwork.image);
// });