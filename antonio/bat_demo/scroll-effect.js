$(window).load(
    function do_this_when_the_window_loads() {
          $('#bat1').toggleClass('spin-me');
              $('#bat2').toggleClass('spin-me');
              $('#bat3').toggleClass('spin-me');
              $('#bat4').toggleClass('spin-me');
              $('#bat5').toggleClass('spin-me');
              $('#bat6').toggleClass('spin-me');
              $("#bat7").toggleClass('spin-me');
        $(window).on('scroll', 
            function do_this_when_scrolling_happens(ev) {
            
                var $bat = $('#bat1');
                var scrollTop = $(window).scrollTop();
                var position = 800-2*scrollTop;
                if(position===100) {console.log ("position is zero!")};
                $('#bat7').css({'padding-left': position+100+'px'});
                $('#bat6').css({'padding-left': position+220+'px'});
                $('#bat5').css({'padding-left': position+340+'px'});
                $('#bat4').css({'padding-left': position+460+'px'});
                $('#bat3').css({'padding-left': position+580+'px'});
                $('#bat2').css({'padding-left': position+700+'px'});
                $('#bat1').css({'padding-left': position+820+'px'});
              
            } // closes function do_this_when_scrolling(ev) { ... }
        ); // closes $(window).on('scroll', ... );
    } // closes function do_this_when_the_window_loads() { ... }
); // closes $(window).load( ... );


