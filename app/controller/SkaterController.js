Ext.define('sencha2.controller.SkaterController', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'viewport': {
                render: function() {
                    Ext.getStore('SkaterStore').load();
                }
            }
        });
    }
})
