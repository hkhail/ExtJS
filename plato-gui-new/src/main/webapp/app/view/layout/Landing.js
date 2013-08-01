/**
* Generic landing page for application
*/
Ext.define('Plato.view.layout.Landing', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.landing',
    title: 'Welcome!',
    bodyPadding: 10,
    html: 'Welcome to Plato!',
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{

        });
        me.callParent( arguments );
    }
});