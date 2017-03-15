
Ext.define('sencha2.view.item.Foo',{

    xtype: 'itemfoo',
    extend: 'Ext.container.Viewport',


    requires: [
        'sencha2.view.item.FooController',
        'sencha2.view.item.FooModel'
    ],

    controller: 'item-foo',
    viewModel: {
        type: 'item-foo'
    },

    html: 'Hello, World!!',
    handler: function () {
        alert('foo View is called');
    }

});
