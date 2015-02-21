$(window).load(
    function do_this_when_the_window_loads() {
        $(window).on('scroll',
            function do_this_when_scrolling_happens(ev) {
                var $bat = $('#bat1');
                var scrollTop = $(window).scrollTop();
                console.log('scrollTop', scrollTop);
                var position = 1000- 2*scrollTop;
                $('#bat1').css({'padding-left': position+'px'});
                var $bat = $('#bat2');
                var scrollTop = $(window).scrollTop();
                console.log('scrollTop', scrollTop);
                var position = 1000- 2*scrollTop;
                $('#bat2').css({'padding-left': position+'px'});
            } // closes function do_this_when_scrolling(ev) { ... }
        ); // closes $(window).on('scroll', ... );
    } // closes function do_this_when_the_window_loads() { ... }
); // closes $(window).load( ... );

function my_click_function() {
 $("#bat1").addClass('spinning');
 $("#bat2").addClass('spinning');
  
}
