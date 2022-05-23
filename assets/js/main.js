$(document).ready(function(){

// all artworks
const artwork =[
  {
    credits: '© Elisa Lavergo, Projet "In the field", 2014',
    image: 'MEL_LARVEGO_050475.jpg',
    models: [
      'https://my.spline.design/backpack-fc152d6dfc940bd47a51d592725b9f04/', // bag
      'https://my.spline.design/sunglasses-571e48d8ce3089b0ebe7d54f16176541/', // glasses
      'https://my.spline.design/balls-67798941912082a842263cc552478249/' // balls
    ],
    // top, left, size
    target: [
      [45, 2, 60], // bag
      [55, 38, 50], // glasses
      [64, 25, 40] // balls
    ],
    text: [
      'Try to find the bag in the image',
      'What about this one?',
      'Nice, how about these balls? ;)'
    ]
  },
  {
    credits: '© Elisa Lavergo, Projet "In the field", 2014',
    image: 'MEL_LARVEGO_050475.jpg',
    models: [
      'https://my.spline.design/backpack-fc152d6dfc940bd47a51d592725b9f04/',
      'https://my.spline.design/sunglasses-571e48d8ce3089b0ebe7d54f16176541/',
      'https://my.spline.design/balls-67798941912082a842263cc552478249/'
    ],
    text: [
      'Try to find the bag in the image',
      'What about this one?',
      'Nice, how about these balls? ;)'
    ]
  }
];

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const page_id = urlParams.get('id')
const page_model = urlParams.get('model')
const page_hint = urlParams.get('hint')

console.log('page_id = ' + page_id + ', page_model = ' + page_model + ', page_hint = ' + page_hint)
console.log(artwork[page_id].target[page_model])
//console.log(artwork[0].text.entry)

// image
$('.wrapper-photo>img').attr('src', '../assets/artworks/' + artwork[page_id].image)
//target
$('.wrapper-photo>.target').css({
  'top' : artwork[page_id].target[page_model][0] + '%', 
  'left' : artwork[page_id].target[page_model][1] + '%',
  'height' : artwork[page_id].target[page_model][2] + 'px',
  'width' : artwork[page_id].target[page_model][2] + 'px'
})
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
    window.location.href = '/pages/artwork.html?id=' + gotoId + '&model=' + gotoModel + '&hint=0'
  }
})


// show the correct button (hint/help)
$('.wrapper-hint>.btn').click(function(){
  console.log('btn')
  //console.log(page_hint)
  if(page_hint == 1){
    $('.btn.hint').addClass('hidden')
    $('.btn.help').removeClass('hidden')
  } else{
    $('.btn.help').addClass('hidden')
    $('.btn.hint').removeClass('hidden')
  }
});

});










// artwork.forEach((artwork, index)=>{
//   console.log(artwork.image);
// });