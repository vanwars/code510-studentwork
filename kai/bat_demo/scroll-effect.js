$(window).load(
    function do_this_when_the_window_loads() {
        $(window).on('scroll',
            function do_this_when_scrolling_happens(ev) {
                var $bat = $('#bat1');
                var scrollTop = $(window).scrollTop();
                var position = 900- 2*scrollTop;
                $('#bat1').css({'padding-left': position+100+'px'});
                $('#bat2').css({'padding-left': position+100+'px'});
                $('#bat3').css({'padding-left': position+100+'px'});
                $('#bat4').css({'padding-left': position+100+'px'});
                $('#bat5').css({'padding-left': position+100+'px'});
                $('#bat6').css({'padding-left': position+100+'px'});
            } // closes function do_this_when_scrolling(ev) { ... }
        ); // closes $(window).on('scroll', ... );
    } // closes function do_this_when_the_window_loads() { ... }
); // closes $(window).load( ... );
