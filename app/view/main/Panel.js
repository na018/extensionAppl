Ext.define('sencha2.view.main.Panel',{
   extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',

    requires: [
        'Ext.panel.Panel'
    ],

    activeTab:0,

    items: [{
        xtype:'panel',
        closable: false,
        iconCs: 'fa fa-home fa-lg tabIcon',
        title: 'Home'
    }


    ]
});
