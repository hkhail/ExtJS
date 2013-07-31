/**
* Main content region for application
*/
Ext.define('Plato.view.layout.Center', {
    extend: 'Ext.container.Container',
    alias: 'widget.layout.center',
    requires : ['Plato.view.home.Form','Plato.view.query.Panel'],
    region: 'center',
    layout: 'fit',
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{
        	
        	fieldDefaults: {
                allowBlank: false,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [{
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    // set to false to disable lazy render of non-active tabs...IMPORTANT!!!
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'home.form',
                            title: 'Home'
                        },
                        {
                            xtype: 'query.panel',
                            title: 'Query'
                        },
                        {
                            xtype: 'panel',
                            title: 'Graphs'
                        },
                        {
                            xtype: 'panel',
                            title: 'Reports'
                        },
                        {
                            xtype: 'panel',
                            title: 'Admin'
                     }]
              }]
        });
        me.callParent( arguments );
    }
});