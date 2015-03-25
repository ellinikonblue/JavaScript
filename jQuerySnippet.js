// jQuerySnippet.js
// Feb 19th, 2015 KAWANISHI Kazuhiro
//----------
// スクロールすると出現するボタン FadeScrollBtn
//
$(function() {
  var topBtn = $('#FadeScrollBtn');

  topBtn.hide();

  // スクロールが 300px に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  // id="FadeScrollBtn" とした要素が、一定量スクロールしたときに出現するようになります。
  // 別途、ボタンのための CSS が必要です。
});
