// // ロードアニメ
$(function () {
    setTimeout(function () {
        $('.box').fadeIn(1600);
    }, 1000); //1秒後にロゴをフェードイン!
    setTimeout(function () {
        $('.box').fadeOut(2000);
    }, 3000); //4秒後にロゴ含め真っ白背景をフェードアウト！
  });
// フェードイン
// フェードイン
$(window).on('load scroll', function () {

    var box = $('.main2');
    var animated = 'animated';

    box.each(function () {

        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        //画面内のどの位置で処理を実行するかで「100」の値を変更
        if (scrollPos > boxOffset - wh + 100) {
            $(this).addClass(animated);
        }
    });

});

// ボタン
$(function () {
    $('.wrap').hide().fadeIn(1500);
  });
  $('.btn2').on('click', function () {
    $(window).scrollTop(0);
  });
  $('.btn3').on('click', function () {
    $(window).scrollTop(750);
  });
  $('.btn4').on('click', function () {
    $(window).scrollTop(1150);
  });
  $('.btn5').on('click', function () {
    $(window).scrollTop(1800);
  });
  $('.btn6').on('click', function () {
    $(window).scrollTop(2700);
  });
  $('.btn7').on('click', function () {
    $(window).scrollTop(3600);
  });
  
  $('.btn2-2').on('click', function () {
    $(window).scrollTop(0);
  });
  $('.btn3-2').on('click', function () {
    $(window).scrollTop(370);
  });
  $('.btn4-2').on('click', function () {
    $(window).scrollTop(740);
  });
  $('.btn5-2').on('click', function () {
    $(window).scrollTop(990);
  });
  $('.btn6-2').on('click', function () {
    $(window).scrollTop(1290);
  });
  $('.btn7-2').on('click', function () {
    $(window).scrollTop(1340);
  });
  