Ext.define('sencha2.view.security.UserModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.user',

    requires: [
        'sencha2.model.security.User'
    ],

    stores: {
        users: {
            model: 'sencha2.model.security.User',
            autoLoad: true
        },
        groups:{model:'sencha2.model.security.Group',autoLoad:true}
    }
});
