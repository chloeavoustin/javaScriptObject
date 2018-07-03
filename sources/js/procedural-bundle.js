const sliders = ['.home-slider', '.event_slider'];
const breakpointTablette = 768;
const breakpointMobile = 480;

/**
 * Initialize slider when the DOM is ready
 */
$(document).ready(function() {
    for (let i = 0; i < sliders.length; i++) {
        if ($(sliders[i]).length > 0) {
            $(sliders[i]).each(function() {
                buildSlider(this);
            });
        }
    }
});

/**
 * Build a slider
 * @param {object} element
 */
function buildSlider(element) {
    $(element).slick(configureSlider(element));

    nextSlide(element);
    prevSlide(element);
}

/**
 * Set global parameters for a slider instance
 * @param {object} element
 *
 * @return {object} config
 */
function configureSlider(element) {
    const config = {
        slidesToShow: $(element).data('slidestoshow'),
        adaptiveHeight: $(element).data('adaptiveheight'),
        centerMode: $(element).data('centermode'),
        centerPadding: $(element).data('centerpadding') + 'px',
        dots: $(element).data('dots'),
        arrows: false,
        responsive: [
            {
                breakpoint: breakpointTablette,
                settings: {},
            },
            {
                breakpoint: breakpointMobile,
                settings: {},
            },
        ],
    };

    return configureResponsiveSlider(element, config);
}

/**
 * Set responsive parameters for a slider instance
 * @param {object} element
 * @param {object} config
 *
 * @return {object} config
 */
function configureResponsiveSlider(element, config) {
    if ($(element).data('slidestoshow') > 2) {
        config.responsive[0].settings.slidesToShow = 2;
        config.responsive[1].settings.slidesToShow = 1;
    }

    if ($(element).data('centerpadding') > 40) {
        config.responsive[0].settings.centerPadding = '40px';
    }

    if ($(element).data('centerpadding') > 20) {
        config.responsive[1].settings.centerPadding = '20px';
    }

    return config;
}

/**
 * Go to next slide
 * @param {object} element
 */
function nextSlide(element) {
    const slider = $(element);
    const container = slider.parent();
    const next = container.find('.next');

    next.click(function() {
        slider.slick('slickNext');
    });
}

/**
 * Go to previous slide
 * @param {object} element
 */
function prevSlide(element) {
    const slider = $(element);
    const container = slider.parent();
    const prev = container.find('.prev');

    prev.click(function() {
        slider.slick('slickPrev');
    });
}
