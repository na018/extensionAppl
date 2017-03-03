
Ext.define('sencha2.view.item.Foo',{
    extend: 'Ext.panel.Panel',
    xtype: 'itemfoo',

    requires: [
        'sencha2.view.item.FooController',
        'sencha2.view.item.FooModel'
    ],

    controller: 'item-foo',
    viewModel: {
        type: 'item-foo'
    },

    html: 'Hello, World!!'
});
