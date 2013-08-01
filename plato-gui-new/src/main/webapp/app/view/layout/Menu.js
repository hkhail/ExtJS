/**
* Main top-level navigation for application
*/
Ext.define('Plato.view.layout.Menu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.menu',
    floating: false,
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{
            items: [
                {
                    text: 'Home',
                    itemId: 'home',
                    iconCls: 'icon_home'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Query',
                    iconCls: 'icon_gear',
                    menu: [
                        {
                            text: 'Documents',
                            itemId: 'query/documents'
                        },
                        {
                            text: 'Dossiers',
                            itemId: 'query/dossiers'
                        },
                        {
                            text: 'Procedure',
                            itemId: 'query/procedure'
                        }
                    ]
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Graphs',
                    itemId: 'graph'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Reports',
                    itemId: 'reports'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Admin',
                    itemId: 'admin'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Logout',
                    itemId: 'logout'
                }
            ]
        });
        me.callParent( arguments );
    }
});