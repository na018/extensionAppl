/**
 * Created by nadin-katrin on 27.02.17.
 */
Ext.define('sencha2.store.SkaterStore',{
    extend: 'Ext.data.Store',
    requires: [
        'sencha2.model.Skater'
    ],
    storeId: 'SkaterStore',
    model: 'sencha2.model.Skater',
    proxy: {
        type: 'ajax',
        url: 'php/dataBase/getter/getSkater.php',
        reader: 'json'
    },/*,
    data:[
        {
            'name':'Jessica Anderson',
            'birthday':'23.12.1996',
            'coach' : 'Mr Perfect',
            'image': 'resources/images/jessi.jpg',
            'info': 'Winner of the World Champion Chip'
        },
        {
            'name':'Jenny Langstrumpf',
            'birthday':'23.12.1996',
            'coach' : 'Ms Perfect',
            'image': 'resources/images/Jenny.jpg',
            'info': 'Winner of the World Champion Strumpf Competition'
        },
        {
            'name':'Jim Tonic',
            'birthday':'23.12.1996',
            'coach' : 'Mr Perfect',
            'image': 'resources/images/Jim.jpg',
            'info': 'Winner of the World Champion Alc Competition'
        },
        {
            'name':'Zombie Extrastrong',
            'birthday':'23.12.1996',
            'coach' : 'Ms Perfect',
            'image': 'resources/images/Zombie.jpg',
            'info': 'Winner of the Olympic Als Competition'
        }
    ]*/

});