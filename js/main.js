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


//スマホ、アンドロイドの時にサムネをクリックするとギャラリーの画像が変化する
$('.gallery-thumbnail').click(function() {
  var imgSrc = $(this).children().attr('src');
  $('.gallery-left li').children().attr('src', imgSrc);

  $('.gallery-right-image').removeClass('active');
  var index = $('.gallery-thumbnail').index($(this));
  $('.gallery-right-image').eq(index).addClass('active');
});

var db = [
  {name: 'exampleA', chara: 'exampleA', explain: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明'},
  {name: 'exampleB', chara: 'exampleB', explain: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明'},
  {name: 'exampleC', chara: 'exampleC', explain: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明'},
];

$('.gallery-thumbnail').click(function() {
  var thumbIndex = $('.gallery-thumbnail').index($(this));
  $('#worksName').text(db[thumbIndex].name);
  $('#charaName').text(db[thumbIndex].chara);
  $('#explain').text(db[thumbIndex].explain);
});














});