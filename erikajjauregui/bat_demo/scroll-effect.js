$(window).load(
    function do_this_when_the_window_loads() {
        $(window).on('scroll',
            function do_this_when_scrolling_happens(ev) {
                var $bat = $('#bat1');
                var scrollTop = $(window).scrollTop();
                var position1 = 800 -2*scrollTop;
                $('#bat1').css({'padding-left': position1+'px'});
                var position2 = 250 +7 *scrollTop;
                  $('#bat2').css({'padding-left': position2+'px'});
                  var position3 = 600 +4 *scrollTop;
                  $('#bat3').css({'padding-left': position3+'px'});
            } // closes function do_this_when_scrolling(ev) { ... }
        ); // closes $(window).on('scroll', ... );
    } // closes function do_this_when_the_window_loads() { ... }
); // closes $(window).load( ... );
