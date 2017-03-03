Ext.define('sencha2.model.Skater', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'birthday', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'coach', type: 'auto' },
        { name: 'image', type: 'auto' },
        { name: 'info', type: 'auto' }

    ]
});
