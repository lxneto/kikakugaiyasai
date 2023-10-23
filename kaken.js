particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":30,//この数値を変更すると桜の数が増減できる
      "density":{
        "enable":true,
        "value_area":1121.6780303333778
      }
    },
    "color":{
      "value":"#fff"
    },
    "shape":{
      "type":"image",//形状は画像を指定
      "stroke":{
        "width":0,
      },
      "image":{
        "src":"http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/5-6/img/flower.png",//画像を指定
        "width":120,
        "height":120
      }
    },
    "opacity":{
      "value":0.06409588744762158,
      "random":true,
      "anim":{
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{
      "value":8.011985930952697,
      "random":true,//サイズをランダムに
      "anim":{
        "enable":false,
        "speed":4,
        "size_min":0.1,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
    },
    "move":{
      "enable":true,
      "speed":7,//この数値を小さくするとゆっくりな動きになる
      "direction":"bottom-right",//右下に向かって落ちる
      "random":false,//動きはランダムにしない
      "straight":false,//動きをとどめない
      "out_mode":"out",//画面の外に出るように描写
      "bounce":false,//跳ね返りなし
      "attract":{
        "enable":false,
        "rotateX":281.9177489524316,
        "rotateY":127.670995809726
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
      },
      "onclick":{
        "enable":false,
      },
      "resize":true
    }
  },
  "retina_detect":false
});




$('[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});





//lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

lightbox.option({
  'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
  'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
})

//ふわっと見せるためのJS。3-5-3 ページが読み込まれたらすぐに動かしたい&画面をスクロールをしたら動かしたい場合内のソースコード使用

function fadeAnime(){
// flipLeft
$('.recipe-card li').each(function(){ 
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipLeft');
    }else{
        $(this).removeClass('flipLeft');
    }
});
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまでページが読み込まれたらすぐに動かしたい場合の記述
  
  $(document).ready(function() {
  $(".recipe-title").on("mouseover", function() {
    $(this).next().slideDown();
  });
  $(".recipe-title").on("mouseout", function() {
    $(this).next().slideUp();
  });
});
