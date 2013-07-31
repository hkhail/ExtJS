Ext.define('Plato.view.query.Panel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.query.panel',
	id 	: 'querypanel',
	requires : ['Plato.view.query.Form'],
	frame : true,
	border : 1,
	layout: {
        type: 'vbox',
        align: 'center'
    },
	initComponent : function() {
		var me = this;
		this.items = [{
            			xtype: 'query.form',
            			collapsible : true,
            			flex: 1.2,
            			width 	: '100%'
        			 },{
						xtype : 'splitter'
					 },{
						xtype: 'query.list',
						collapsible : false,
	            		title: 'My Grid',
	            		width 	: '100%',
            			flex: 1
        			 }];
		
		me.callParent(arguments);
	}
});