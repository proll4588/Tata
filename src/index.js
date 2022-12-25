import "./styles/style.scss";

// import "./js/jquery-3.6.0.min.js";
import "./js/slick.min.js";
import $ from "jquery";

// $(document).ready(function () {
//     $(".slider").slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: false,
//         variableWidth: true,
//         outerEdgeLimit: true,
//     });
// });

$(document).ready(function () {
    $(".slider").slick({
        centerMode: true,
        // centerPadding: "100px",
        // slidesToShow: 1,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
});
