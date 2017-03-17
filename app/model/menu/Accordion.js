Ext.define('sencha2.model.menu.Accordion',{
    extend: 'Ext.data.Model',

    requires: [
        'sencha2.model.menu.TreeNode'
    ],

    fields:[
        {name: 'id',type:'int'},
        {name: 'text'},
        {name:'iconCls'}
    ],
    hasMany: {
        model: 'sencha2.model.menu.TreeNode',
        foreignKey: 'parent_id',
        name: 'items'
    }
});