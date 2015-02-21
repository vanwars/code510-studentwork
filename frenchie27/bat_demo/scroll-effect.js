$(window).load(
    function do_this_when_the_window_loads() {
        $(window).on('scroll',
            function do_this_when_scrolling_happens(ev) {
                var $bat = $('#seagull');
                var scrollTop = $(window).scrollTop();
                var positionseagull= 900 - 4*scrollTop;
                var positionparaglider = 0 + 6*scrollTop;
                $('#seagull').css({'padding-top': positionseagull+'px',
                                   'padding-left': positionseagull+300+'px'
                });
                $('#paraglider').css({'padding-left': positionparaglider+'px'});
            } // closes function do_this_when_scrolling(ev) { ... }
        ); // closes $(window).on('scroll', ... );
    } // closes function do_this_when_the_window_loads() { ... }
); // closes $(window).load( ... );
