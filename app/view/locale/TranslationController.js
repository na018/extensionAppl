Ext.define('sencha2.view.locale.TranslationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.translation',


    init: function () {
        var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en',
            button = this.getView();
        console.log(localStorage.getItem('user-lang') );
        button.setIconCls(lang);
        if (lang == 'en') {
            button.setText('English');
        } else if (button == 'es') {
            button.setText('Español');
        } else {
            button.setText('Português');
        }
    },
    onMenuItemClick: function (item, e, options) {
        var menu = this.getView();

        menu.setIconCls(item.iconCls);
        menu.setText(item.text);
        localStorage.setItem("user-lang", item.iconCls);
        console.log(item.iconCls);

        window.location.reload();
    }

});