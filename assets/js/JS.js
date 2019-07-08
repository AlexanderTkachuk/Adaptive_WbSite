$(function() {
    var header = $('#header');
    var intro_h = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    
    //fixed header 
    checkScroll(scrollOffset);

    
    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if(scrollOffset >= intro_h) {
            header.addClass('fixed');
            $('#nav').removeClass('transparent');
        }
        else {
            header.removeClass('fixed');
            $('#nav').removeClass('active');
            $('.nav-toggle').removeClass('active');
            $('#nav').addClass('transparent');
        }
        
    }


    // smooth scroll
    $('[data-scroll]').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            $('.header__nav a').removeClass('active');
            $this.addClass('active');

            $('html, body').animate({
                scrollTop: blockOffset
            }, 1000)
    });

    //toggle
    $('#nav-toggle').on('click', function(e) {
        e.preventDefault();

        var $this = $(this);

            $('.nav-toggle').toggleClass('active');
            $('.header__nav').toggleClass('active');

    });

     // collapse
    $('[data-collapse]').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

            $this.toggleClass('active');
            $(blockId).slideToggle();
    });
});


var time = 2;
var check = 1;
$(window).scroll(function() {

    $('#counts').each(function() {
        var w_top = $(window).scrollTop(),
         e_top = $(this).offset().top;
        
        if(e_top < w_top+250) {
            if(check < 2) {
                $('.stat__dig').addClass('viz');
                $('div').each(function() {
                    var i = 1,
                    num = $(this).data('num'),
                    step = 1000*time/num,
                    that = $(this),
                    int = setInterval(function() {
                        if(i <= num) {
                            that.html(i);
                        }
                        else {
                            check += 2;
                            clearInterval(int);
                        }
                        i++;
                    }, step);
                });   

            }
        }

    });

});

