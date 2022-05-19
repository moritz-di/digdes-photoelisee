$(document).ready(function(){

// all artworks
const artwork =[
  {
    credits: '© Elisa Lavergo, Projet "In the field", 2014',
    image: 'MEL_LARVEGO_050475.jpg',
    models: [
      'https://my.spline.design/backpack-fc152d6dfc940bd47a51d592725b9f04/',
      'https://my.spline.design/sunglasses-571e48d8ce3089b0ebe7d54f16176541/',
      'https://my.spline.design/balls-67798941912082a842263cc552478249/'
    ],
    target: [
      [40, 50, 10]
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

//console.log(artwork[0].text.entry)

// image
$('.wrapper-photo>img').attr('src', '../assets/artworks/' + artwork[page_id].image)
// model
$('.model>iframe').attr('src', artwork[page_id].models[page_model])
// text
$('.info>p').text(artwork[page_id].text[page_model])
// credits
$('.credits>span').text(artwork[page_id].credits)

var gotoId = page_id
var gotoModel = page_model

$('.wrapper-photo>img').click(function(){
  gotoModel++ 
  window.location.href = "/pages/artwork.html?id=" + gotoId + "&model=" + gotoModel
})


});










// artwork.forEach((artwork, index)=>{
//   console.log(artwork.image);
// });