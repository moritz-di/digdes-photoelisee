$(document).ready(function(){

console.log('main.js -> ready')

// ============================================
//             ARTWORKS / DATABASE
// ============================================


// all artworks
const artwork =[
  {
    credits: 'Elisa Lavergo, Projet "In the field", 2014 // ©Elisa Lavergo',
    image: 'MEL_LARVEGO_050475.jpg',
    models: [
      'https://my.spline.design/backpack-fc152d6dfc940bd47a51d592725b9f04/', // bag
      'https://my.spline.design/sunglasses-571e48d8ce3089b0ebe7d54f16176541/', // glasses
      'https://my.spline.design/balls-67798941912082a842263cc552478249/', // balls
      'https://my.spline.design/can-58e135246fe284932f2c65c1a7d3187b/', // can
      'https://my.spline.design/migros-303ff83e74bfbe4c50e09996106b8e2c/', // logo migros
    ],
    // top, left, size
    target: [
      [[45, 2, 60]], // bag
      [[55, 38, 50]], // glasses
      [[64, 25, 40]], // balls
      [[78, 78, 50]], // can
      [
        [69, 62, 40],
        [63, 65, 50],
        [23, 35, 10]
      ], // logo migros
    ],
    text: [
      'Try to find the bag in the image',
      'What about this one?',
      'Nice, how about these balls? ;)',
      'Try to find the can in the image',
      'Try to find the migros logo in the image',
    ]
  },
  {
    credits: "Friedrich Buehler-Rist, Boule de Noel, 1930 // ©Musée de l'Elysée",
    image: 'MEL_BUEHLER_RIST_Friedrich_001397.jpg',
    models: [
      'https://my.spline.design/christmas-370fd687501d79686a91c7c3b1f73c5a/', // christmas bulb
      'https://my.spline.design/camera-a6fd2f5c1bdbc7d20cf0e10a463f3933/', // camera
      'https://my.spline.design/frame-055c8af1ce838abadfccf2cbc4b0285a/', // frame
      'https://my.spline.design/roses-b92525481d5ecf7eb3706fc2c6dccf43/', // roses
    ],
    // top, left, size
    target: [
      [27, 5, 400], // bulb
      [53, 38, 50], // camera
      [50, 25, 50], // frame
      [55, 47, 50], // roses
    ],
    text: [
      'Try to find the bulb in the image',
      'Try to find the camera in the image',
      'Try to find the frame in the image',
      'Try to find the roses in the image',
    ]
  },
];

// ============================================
//                    HOME
// ============================================

// load the first object of each image to the iframe
$('.wrapper-models>iframe').each(function(){
  var thisid = $(this).attr('data-id')
  $(this).attr('src', artwork[thisid].models[0])
})



// ============================================
//                    SINGLE
// ============================================


const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const page_id = urlParams.get('id')
const page_model = urlParams.get('model')
// const page_hint = urlParams.get('hint')

// console.log('page_id = ' + page_id + ', page_model = ' + page_model)
// console.log(artwork[page_id].target[page_model])
//console.log(artwork[0].text.entry)

// load image
$('.wrapper-photo>img').attr('src', '../assets/artworks/' + artwork[page_id].image)
// load target
var targetCount = artwork[page_id].target[page_model].length
console.log(targetCount);

// console.log(artwork[page_id].target[page_model][0][0]);

$()
let targets = artwork[page_id].target[page_model];
//let hasChildren = typeof(targets[0]) === "number" ? false : true; 

targets.forEach((element,index) => {
  $('.wrapper-photo').append("<div class='target target-"+index+"'></div>")
  console.log(index)
    $('.wrapper-photo>.target-'+index).css({
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

console.log(artwork[page_id].models.length)
console.log(gotoModel)

// console.log($('.wrapper-models>iframe').attr('data-id'))


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
// if the hint is already displayed, show the help page
  } else if (hint == 1){
    $('.btn.hint').toggleClass('hidden')
    $('.btn.help').toggleClass('hidden')
    console.log('help displayed')
    $('.overlay-help').toggleClass('active')
    hint = 2;
  }
});


$('.btn.back').click(function(){
// close help if open
  if(hint == 2){
    $('.overlay-help').toggleClass('active')
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

}); // ready :)










// artwork.forEach((artwork, index)=>{
//   console.log(artwork.image);
// });