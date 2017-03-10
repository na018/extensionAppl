
Ext.define('sencha2.view.login.CapsLockTooltip',{
    extend: 'Ext.tip.QuickTip',

    xtype: 'capslocktooltip',

    requires: [
        'sencha2.view.login.CapsLockTooltipController',
        'sencha2.view.login.CapsLockTooltipModel'
    ],
    controller: 'login-capslocktooltip',
    viewModel: {
        type: 'login-capslocktooltip'
    },

    target: 'password',
    anchor: 'top',
    anchorOffset: 0,
    width:300,
    dismissDelay:0,
    autoHide: false,
    title: '<div class="fa fa-exclamation-triangle">Caps Lock is On </div>',
    html: '<div><p>Having Caps Lock on may cause you to enter your password incorrectly. </p>' +
    '<p>You should press Caps Lock to turn it off before entering your password.</p></div>',



});
