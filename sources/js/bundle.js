/**
 * Initialize the application when the DOM is ready
 */
$(document).ready(function() {
    $app.log('document', 'ready');
    $app.init();
});

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
                        this.buildSlider(element);
                    }.bind(this));
                }
            }
        },

        /**
         * Build a slider
         * @param {object} element
         */
        buildSlider: function(element) {
            $app.log('app.slider', 'buildSlider');
            $(element).slick(this.configureSlider(element));

            this.prevSlide(element);
            this.nextSlide(element);
        },

        /**
         * Set global parameters for a slider instance
         * @param {object} element
         *
         * @return {object} config
         */
        configureSlider: function(element) {
            $app.log('app.slider', 'configureSlider');
            const config = {
                slidesToShow: $(element).data('slidestoshow'),
                adaptiveHeight: $(element).data('adaptiveheight'),
                centerMode: $(element).data('centermode'),
                centerPadding: $(element).data('centerpadding') + 'px',
                dots: $(element).data('dots'),
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

            return this.configureResponsiveSlider(element, config);
        },

        /**
         * Set responsive parameters for a slider instance
         * @param {object} element
         * @param {object} config
         *
         * @return {object} config
         */
        configureResponsiveSlider: function(element, config) {
            $app.log('app.slider', 'configureResponsiveSlider');
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
        },

        /**
         * Go to next slide
         * @param {object} element
         */
        nextSlide: function(element) {
            $app.log('app.slider', 'nextSlide');
            const slider = $(element);
            const container = slider.parent();
            const next = container.find('.next');

            next.click(function() {
                slider.slick('slickNext');
            });
        },

        /**
         * Go to previous slide
         * @param {object} element
         */
        prevSlide: function(element) {
            $app.log('app.slider', 'prevSlide');
            const slider = $(element);
            const container = slider.parent();
            const prev = container.find('.prev');

            prev.click(function() {
                slider.slick('slickPrev');
            });
        },
    },
};
