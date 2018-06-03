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
 * @type {object}
 * @private
 */
const $app = {
    debug: true,

    /**
     * Log something in console
     *
     * @param {*} context
     * @param {*} message
     */
    log(context, message) {
        if (this.debug) {
            console.log(context + ': ' + message);
        }
    },

    /**
     * Object manager for all application parametters
     */
    config: {
        debug: true,
        breakpoint: {
            tablette: 768,
            mobile: 480,
        },
    },

    /**
     *  Object manager for all sliders
     */
    slider: {
        selectors: ['.home-slider', '.event_slider'],
        allSliders: [],

        /**
         * Display value for each slider
         */
        init() {
            $app.log('app.slider', 'init');
            for (let i = 0; i < this.selectors.length; i++) {
                let slider = this.selectors[i];
                if (slider.length > 0) {
                    $(slider).each((index, element) => {
                        $app.log('app.slider.init', ' ____ New slider');
                        this.buildSlider(this.createSlider(index, element));
                    });
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
        createSlider(index, element) {
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
        buildSlider(slider) {
            $app.log('app.slider', 'buildSlider');
            slider.$element.slick(slider.$config);

            this.controlSlider(slider.$element, slider.$next, 'slickNext');
            this.controlSlider(slider.$element, slider.$prev, 'slickPrev');
        },

        /**
         * Set global parameters for a slider instance
         * @param {object} slider
         */
        configureSlider(slider) {
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
        configureResponsiveSlider(slider) {
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
         * Make a slider action when user click on button
         *
         * @param {object} element
         * @param {object} button
         * @param {string} action
         */
        controlSlider(element, button, action) {
            $app.log('slider', 'controlSlider');
            button.click(() => {
                element.slick(action);
            });
        },

    },

    /**
     * Control all initialize function of application components
     */
    init() {
        this.log('app', 'init');
        this.slider.init();
    },
};

/**
 * Initialize the application when the DOM is ready
 */
$(document).ready(function() {
    $app.log('document', 'ready');
    $app.init();
});
