Ext.define('sencha2.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',        // viewmodel + type you want to assign

    data: {
        name: 'sencha2',
        appName: 'DVD Rental Store',
        appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">',
        footer: 'Mastering ExtJS book - Loiane Groner - http://packtpub.com'
    }

});