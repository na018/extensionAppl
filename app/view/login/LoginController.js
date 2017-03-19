Ext.define('sencha2.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',          //always lowercase

    requires: [
        'Ext.form.action.Action',
        'sencha2.util.SessionMonitor',
        'sencha2.util.Util',
        'sencha2.view.login.CapsLockTooltip',
        'sencha2.view.main.Main'
    ],

    onButtonClickCancel: function (button, e, options) {
        this.lookupReference('form').reset();
    },
    onButtonClickSubmit: function (button, e, options) {
        var me = this;
        if (me.lookupReference('form').isValid()) {
            me.doLogin();
        }
    },
    doLogin: function () {
        var me = this, form = me.lookupReference('form');
        me.getView().mask('Authenticating... Please wait...');

        form.submit({
            clientValidation: true,
            url: 'php/security/login.php',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
    },
    onTextFieldSpecialKey: function (field, e, options) {
        if(e.getKey()===e.ENTER){
            this.doLogin();
            console.log('enter pressed');
        }
        console.log('key pressed');
    },
    onTextFieldKeyPress: function(field, e, options){

        console.log('onTextFieldKeyPress');

        var charCode = e.getCharCode(),
            me = this;
        if(e.getKey()===e.ENTER){
            this.doLogin();
        }

        if((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)){

            if(me.capslockTooltip === undefined){
                me.capslockTooltip = Ext.widget('capslocktooltip');
            }

            me.capslockTooltip.show(); //#5

        } else {

            if(me.capslockTooltip !== undefined){ //#6
                me.capslockTooltip.hide();        //#7
            }
        }
    },
    onLoginFailure: function(form, action) {

        var result = Ext.JSON.decode(action.response.responseText, true); //if exception on decode, true silences this one

        switch (action.failureType){
            case Ext.form.action.Action.CLIENT_INVALID:
                sencha2.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
                break;
            case  Ext.form.action.Action.CONNECT_FAILURE:
                sencha2.util.Util.showErrorMsg(action.response.responseText);
                break;
            case Ext.form.action.Action.SERVER_INVALID:
                sencha2.util.Util.showErrorMsg(result.msg);
        }
        /*
         if (!result){
         result = {};
         result.success = false;
         result.msg = action.response.responseText;
         }

         switch (action.failureType) {
         case Ext.form.action.Action.CLIENT_INVALID:  //#5
         Ext.Msg.show({
         title:'Error!',
         msg: 'Form fields may not be submitted with invalid values',
         icon: Ext.Msg.ERROR,
         buttons: Ext.Msg.OK
         });
         break;
         case Ext.form.action.Action.CONNECT_FAILURE:  //#6
         Ext.Msg.show({
         title:'Error!',
         msg: 'Form fields may not be submitted with invalid values',
         icon: Ext.Msg.ERROR,
         buttons: Ext.Msg.OK
         });
         break;
         case Ext.form.action.Action.SERVER_INVALID:  //#7
         Ext.Msg.show({
         title:'Error!',
         msg: result.msg, //#8
         icon: Ext.Msg.ERROR,
         buttons: Ext.Msg.OK
         });
         }*/
    },
    onLoginSuccess: function (form, action) {
        this.getView().unmask();
        this.getView().close();
        Ext.create('sencha2.view.main.Main');
        sencha2.util.SessionMonitor.start();
    }

});
