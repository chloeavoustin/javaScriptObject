/**
 * Initialize the application when the DOM is ready
 */
$(document).ready(function() {
    $app.log('document', 'ready');
    $app.init();
});

/**
 * Slider Object
 *
 * @type {object}
 */
const sliderObject = {
    $element: null,
    $config: null,
    $container: null,
    $next: null,
    $prev: null,
};


/**
 * Application object
 *
 * @namespace
 */
const $app = {
    /**
     * Log something in console
     *
     * @param {*} context
     * @param {*} message
     */
    log: function(context, message) {
        if (this.config.debug) {
            console.log(context + ': ' + message);
        }
    },

    /**
     * Object manager for all application parameters
     */
    config: {
        debug: true,
        breakpoint: {
            tablette: 768,
            mobile: 480,
        },
    },

    /**
     * Control all initialize function of application components
     */
    init: function() {
        this.log('app', 'init');
        this.slider.init();
    },

    /**
     *  Object manager for all sliders
     */
    slider: {
        selectors: ['.home-slider', '.event_slider'],
        allSliders: [],

        /**
         * Initialize each slider
         */
        init: function() {
            $app.log('app.slider', 'init');
            for (let i = 0; i < this.selectors.length; i++) {
                let slider = this.selectors[i];
                if (slider.length > 0) {
                    $(slider).each(function(index, element) {
                        $app.log('app.slider.init', ' ____ New slider');
                        this.buildSlider(this.createSlider(index, element));
                    }.bind(this));
                }
            }
        },

        /**
         ** Set a slider instance
         *
         * @param {number} index
         * @param {object} element
         * @return {object}
         */
        createSlider: function(index, element) {
            $app.log('slider', 'createSlider');
            this.allSliders[index] = Object.create(sliderObject);
            const slider = this.allSliders[index];

            slider.$element = $(element);
            slider.$container = slider.$element.parent();
            slider.$next = slider.$container.find('.next');
            slider.$prev = slider.$container.find('.prev');

            this.configureSlider(slider);

            return slider;
        },

        /**
         * Build a slider
         * @param {object} slider
         */
        buildSlider: function(slider) {
            $app.log('app.slider', 'buildSlider');
            slider.$element.slick(slider.$config);

            this.nextSlide(slider);
            this.prevSlide(slider);
        },

        /**
         * Set global parameters for a slider instance
         * @param {object} slider
         */
        configureSlider: function(slider) {
            $app.log('app.slider', 'configureSlider');
            slider.$config = {
                slidesToShow: slider.$element.data('slidestoshow'),
                adaptiveHeight: slider.$element.data('adaptiveheight'),
                centerMode: slider.$element.data('centermode'),
                centerPadding: slider.$element.data('centerpadding') + 'px',
                dots: slider.$element.data('dots'),
                arrows: false,
                responsive: [
                    {
                        breakpoint: $app.config.breakpoint.tablette,
                        settings: {},
                    },
                    {
                        breakpoint: $app.config.breakpoint.mobile,
                        settings: {},
                    },
                ],
            };

            this.configureResponsiveSlider(slider);
        },

        /**
         * Set responsive parameters for a slider instance
         * @param {object} slider
         */
        configureResponsiveSlider: function(slider) {
            $app.log('app.slider', 'configureResponsiveSlider');
            if (slider.$element.data('slidestoshow') > 2) {
                slider.$config.responsive[0].settings.slidesToShow = 2;
                slider.$config.responsive[1].settings.slidesToShow = 1;
            }

            if (slider.$element.data('centerpadding') > 40) {
                slider.$config.responsive[0].settings.centerPadding = '40px';
            }

            if (slider.$element.data('centerpadding') > 20) {
                slider.$config.responsive[1].settings.centerPadding = '20px';
            }
        },

        /**
         * Go to next slide
         * @param {object} slider
         */
        nextSlide: function(slider) {
            $app.log('app.slider', 'nextSlide');
            slider.$next.click(function() {
                slider.$element.slick('slickNext');
            });
        },

        /**
         * Go to previous slide
         * @param {object} slider
         */
        prevSlide: function(slider) {
            $app.log('app.slider', 'prevSlide');
            slider.$prev.click(function() {
                slider.$element.slick('slickPrev');
            });
        },
    },
};
