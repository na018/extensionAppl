/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('sencha2.view.main.Main', {
    extend: 'Ext.container.Container',          //simplest container in EXT API
    plugin: 'viewport',
    // extend: 'Ext.container.Viewport',
    requires: [
        'Ext.container.Container',
        'sencha2.view.main.Footer',
        'sencha2.view.main.Panel',
        'sencha2.view.main.Header',
        'sencha2.view.main.MainController',
        'sencha2.view.main.MainModel'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        region: 'center',
        xtype: 'mainpanel'
    }, {
        region: 'north',
        xtpye: 'appheader',
        html:'<div class="blubb">Text Here</div>'
    }, {
        region: 'south',
        xtype: 'appfooter'
    }, {
        region: 'west',
        xtype: 'container',
        width: 200,
        split: true
    }]
});
