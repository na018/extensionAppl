Ext.define('sencha2.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'sencha2.util.Util'
    ],

    alias: 'controller.main',

    onLogout: function(button, e, options){
        var me=this;
        Ext.Ajax.request({
            url: 'php/security/logout.php',
            scope: me,
            success: 'onLogoutSuccess',
            failure: 'onLogoutFailure'
        });
    },
    onLogoutSuccess: function(conn,response, options, eOpts){
        var result=sencha2.util.Util.decodeJSON(conn.responseText);

        if(result.success){
            this.getView().destroy();
            window.location.reload();
        }else{
            sencha2.util.Util.showErrorMsg(result.msg);
        }
    },
    onLogoutFailure: function(conn, response, options, eOpts){    sencha2.util.Util.showErrorMsg(conn.responseText);},
});
