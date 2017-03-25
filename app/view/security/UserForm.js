var btns={
    add: 'xf067',
    edit: 'xf040',
    destroy: 'xf1f8',
    save: 'xf00c',
    cancel: 'xf0e2'
};
Ext.define('sencha2.view.security.UserForm',{
    extend: 'Ext.window.Window',
    alias: 'widget.user-form',

    height: 270,
    width: 600,

    requires: [
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.File',
        'Ext.form.field.Hidden',
        'Ext.form.field.Text',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.Fit',
        'Ext.layout.container.HBox',
        'sencha2.util.Glyphs',
        'sencha2.util.Util'
    ],

    layout: {
        type: 'fit'
    },

    bind: {
        title: '{title}' //data binding to automatically set the title of the window
    },

    closable: false,
    modal: true,

    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 5,
            modelValidation: true, //used for validation
            layout: {
                type: 'hbox',      //vertical alignment.
                align: 'stretch'        //each element fills full space
            },
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,                   //cause the form is using the hbox layout, the space must be specified
                    title: 'User Information',
                    layout: 'anchor',          //anchor items relative to the container's dimensions
                    defaults: {
                        afterLabelTextTpl: sencha2.util.Util.required, //add a red astrix for required items
                        anchor: '100%',                              //may be specified for each item
                        xtype: 'textfield',
                        msgTarget: 'side',
                        labelWidth: 75
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: 'id',
                            fieldLabel: 'Label',
                            bind : '{currentUser.id}'
                        },
                        {
                            fieldLabel: 'Username',
                            name: 'userName',
                            bind : '{currentUser.userName}'
                        },
                        {
                            fieldLabel: 'Name',
                            name: 'name',
                            bind : '{currentUser.name}'
                        },
                        {
                            fieldLabel: 'Email',
                            name: 'email',
                            bind : '{currentUser.email}'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: 'Group',
                            displayField: 'name',  //displayed to the user
                            valueField: 'id',      //displayed as internal value
                            queryMode: 'local',    //
                            forceSelection: true,  //forcing the user to select a value from the combobox
                            editable: false,       //not allowing the user to write anything on it (as writing is autocomplete)
                            name: 'groups_id',
                            bind: {
                                value: '{currentUser.groups_id}', //refers to gourps_id foreign key
                                store: '{groups}',                //bind store of the combobox with store groups of the viewmodel
                                selection: '{currentUser.group}'  //referrs to the group selected
                            }
                        },
                        {
                            xtype: 'filefield',
                            fieldLabel: 'Photo',
                            name: 'picture',
                            buttonText: 'Select Photo...',
                            afterLabelTextTpl: '',          //this field is not mandatory so no red asterisk
                            listeners: {
                                change: 'onFileFieldChange'
                            }
                        }

                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Photo',
                    width: 170,
                    items: [
                        {
                            xtype: 'image',
                            reference: 'userPicture', //Ext.Image helps to create & render images
                            height: 150,
                            width: 150,
                            bind:{
                                src: 'resources/profileImages/{currentUser.picture}' //creates image tag with src
                            }
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            layout: {
                                pack: 'end', //organize the buttons to the right toolbar
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Save',
                                    glyph: btns.save /*sencha2.util.Glyphs.getGlyph('save')*/,
                                    listeners: {
                                        click: 'onSave'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'Cancel',
                                    glyph: btns.cancel /*sencha2.util.Glyphs.getGlyph('cancel')*/,
                                    listeners: {
                                        click: 'onCancel'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});



