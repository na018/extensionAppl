Ext.define('sencha2.model.menu.TreeNode', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'text'},
        {name: 'conCls'},
        {name: 'className'},
        {name: 'parent_id', mapping: 'menu_id'}
    ]

});