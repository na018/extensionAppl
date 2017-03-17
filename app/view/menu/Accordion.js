Ext.define('sencha2.view.menu.Accordion', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainmenu',

    requires: [
        'Ext.layout.container.Accordion'
    ],

    width: 250,
    layout: {
        type: 'accordion',
        multi: true
    },
    collapsible: true,
    split: true,
    iconCls: 'fa fa-sitemap fa-lg',
    title: 'Menu'
});