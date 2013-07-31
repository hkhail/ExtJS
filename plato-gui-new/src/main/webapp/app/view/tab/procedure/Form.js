Ext.define('Plato.view.tab.procedure.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tab.procedure.form',
    id: 'tabprocedureform',
    bodyPadding: 10,
    preventHeader: true,
    title: 'Procedure form',
    layout : {
    	type : 'vbox',
    	align : 'center'
    },
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
            items: [{
                    	xtype : 'panel',
                    	flex : 1,
                    	frame : true,
                    	width : '100%'
                    },{
                    	xtype : 'grid',
                    	columns : [{
	    	            	text: 'Dossier#',
	    	                dataIndex: 'dossier',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Rdg',
	    	                dataIndex: 'reading',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Role',
	    	                dataIndex: 'role',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Fdr#',
	    	                dataIndex: 'fdrNumber',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Doc Id',
	    	                dataIndex: 'docId',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Version',
	    	                dataIndex: 'version',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Status',
	    	                dataIndex: 'fdrStatus',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Pg#',
	    	                dataIndex: 'pageCount',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'SL',
	    	                dataIndex: 'originaLang',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Pr.Lang',
	    	                dataIndex: 'priorityLang',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Submission Date',
	    	                dataIndex: 'submissionDate',
	    	                sortable: false,
	    	                hideable: false
	    	            },
	    	            {
	    	            	text: 'Tr. Deadline',
	    	                dataIndex: 'deadlineDate',
	    	                sortable: false,
	    	                hideable: false
	    	            }],
                    	flex : 2,
                    	width : '100%'
                    },{
                    	xtype : 'panel',
                    	flex : 1,
                    	frame : true,
                    	width : '100%'
                    }
                    
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [{
                    			itemId 	: 'edit',
                    			text 	: 'Edit',
                    			action 	: 'edit'
                    		},{
                    			itemId 	: 'save',
                    			text 	: 'Save',
                    			action 	: 'save'
                    		},{
                    			itemId 	: 'cancel',
                    			text 	: 'Cancel',
                    			action 	: 'cancel'
                    		}
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});