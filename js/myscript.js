$(document).ready(function () {

    // Adjust Header Height

    var myHeader = $("header"),
        mySlider = $(".slider")

    myHeader.height($(window).height())

    // On Resize Window =>

    $(window).resize(function () {

        // Adjust Header Height
        myHeader.height($(window).height())

        // Center Slider
        mySlider.each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".slider li").height()) / 2)
        })

    })

    // Links And Active Class

    $(".navBar ul li a").on("click", function () {

        $(this).parent().addClass("active").siblings().removeClass("active")

    })

    // Adjust BxSlider Content in Center

    mySlider.each(function () {
        $(this).css("paddingTop", ($(window).height() - $(".slider li").height()) / 2)
    })

    // Trigger the BxSlider

    $('.slider').bxSlider({
        pager: false
    });

    // Smooth Scroll Links => Sections

    $(".navBar ul li a").each(function () {
        $(this).click(function () {
            $("html, body").animate({
                scrollTop: $("#" + $(this).data('value')).offset().top
            }, 1000)
        })
    })

    // My Auto Slider Code Self Invok Function :

    function autoSlider() {
        $(".slider2 .active").each(function () {

            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn(1000)
                    autoSlider()
                })
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active")
                    $(".slider2 div").eq(0).addClass("active").fadeIn(1000)
                    autoSlider()
                })
            }

        })
    }

    autoSlider()

    // Project Like click

    $(".heart").each(function (index) {
        $(this).click(function () {
            if ($(this).find("i").hasClass('far')) {
                $(this).find("i").removeClass('far').addClass('fas')
                $(this).find('strong').text(parseInt($(this).find('strong').text()) + 1)
            } else {
                $(this).find("i").removeClass('fas').addClass('far')
                $(this).find('strong').text(parseInt($(this).find('strong').text()) - 1)
            }
        })
    })

    // Galery Filtering Menu

    $(".portfolio button").each(function () {

        $(this).click(function () {
            $(this).addClass("active").siblings().removeClass("active")
        })

    })

    // Filtering By Plugin Mix It Up

    var mixer = mixitup('#container');

    // Trigger Nice Scroll

    $("html").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        cursorborder: "none"
    })







    })