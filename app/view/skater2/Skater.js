
Ext.define('sencha2.view.skater2.Skater',{
    extend: 'Ext.panel.Panel',

    requires: [
        'sencha2.view.skater2.SkaterController',
        'sencha2.view.skater2.SkaterModel'
    ],

    controller: 'skater2-skater',
    viewModel: {
        type: 'skater2-skater'
    },

    html: 'Hello, World!!'
});
