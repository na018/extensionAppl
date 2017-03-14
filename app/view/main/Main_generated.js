// /**
//  * This class is the main view for the application. It is specified in app.js as the
//  * "autoCreateViewport" property. That setting automatically applies the "viewport"
//  * plugin to promote that instance of this class to the body element.
//  *
//  * TODO - Replace this content of this view to suite the needs of your application.
//  */
// Ext.define('sencha2.view.main.Main_generated', {
//      extend: 'Ext.container.Container',          //simplest container in EXT API
//     plugin: 'viewport',
//     // extend: 'Ext.container.Viewport',
//     requires: [
//         'sencha2.view.main.MainController',
//         'sencha2.view.main.MainModel'
//     ],
//
//     xtype: 'app-main2',
//
//     controller: 'main',
//     viewModel: {
//         type: 'main'
//     },
//
//     layout: {
//         type: 'border'
//     },
//
//     items: [{
//         region: 'north',
//         xtype: 'component',
//         cls: 'appBanner',
//         padding: 10,
//         height: 40,
//         html: 'My Company - My Company Motto'
//     }, {
//         xtype: 'panel',
//         bind: {
//             title: '{name}'
//         },
//         region: 'west',
//         html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li><li>I' + "'" + 'm the west region :D</li></ul>',
//         width: 250,
//         split: true,
//         collapsible: true,
//         collapsed: true,
//         tbar: [{
//             text: 'Button',
//             handler: 'onClickButton'
//         }]
//     }, {
//         region: 'center',
//         xtype: 'tabpanel',
//         items: [{
//             title: 'Tab 1',
//             html: '<h2>Content appropriate for the current navigation.</h2>',
//             bodyPadding: 20,
//             iconCls: 'x-fa fa-users'
//         }, {
//             title: 'Tab 2',
//             html: '<h2>Hello World</h2>'
//         }, {
//             title: 'Tab 3',
//             html: '<h2>Lucky Number</h2>'
//         },{
//             title: 'The Data',
//             xtype: 'grid',
//             store: {
//                 fields:['name', 'email', 'phone'],
//                 data:[
//                     { name: 'Lisa',  email: "lisa@simpsons.com",
//                         phone: "555-111-1224"  },
//                     { name: 'Bart',  email: "bart@simpsons.com",
//                         phone: "555-222-1234" },
//                     { name: 'Homer', email: "home@simpsons.com",
//                         phone: "555-222-1244"  },
//                     { name: 'Marge', email: "marge@simpsons.com",
//                         phone: "555-222-1254"  }
//                 ],
//                 proxy: {
//                     type: 'memory'
//                 }
//             },
//             columns: [
//                 { text: 'Name',  dataIndex: 'name' },
//                 { text: 'Email', dataIndex: 'email', flex: 1},
//                 { text: 'Phone', dataIndex: 'phone' }
//             ]
//         }
//         ]
//     }
//     ]
// });
