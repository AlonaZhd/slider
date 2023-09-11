document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        let slider = $(".slider");
        let slickDots;

        slider.slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            swipe: true,
            draggable: true,
            // autoplay: true,
            speed: 2500,
            autoplaySpeed: 3000,
            // pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    // ============================
});
