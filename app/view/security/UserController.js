Ext.define('sencha2.view.security.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',

    alias: 'controller.user',

    requires: [
        'sencha2.util.Util'
    ],

    onAdd: function(button, e, options){},

    onEdit: function(button, e, options){},

    createDialog: function(record){},

    getRecordsSelected: function(){},

    onDelete: function(button, e, options){},

    onSave: function(button, e, options){},

    onSaveSuccess: function(form, action) {},

    onSaveFailure: function(form, action) {},

    onCancel: function(button, e, options){},

    refresh: function(button, e, options){},

    onFileFieldChange: function(fileField, value, options) {}
});