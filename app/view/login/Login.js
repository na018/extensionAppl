Ext.define('sencha2.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login-dialog',      // alias: 'widget.login-dialog'   --> same result  (own preference)     -->returns Reference to component
                                // instantiate eg.: Ext.create('sencha2.view.login.Login'); or      -->returns Reference to component
                                // using alias: Ext.create('widget.login-dialog'); or      -->returns Reference to component
                                // Ext.widget('login-dialog'); short for Ext.ClassManager.instantiateByAlias: 'login-dialog'
                                // using xtype as item of another component: items:[ {xtype:'login-dialog'} ];
                                // new sencha2.view.login.Login();     -->returns Reference to component    --> deprecated


    requires: [
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.layout.container.Fit',
        'Ext.toolbar.Fill',
        'sencha2.view.login.LoginController'

        // 'sencha2.view.login.LoginModel'
    ],
    controller:'login',

    autoShow: true,
    height: 370,
    width: 260,
    layout: {
        type: 'fit'
    },
    iconCls: 'fa fa-key fa-lg',
    title: 'Login',
    closeAction: 'hide',
    closable: false,
    draggable: false,
    resizable: false,

    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 60,
            allowBlank: false,
            vtype: 'alphanum',
            minLength: 3,
            msgTarget: 'under',
            listeners:{
                specialKey: 'onTextFieldSpecialKey'
            }
        },
        items: [
            {
                name: 'user',
                fieldLabel: 'User',
                maxLength: 25
            },
            {
                id:'password',
                inputType: 'password',
                name: 'password',
                fieldLabel: 'Password',
                maxLength: 15,
                vtype: 'customPass',
                msTarget: 'side',
                enableKeyEvents: true,
                listeners: {
                    keypress: 'onTextFieldKeyPress'
                }

            }
        ],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    iconCls: 'fa fa-times fa-lg',
                    text: 'Cancel',
                    listeners: {click:'onButtonClickCancel'}
                },
                {
                    xtype: 'button',
                    formBind: true,
                    iconCls: 'fa fa-sign-in fa-lg',
                    text: 'submit',
                    listeners: {click: 'onButtonClickSubmit'}
                }

            ]
        }]
    }]



    //
    // controller: 'login-login',
    // viewModel: {
    //     type: 'login-login'
    // },
    //
    // html: 'Hello, World!!'
});
