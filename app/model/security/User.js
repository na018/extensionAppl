Ext.define('sencha2.model.security.User', {
    extend: 'sencha2.model.security.Base',

    fields: [
        {name: 'name'},
        {name: 'userName'},
        {name: 'email'},
        {name: 'picture'},
        {name: 'groups_id', type: 'int'}
    ]
});