Ext.define('sencha2.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'email', type: 'auto' }

    ]
});
