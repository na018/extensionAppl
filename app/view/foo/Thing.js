
Ext.define('sencha2.view.foo.Thing',{
    extend: 'Ext.Container',
    xtype: 'basic-panels',
    width: 660,
    requires: [
        'Ext.layout.container.Table'
    ],

    layout: {
        type: 'table',
        columns: 3,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        height: 280,
        bodyPadding: 10
    },

    initComponent: function () {
        this.items = [
            {
                html: KitchenSink.DummyText.mediumText
            },
            {
                title: 'Title',
                html: KitchenSink.DummyText.mediumText
            },
            {
                title: 'Collapsible',
                collapsible: true,
                html: KitchenSink.DummyText.mediumText
            },
            {
                title: 'Tools',
                collapsed: true,
                collapsible: true,
                width: 640,
                html: KitchenSink.DummyText.mediumText,
                tools: [
                    { type:'pin' },
                    { type:'refresh' },
                    { type:'search' },
                    { type:'save' }
                ],
                colspan: 3
            }
        ];

        this.callParent();
    }
});
