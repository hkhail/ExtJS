/**
* "Header" for the application (logo, title, etc.)
*/
Ext.define('Plato.view.layout.North', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.north',
    region: 'north',
    bodyPadding	: 5,
    height		: 93,
    html: '<img src="resources/icons/plato.png" />',
    cls: 'header',
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{
            
        });
        me.callParent( arguments );
    }
});