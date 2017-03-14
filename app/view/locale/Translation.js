Ext.define('sencha2.view.locale.Translation', {
    extend: 'Ext.button.Split',
    xtype: 'translation',

    requires: [
        'Ext.menu.Item',
        'Ext.menu.Menu',
        'sencha2.view.locale.TranslationController'
    ],
    controller: 'translation',

    menu: {
        xtype:'menu',
        defaults:{
            listeners:{click:'onMenuItemClick'}
        },
        items: [
            {
                xtype: 'menuitem',
                iconCls: 'en',
                text: 'English'
            }, {
                xtype: 'menuitem',
                iconCls: 'es',
                text: 'Español'
            }, {
                xtype: 'menuitem',
                iconCls: 'pt_BR',
                text: 'Português'
            },
        ]
    }
});