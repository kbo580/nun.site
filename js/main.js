// 'use strict';
// {
//   const worksName = ['kboA','kboB','kboC'];
//   const charaName = ['k','b','o'];
//   const explain = ['すごい','いけてる','かわいい'];
//   const worksName = document.getElementById('worksName');
//   const charaName = document.getElementById('charaName');
//   const explain = document.getElementById('explain');
//   const pcThumb = document.querySelectorAll('pc-gallery-thumbnail');
  
//   console.log(`${worksName[0]}は${explain[1]}`)
//   console.log(worksName)
  
//   worksName.addEventListener('click', ()=>{
//     worksName.textContent = 'kbo';
//     charaName.textContent = 'kbo';
//     explain.textContent = 'kbo';
//   })

// }





$(function(){

//スクロール
$('.header-nav a').click(function(){
    var id =$(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop(200px)': position}, 300);
  });


//サムネをクリックするとギャラリーの画像が変化する
  $('.sp-gallery-thumbnail').click(function(){
    $('.slideA').removeClass('active');
    $('.slideB').removeClass('active');
    var index = $('.sp-gallery-thumbnail').index($(this));
    $('.slideA').eq(index).addClass('active');
    $('.slideB').eq(index).addClass('active');
  });

  $('.pc-gallery-thumbnail').click(function(){
    $('.slideA').removeClass('active');
    $('.slideB').removeClass('active');
    var index = $('.pc-gallery-thumbnail').index($(this));
    $('.slideA').eq(index).addClass('active');
    $('.slideB').eq(index).addClass('active');
  });

//サムネをクリックするとギャラリーの文字が変化する
// $('.pc-gallery-thumbnail').click(function(){
//     $('#worksName').text('kbo');
// });


$('.work-thumbnail').click(function() {
  var imgSrc = $(this).children().attr('src');
  $('#big').children().attr('src', imgSrc);
  $('.modal').fadeIn();
  $('body,html').css('overflow-y', 'hidden');
});

$('#close').click(function() {
  $('.modal').fadeOut();
  $('body,html').css('overflow-y', 'visible');
});
// $('.modal').click(function(){
//   $('#close').click();
// });





});