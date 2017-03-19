/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
console.log('app.js');
Ext.application({
    name: 'sencha2',

    // views: [
    //     'skater.Item',
    //     'sencha2.view.item.Foo'
    // ],
    // controllers:[
    //     'SkaterController'
    // ],
    // stores:[
    //     'SkaterStore'
    // ],
    // launch: function () {
    //     Ext.create('Ext.container.Viewport',{
    //         layout:{
    //             type:'border'
    //         },
    //         items:[
    //             {
    //                 xtype: 'sencha2-ItemView',
    //                 flex:1,
    //                 region: 'center'
    //             },
    //             {
    //                 xtype: 'itemfoo',
    //                 flex: 0.5,
    //                 region: 'north'
    //             }
    //         ]
    //     });
    //
    // }

    extend: 'sencha2.Application',
    autoCreateViewport: false
   // autoCreateViewport: 'sencha2.view.skater2.Skater',

    //autoCreateViewport: 'sencha2.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to sencha2.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
