Ext.define('sencha2.view.skater.Item', {
    extend: 'Ext.grid.Panel',
    xtype: 'sencha2-ItemView',

    requires: [
        'Ext.button.Button',
        'Ext.grid.column.Date',
        'Ext.grid.column.RowNumberer',
        'Ext.window.Window',
        'sencha2.store.SkaterStore',
        'sencha2.view.skater.ItemController',
        'sencha2.view.skater.ItemModel'
    ],


    controller: 'skater-item',
    title: 'Item Panel',
    tbar: [{
        xtype: 'button',
        text: 'Neuen Skater anlegen',
        handler: function (button) {
            Ext.create('Ext.window.Window', {
                title: 'Neuen Skater anlegen',
                modal: true,
                layout: 'fit',
                width: 400,
                height: 400,
                items: [{
                    xtype: 'form',
                    bodyPadding: 10,
                    id: 'formular',
                    layout: 'anchor',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        anchor: '100%',
                        name: 'name'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Geburtstag',
                        anchor: '100%',
                        submitFormat: 'Y-m-d',
                        name: 'birthday',
                        format: 'd.m.Y'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Coach',
                        anchor: '100%',
                        name: 'coach'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'image',
                        anchor: '100%',
                        name: 'image'
                    }, {
                        xtype: 'htmleditor',
                        fieldLabel: 'info',
                        anchor: '100%',
                        name: 'info'
                    }]
                }],

                dockedItems: [
                    {
                        dock: 'bottom',
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            pack: 'end'
                        },

                        items: [{
                            xtype: 'button',
                            text: 'Speichern',
                            scale: 'medium',
                            handler: function (button) {
                                button.up('window').down('form').getForm().submit({
                                    url: 'php/dataBase/insert/insertSkater.php',
                                    success: function (response) {
                                        Ext.getStore('SkaterStore').load();
                                        button.up('window').close();
                                    },
                                    failure: function (form, action) {
                                        action.result.errorMessage = 'Something went wrong';
                                        Ext.Msg.alert("Load failed", action.result.errorMessage);
                                    }
                                });
                            }
                        }]
                    }
                ]
            }).show();
        }
    }],
    store: 'SkaterStore',
    viewConfig: {
        getRowClass: function (record) {
            if (Ext.Date.format(record.get('birthday'), 'Y') > 2016)
                return 'rowgreen';
        }
    },
    columns: [{
        xtype: 'rownumberer'
    },
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Birthday',
            xtype: 'datecolumn',
            format: 'd.m.Y',
            dataIndex: 'birthday'
        },
        {
            text: 'Coach',
            dataIndex: 'coach'
        },
        {
            text: 'Image',
            dataIndex: 'image',
            renderer: function (value) {
                return '<img src="' + value + '" />';
            }
        },
        {
            text: 'Info',
            dataIndex: 'info',
            renderer: function (value, meta) {
                meta.tdStyle = 'background-color: yellow';
                return value;
            }
        }

    ]

});
