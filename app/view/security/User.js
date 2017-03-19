var btns={
    add: 'xf067',
    edit: 'xf040',
    destroy: 'xf1f8',
    save: 'xf00c',
    cancel: 'xf0e2'
};
Ext.define('sencha2.view.security.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.VBox',
        'sencha2.view.security.UsersGrid',
        'sencha2.view.security.UserModel',
        'sencha2.view.security.UserController',
        'sencha2.util.Glyphs'

    ],
    controller: 'user',
    viewModel: {
        type: 'user'
    },
    frame: true,

    layout: {
        type: 'vbox',           //VBox layout aligns child items vertically, divides space using flex config
                                // alignment may be may be defined --> stretch, end, middle, begin, stretchmax
        align: 'stretch'
    },
    items: [
        {
            xtype: 'users-grid',
            flex: 1
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    glyph: btns.add,/*sencha2.util.Glyphs.getGlyph('add')*/
                    listeners: {
                        click: 'onAdd'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    glyph: btns.edit,/*sencha2.util.Glyphs.getGlyph('edit')*/

                    listeners: {
                        click: 'onEdit'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    glyph: btns.destroy,/*sencha2.util.Glyphs.getGlyph('destroy')*/
                    listeners: {
                        click: 'onDelete'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                }
            ]
        }
    ],

});