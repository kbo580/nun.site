'use strict';
{
  //データベース//
//   const galleryExplaination = [
//     {name: 'aaa',chara: 'bbb',explain: 'こんなキャラです。'},
//     {name: 'ccc',chara: 'ddd',explain: 'こんなキャラです。こんなキャラです。こんなキャラです。'},
//     {name: 'eee',chara: 'fff',explain: 'こんなキャラです。こんなキャラです。こんなキャラです。こんなキャラです。'},
// ];
//   const worksName = document.getElementById('worksName');
//   const charaName = document.getElementById('charaName');
//   const explain = document.getElementById('explain');



  




  // const kbo = document.getElementById('kbo');
  // kbo.addEventListener('click', ()=>{
  //   worksName.textContent = galleryExplaination[0].name;
  //   charaName.textContent = galleryExplaination[0].chara;
  //   explain.textContent = galleryExplaination[0].explain;
  // });

  // const kbo2 = document.getElementById('kbo2');
  // kbo2.addEventListener('click', ()=>{
  //   worksName.textContent = galleryExplaination[1].name;
  //   charaName.textContent = galleryExplaination[1].chara;
  //   explain.textContent = galleryExplaination[1].explain;
  // });










}





$(function(){

//スクロール
$('.header-nav a').click(function(){
    var id =$(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop': position}, 300);
  });

  //サムネクリックで拡大
  $('.work-thumbnail').click(function() {
    var imgSrc = $(this).children().attr('src');
    $('#big').children().attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
  });
  
  //closeボタンで閉じる
  $('#close').click(function() {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
  });
  // $('.modal').click(function(){
  //   $('#close').click();
  // });


////////////////////
//ギャラリページ用//
////////////////////
// サムネをクリックするとギャラリーの文字が変化する
// $('#kbo').click(function(){
//     $('#worksName').text('nameA');
//     $('#charaName').text('nameA2');
//     $('#explain').text('こんなキャラです。こんなキャラです。');
// });

// $('#kbo2').click(function(){
//     $('#worksName').text('nameB');
//     $('#charaName').text('nameB2');
//     $('#explain').text('こんなキャラです。こんなキャラです。こんなキャラです。こんなキャラです。');
// });

//スマホ、アンドロイドの時にサムネをクリックするとギャラリーの画像が変化する
$('.sp-gallery-thumbnail').click(function() {
  var imgSrc = $(this).children().attr('src');
  $('.gallery-left li').children().attr('src', imgSrc);

  $('.gallery-right-image').removeClass('active');
  var index = $('.sp-gallery-thumbnail').index($(this));
  $('.gallery-right-image').eq(index).addClass('active');
});

// pcの時にサムネをクリックするとギャラリーの画像が変化する
// $('.pc-gallery-thumbnail').click(function() {
//   var imgSrc = $(this).children().attr('src');
//   $('.gallery-left li').children().attr('src', imgSrc);

//   $('.gallery-right-image').removeClass('active');
//   var index = $('.pc-gallery-thumbnail').index($(this));
//   $('.gallery-right-image').eq(index).addClass('active');
// });







});