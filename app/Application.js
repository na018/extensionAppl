function loadLocale(){
    var extJsFile = Ext.util.Format.format("ext/packages/ext-locale/build/ext-locale-{0}.js", lang);
    Ext.Loader.loadScript({url: extJsFile});

    var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en',
        file = Ext.util.Format.format("resources/locale/{0}.js", lang);

    Ext.Loader.loadScript({url: file, onError: function(){
        alert('Error loading locale file. Please contact system administrator.');
    }});
}
/*function loadLocale(){

    var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en',
        //file = Ext.util.Format.format("resources/locale/{0}.js", lang),
        extJsFile = Ext.util.Format.format("ext/packages/ext-locale/build/ext-locale-{0}.js", lang);

    /!*Ext.Loader.loadScript({url: file, onError: function(){
     alert('Error loading locale file. Please contact system administrator.');
     }});*!/
    Ext.Loader.loadScript({url: extJsFile});
}*/

loadLocale();

Ext.define('sencha2.Application', {
    extend: 'Ext.app.Application',

    glyphFontFamily: 'FontAwesome',

    requires: [
        'Ext.container.Viewport',
        'Ext.dom.Helper',
        'Ext.layout.container.Border',
        'Ext.tip.QuickTipManager',
        'Ext.util.DelayedTask',
        'sencha2.overrides.tree.ColumnOverride'
    ],

    name: 'sencha2',

    views: [
        // 'skater.Item',
        // 'sencha2.view.item.Foo'
        'login.Login'
    ],
    controllers: [
        'Menu'
        // 'SkaterController'
    ],

    stores: [
        // 'SkaterStore'
    ],

    launch: function () {
        var me = this;
        Ext.tip.QuickTipManager.init();     //alternative:  enableQuickTips: true

        var task = new Ext.util.DelayedTask(function () {

            //Fade out the body mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            //Fade out the icon and message
            me.splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function (el, startTime, eOpts) {
                        Ext.widget('login-dialog');
                        /*               Ext.create('Ext.container.Viewport',{
                         layout:{
                         type:'border'
                         },
                         items:[
                         {
                         xtype: 'sencha2-ItemView',
                         flex:1,
                         region: 'center'
                         },
                         {
                         xtype: 'itemfoo',
                         flex: 0.5,
                         region: 'north'
                         }
                         ]
                         });*/
                    }
                }
            });
        });

        task.delay(2000);
    },
    init: function () {
        console.log('init');
        var me = this;
        me.splashscreen = Ext.getBody().mask(
            'Loading application', 'splashscreen'
        );
        me.splashscreen.addCls('splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

    }

});
