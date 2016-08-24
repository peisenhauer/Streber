/*** SmoothScrolling ***/

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('#js').on('click',function (e) {
        e.preventDefault();

      leinwand();



    });

    $('#label_11').on('click',function (e) {
        e.preventDefault();

      leinwand();



    });

    $('#close2').on('click',function (e) {
        e.preventDefault();

      leinwand();



    });

    function leinwand(){

      var $top = $('#leinwand').css('top');
      if($top == "0px")
      {


                $('#leinwand').animate({
                            // hier folgen die Animationsparameter

                            top: -570,

                          }, 1500 );


      }
      else {


                $('#leinwand').animate({
                            // hier folgen die Animationsparameter

                            top: 0,

                          }, 1500 );

      }

    }

    $('#desk').animate({
                // hier folgen die Animationsparameter

                left: 250,

              }, 1500 );



});
