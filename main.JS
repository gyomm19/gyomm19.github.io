

//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [//PC用の画像
        { src: 'https://lh3.googleusercontent.com/pw/AJFCJaWRSrAaaWsTNI2EZoOo4kkvvsLrmWTqvGD_vLJQ1ZF47eTyQ_0_MOclRgajU3ibONd9NX5FFjZcxR4YCytaxEITLtS7fll6rK9Di0SjFswVBKWYMXU=w480-h320-p-k'},
        { src: 'https://lh3.googleusercontent.com/WL7YmxgpD4tgQJWCCC88B3fu_9QpgihD_MmBHi2-A7Ex4yNKPMSbOiuQZ5GhjhzdhBKw3fFdVKWuaVZDGguL0R8WozjVb6RQLHuQU3gldNtjtbgB-gws3daJL1WITkOyZVF4vYQPvw=w480-h320-p-k'},
        { src: 'https://lh3.googleusercontent.com/j9JDASBhE7ICohEf0mmvXtWmrPzAE0T0hTfDBIXllwDKcGdsQF2JKqu7uB3KydfyRMeE-ku9VJnYIcby9QFGNeHHqdonX_qliZmKEjupkjmi8q78pyp7Bl_gKIl3fV8NgS507tFvfw=w480-h320-p-k'},
        { src: "https://lh3.googleusercontent.com/v1GXkLaB67Zds8IxdUhUJUITBnqnGgIm4fAVl2krLsEGKH3mWr-_JRSHPez8Za1uTiyw0dBVuNh55VDECnWV778ZG5nAzj6SWzNmY14hNDOKJH2RhKkT5Juvg5c3ByTJJu3a5Jvybw=w480-h320-p-k"},
        { src: "https://lh3.googleusercontent.com/5GqIRIwEO6f-mjtLz1qXnw-og0QgRL7cE9GvtEEDPyk-osO4Hqcofi5BLTAny68K3tHNU6lJTRgcFvkt5-gPn4T37XAJn9myfAznnmKv16NJ6pH53vy40cIFVX0UqbMHP28rDEl38w=w480-h320-p-k"}

         ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: 'https://lh3.googleusercontent.com/pw/AJFCJaWRSrAaaWsTNI2EZoOo4kkvvsLrmWTqvGD_vLJQ1ZF47eTyQ_0_MOclRgajU3ibONd9NX5FFjZcxR4YCytaxEITLtS7fll6rK9Di0SjFswVBKWYMXU=w480-h320-p-k' },
        { src: 'https://lh3.googleusercontent.com/WL7YmxgpD4tgQJWCCC88B3fu_9QpgihD_MmBHi2-A7Ex4yNKPMSbOiuQZ5GhjhzdhBKw3fFdVKWuaVZDGguL0R8WozjVb6RQLHuQU3gldNtjtbgB-gws3daJL1WITkOyZVF4vYQPvw=w480-h320-p-k' },
        { src: 'https://lh3.googleusercontent.com/j9JDASBhE7ICohEf0mmvXtWmrPzAE0T0hTfDBIXllwDKcGdsQF2JKqu7uB3KydfyRMeE-ku9VJnYIcby9QFGNeHHqdonX_qliZmKEjupkjmi8q78pyp7Bl_gKIl3fV8NgS507tFvfw=w480-h320-p-k' },
{ src: "https://lh3.googleusercontent.com/v1GXkLaB67Zds8IxdUhUJUITBnqnGgIm4fAVl2krLsEGKH3mWr-_JRSHPez8Za1uTiyw0dBVuNh55VDECnWV778ZG5nAzj6SWzNmY14hNDOKJH2RhKkT5Juvg5c3ByTJJu3a5Jvybw=w480-h320-p-k"},
        { src: "https://lh3.googleusercontent.com/5GqIRIwEO6f-mjtLz1qXnw-og0QgRL7cE9GvtEEDPyk-osO4Hqcofi5BLTAny68K3tHNU6lJTRgcFvkt5-gPn4T37XAJn9myfAznnmKv16NJ6pH53vy40cIFVX0UqbMHP28rDEl38w=w480-h320-p-k"}

      ];
    }

//Vegas全体の設定

$('#slider').vegas({
    overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 13000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像設定を読む
  });


