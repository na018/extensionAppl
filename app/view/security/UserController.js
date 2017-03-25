Ext.define('sencha2.view.security.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',

    alias: 'controller.user',

    requires: [
        'sencha2.util.Util',
        'sencha2.view.security.UserForm'
    ],

    onAdd: function(button, e, options){this.createDialog(null)},

    onEdit: function(button, e, options){

        var me = this,
            records = me.getRecordsSelected();

        if(records[0]){ //if record was selected create window passing the record
            me.createDialog(records[0]);
        }
    },

    createDialog: function(record){

        var me = this,
            view = me.getView(); //reference to the User View class reference

        me.dialog = view.add({
            xtype: 'user-form',  //create userform window
            viewModel: {         //details to the window's viewmodel as a child ViewModel
                data: {
                    title: record ? 'Edit: ' + record.get('name') : 'Add User' //predefined field
                },
                links: { //provides a way to assign a simple name to a more complex bind
                    currentUser: record || { //if existing record --> uses a copy
                        type: 'User',        // : if not it creates a new phantom record
                        create: true
                    }
                }
            }
        });

        me.dialog.show(); //#7
    },

    getRecordsSelected: function(){
        var grid = this.lookupReference('usersGrid'); //reference to usergrid
        return grid.getSelection(); //get selected rows --> returns array of the selected records
    },

    onDelete: function(button, e, options){},

    onSave: function(button, e, options){

        var me = this,
            form = me.lookupReference('form'); //get the form reference

        if (form && form.isValid()) { //verify that the form is valid
            form.submit({     //#3
                clientValidation: true, //rules of the model validations
                url: 'php/user/save.php', //submit the form to the url
                scope: me,                //#6
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            });
        }
    },

    onSaveSuccess: function(form, action) {},

    onSaveFailure: function(form, action) {},

    onCancel: function(button, e, options){
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },

    refresh: function(button, e, options){},

    onFileFieldChange: function(fileField, value, options) {}
});