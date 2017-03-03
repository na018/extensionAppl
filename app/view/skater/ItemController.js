Ext.define('sencha2.view.skater.ItemController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.skater-item',
    init: function () {
        this.control({
            "sencha2-ItemView": {
                select: function(){
                    Ext.Msg.alert('Hello from controller');
                }
            }
        });
    }

});
