Ext.define( 'Plato.view.query.List' ,{
    extend	:  	'Ext.grid.Panel',
    title 	: 	'Services',
    alias 	:  	'widget.query.list',
    requires: [	'Ext.grid.*',
               	'Ext.selection.RowModel'],
    id 		: 	'querylist',
    itemId 	: 	'querylist',
    columnLines	: true,
    frame 	: false,
    selType	: 'rowmodel',
    viewConfig: {
    	id 			: 'querylistview',
        stripeRows	: true,
        loadMask 	: true,
        loadingText	: 'Please wait ...'
    },
	initComponent: function() {
		var me = this;
		me.columns = [];
		me.store = '';
		me.dockedItems = [{
	        xtype: 'pagingtoolbar',
	        store: me.store, 
	        dock: 'bottom',
	        displayInfo: true,
	        pageSize : 10
	    }];
		me.callParent(arguments);
	}
});