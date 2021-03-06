Ext.define('sencha2.util.Glyphs', {
    singleton: true,

    config: {           //easily get a glyph code
        webFont: 'FontAwesome',
        add: 'xf067',
        edit: 'xf040',
        destroy: 'xf1f8',
        save: 'xf00c',
        cancel: 'xf0e2'
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    getGlyph : function(glyph) {
        alert('I am called');
        var me = this,
            font = me.getWebFont();
        if (typeof me.config[glyph] === 'undefined') {
            console.log(glyph+'is not defined');
            return false;
        }
        return me.config[glyph] + '@' + font;
    },
    init: function(){
        console.log('glyphs util called')
    }
});
console.log('glyphs called '+this);