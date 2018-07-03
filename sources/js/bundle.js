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
         * Display value for each slider
         */
        init: function() {
            $app.log('app.slider', 'init');
            for (let i = 0; i < this.selectors.length; i++) {
                let slider = this.selectors[i];
                if (slider.length > 0) {
                    $(slider).each(function(index, element) {
                        $app.log('app.slider.init', ' ____ New slider');
                        $app.log('app.slider.init', index);
                        $app.log('app.slider.init', element);
                    });
                }
            }
        },
    },
};
