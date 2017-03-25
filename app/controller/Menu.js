translations={    menu1 : 'Security',
    menu11 : 'Groups and Permissions',
    menu12 : 'Users',}
Ext.define('sencha2.controller.Menu', {
    extend: 'Ext.app.Controller',

    requires: [
        'sencha2.view.menu.Tree',
        'sencha2.view.locale.Translation'
    ],
    stores: ['Menu'],
    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainpanel'
        }
    ],

    init: function (application) {

        this.control({
            "menutree": {
                itemclick: this.onTreePanelItemClick
            },
            "mainmenu": {
                render: this.renderDynamicMenu
            }
        });
    },
    renderDynamicMenu: function (view, options) {
        var dynamicMenus = [];

        view.body.mask('Loading Menus... Please wait...');

        this.getMenuStore().load(function (records, op, success) {
            console.log(this);

            Ext.each(records, function (root) {

                var menu = Ext.create('sencha2.view.menu.Tree', {
                    title: 'tree',
                    iconCls: root.get('iconCls')
                });

                var treeNodeStore = root.items(),
                    nodes = [],
                    item;

                for (var i = 0; i < treeNodeStore.getCount(); i++) {
                    item = treeNodeStore.getAt(i);

                    nodes.push({
                        text: translations[item.get('text')],
                        leaf: true,
                        glyph: item.get('iconCls'),
                        id: item.get('id'),
                        className: item.get('className')
                    });
                }
                menu.getRootNode().appendChild(nodes);
                dynamicMenus.push(menu);
            });
            view.add(dynamicMenus);
            view.body.unmask();
        });
    },
    onTreePanelItemClick: function (view, record, item, index, event, options) {
        var mainPanel = this.getMainPanel();

        var newTab = mainPanel.items.findBy(
            function (tab){
                return tab.title === record.get('text');
            });

        if (!newTab){ // #4
            newTab = mainPanel.add({
                xtype: record.get('className'),
                closable: true,
                glyph: record.get('glyph'),
                title: record.get('text')
            });
        }
        mainPanel.setActiveTab(newTab);
    }
});