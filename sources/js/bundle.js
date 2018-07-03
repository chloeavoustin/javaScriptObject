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
     *  Object manager for all sliders
     */
    slider: {
        selectors: ['.home-slider', '.event_slider'],
    },

    /**
     * Control all initialize function of application components
     */
    init: function() {
        this.log('app', 'init');
    },
};
