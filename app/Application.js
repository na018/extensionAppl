/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('sencha2.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'Ext.container.Viewport',
        'Ext.dom.Helper',
        'Ext.layout.container.Border',
        'Ext.tip.QuickTipManager',
        'Ext.util.DelayedTask'
    ],

    name: 'sencha2',

    views: [
        // 'skater.Item',
        // 'sencha2.view.item.Foo'
        'login.Login'
    ],
    controllers: [
        // 'SkaterController'
    ],

    stores: [
        // 'SkaterStore'
    ],

    launch: function () {
        var me = this;
        Ext.tip.QuickTipManager.init();     //alternative:  enableQuickTips: true

        var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });

            //Fade out the icon and message
            me.splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts ){
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

    },

});
