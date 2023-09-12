$(document).ready(function () {
    let slider = $(".slider");
    let isAutoplayPaused = false;

    slider.on("init", function (event, slick) {
        const slickDots = document.querySelector(".slick-dots");

        const createElement = (tag, className) => {
            const elem = document.createElement(tag);
            if (className) {
                elem.className = className;
            }
            return elem;
        };

        const playButton = createElement("span", "play-button");
        const firstSlickActive = slickDots.querySelector(".slick-active");
        slickDots.insertBefore(playButton, firstSlickActive);

        playButton.addEventListener("click", function () {
            if (isAutoplayPaused) {
                slider.slick("slickPlay");
                slider.slick("slickSetOption", "infinite", true);
                isAutoplayPaused = false;
            } else {
                slider.slick("slickPause");
                slider.slick("slickSetOption", "infinite", false);
                isAutoplayPaused = true;
            }
        });
    });

    slider.slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        swipe: true,
        draggable: true,
        autoplay: true,
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
