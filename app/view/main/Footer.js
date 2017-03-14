/**
 * Created by nadin-katrin on 10.03.17.
 */
Ext.define('sencha2.view.main.Footer',{
    extend: 'Ext.container.Container',
    xtype: 'appfooter',

    requires: [
        'Ext.layout.container.Center'
    ],

    cls: 'app-footer',

    height: 30,

    layout: 'center',

    items:[
        {
            xtype: 'component',
            width: 350,
            componentCls: 'app-footer-title',
            bind: {
                html: '{footer}'
            }
        }
    ]

});