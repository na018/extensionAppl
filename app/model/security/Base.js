Ext.define('sencha2.model.security.Base', {         //contains common code for User and Group Models = Schema
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'sencha2.util.Util'
    ],

    idProperty: 'id',

    fields: [
        { name: 'id', type: 'int' }
    ],

    schema: {
        namespace: 'sencha2.model.security',  //declaring a namespace you do not have to write sencha2.model.security.User but just User
        urlPrefix: 'php',
        proxy: {
            type: 'ajax',
            api :{      //url prefix is used for all requests to the server
                read : '{prefix}/{entityName:lowercase}/list.php',
                create: '{prefix}/{entityName:lowercase}/create.php',
                update: '{prefix}/{entityName:lowercase}/update.php',
                destroy: '{prefix}/{entityName:lowercase}/destroy.php'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            listeners: {
                exception: function(proxy, response, operation){
                    sencha2.util.Util.showErrorMsg(response.responseText);
                }
            }
        }
    }
});