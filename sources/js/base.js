'use strict';

/**
 * Component app to make all interaction.
 *
 * @namespace app
 */
const $base = {
    debug: false,

    /**
     * Log something in console
     *
     * @param {string} context
     * @param {*} message
     */
    log(context, message) {
        if (this.debug) {
            console.log(context + ': ' + message);
        }
    },

    selectors: {
        $body: null,
    },

    /**
     * Component to manage fullPage.js
     */
    screen: {
        selectors: {
            $main: null,
            $menuContainer: null,
        },

        /**
         * Initialize argument for fullPage.js
         */
        args: {
            sectionSelector: '.screen',
            responsiveWidth: 1200,
            verticalCentered: false,
        },

        /**
         * Initialize screen
         */
        init() {
            $base.log('fullPage', 'init');
            this.selectors.$main = $('#fullPage');
            this.selectors.$menuContainer = $('.menu');
            this.selectors.$main.fullpage(this.args);
        },
    },

    /**
     * Initialize app
     */
    init() {
        $base.log('app', 'init');

        $base.selectors.$body = $('body');

        if ($base.selectors.$body.hasClass('workshop-slide')) {
            this.screen.init();
        }
    },
};

/**
 * Run init function of app
 * when the document is ready
 */
$(document).ready(function() {
    $base.init();
});
