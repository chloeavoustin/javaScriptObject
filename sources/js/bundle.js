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
    log: function(context, message) {
        if (this.debug) {
            console.log(context + ': ' + message);
        }
    },

    /**
     * Control all initialize function of application components
     */
    init: function() {
        this.log('app', 'init');
    },
};
