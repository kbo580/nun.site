$(function(){
  //.nav内のaをクリックすると
$('.header-nav a').click(function(){
  //押したもののhref属性を取得し、変数idに入れる
    var id =$(this).attr('href');
  //画面の一番上から変数idの距離を取得し変数positionに入れる
    var position = $(id).offset().top;
  //ページの上から変数positionまでスクロールする
    $('html, body').animate({'scrollTop': position}, 300);
  });












});