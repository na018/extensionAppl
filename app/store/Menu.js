Ext.define('sencha2.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'sencha2.model.menu.Accordion',
        'sencha2.util.Util'
    ],
    model: 'sencha2.model.menu.Accordion',

    proxy: {
        type: 'ajax',
        url: 'php/menu/list.php',

        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function (proxy, response, operation) {
                sencha2.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});