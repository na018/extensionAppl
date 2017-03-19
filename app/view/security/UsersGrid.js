Ext.define('sencha2.view.security.UsersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.users-grid', //alternative to xtype  --> xtype: user-grid   --widgets for components as alias  ---plugins: plugin

    reference: 'usersGrid',         //reference to refer to this component later in the ViewModel
    bind: '{users}',

    columns: [          //declaring a grid: 2 mandatory configs need to be specified: columns config & store config
                            // ext js 5 introduced ViewModel --> because of the data binding concept we can declare a store-less Grid and configure this later
        {
            width: 150,
            dataIndex: 'userName',          //here the data comes from. matches the Model field that it represents
            text: 'Username'
        },
        {
            width: 200,
            dataIndex: 'name',
            flex: 1,            //use all the available space
            text: 'Name'
        },
        {
            width: 250,
            dataIndex: 'email',
            text: 'Email'
        },
        {
            width: 150,
            dataIndex: 'groups_id',         //renders groups_id foreign key from groups table
            text: 'Group'
        }
    ]
});