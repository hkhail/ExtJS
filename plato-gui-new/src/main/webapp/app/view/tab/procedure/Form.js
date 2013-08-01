Ext.define('Plato.view.tab.procedure.Form', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tab.procedure.form',
    id: 'tabprocedureform',
    requires : ['Ext.ux.form.field.BoxSelect','Plato.view.tab.procedure.dossiers.List'],
    preventHeader: true,
    layout : 'fit',
    title: 'Procedure form',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [{
            		xtype : 'form',
            		frame : true,
            		layout : {
            	        type : 'vbox',
            	        align : 'center'
            	    },
                    defaults: {
                        border: false,
                        xtype: 'panel',
                        flex: 1,
                        layout: 'anchor'
                    },
            	    fieldDefaults : {
	    				anchor 		: '100%',
	    				labelAlign  : 'left',
	    				labelWidth  : 100
	    			},
            	    items :[{
            			xtype 	: 'panel',
            			border 	: 0,
            			margins : '5 5 5 5',
            			flex 	: 1,
            			width 	: '100%',
            			layout 	: {
                	        type : 'vbox',
                	        align : 'center'
                	    },
                	    items : [{
                	    	xtype	: 'panel',
                	    	width 	: '100%',
                	    	border 	: 0,
                	    	flex 	: 2,
                	    	layout	: {
                            	type: 'hbox',
                            	align: 'stretch'
                            },
                            items : [{
								xtype	: 'panel',
								flex 	: 1,
								bodyPadding: 10,
								margins : '5 5 5 5',
								frame 	: true,
								border	: 0,
								layout	: 'anchor',
								items:[{
						    	   xtype:'textfield',
						    	   name:'id',
						    	   fieldLabel:'Procedure#'
						       },{
						    	  xtype 	 : 'boxselect',
						    	  fieldLabel : "Related Procs",
						    	  growMax	 : 100,
						    	  displayField : "id",
						    	  valueField : "id",
						    	  delimiter	 : ';',
						    	  store 	 : "Procedures",
						    	  queryMode  : "local",
						    	  value 	 : [],
						    	  emptyText  : "Pick a procedure",
						          pinList: true,
						          forceSelection: false,
						          createNewOnEnter: true,
						          createNewOnBlur: true,
						          filterPickList: true
						       },
						       {
						    	   xtype:'textfield',
						    	   name:'reading',
						    	   fieldLabel:'Reading'
						       },
						       {
						    	   xtype:'textfield',
						    	   name:'mainCommittee',
						    	   fieldLabel:'Main Committee'
						       }]
							},{
								xtype	: 'panel',
								flex 	: 1,
								bodyPadding: 10,
								margins : '5 5 5 5',
								frame 	: true,
								border	: 0,
								layout	: 'anchor',
								items:[{
										xtype:'textfield',
										name:'mainReferenceDoc',
										fieldLabel:'Main reference Doc'
								       },{
								    	  xtype 	 : 'boxselect',
								    	  fieldLabel : "Other Ref Docs",
								    	  growMax	 : 100,
								    	  displayField : "id",
								    	  valueField : "id",
								    	  delimiter	 : ',',
								    	  store 	 : "Procedures",
								    	  queryMode  : "local",
								    	  value 	 : [],
								    	  emptyText  : "Pick a reference doc",
								          pinList: true,
								          forceSelection: false,
								          createNewOnEnter: true,
								          createNewOnBlur: true,
								          filterPickList: true
								       },{
								    	   xtype:'textfield',
								    	   name:'cNumber',
								    	   fieldLabel:'C number'
								       }]
						},{
		                            xtype: 'panel',
		                            flex 	: 1,
		                            bodyPadding: 10,
		                            margins : '5 5 5 5',
									frame 	: true,
									border	: 0,
									layout	: 'anchor',
									fieldDefaults : {
					    				anchor 		: '100%',
					    				labelAlign  : 'left',
					    				labelWidth  : 100
					    			},
		                            items : [{
										  xtype:'textfield',
										  name:'procType',
										  fieldLabel:'Proc.Type'
									  },
									  {
										  xtype:'textfield',
										  name:'procNature',
										  fieldLabel:'Proc. Nature'
									  }]
		                    }]
                	    },{
                	    	xtype : 'panel',
                	    	width 	: '100%',
                	    	bodyPadding: 2,
							margins : '5 5 5 5',
                	    	frame	: true,
                	    	layout	: 'anchor',
                	    	flex 	: 1,
                	    	items : [{
	                	    	xtype		: 'displayfield',
	                	    	fieldLabel	: 'Legal Bases',
	                	    	labelAlign 	: 'top',
	                	    	name		: 'legalBases',
                   	    		anchor 		: '100% 100%'		
	                	    }]
                	    },{
                	    	xtype : 'panel',
                	    	frame	: true,
                	    	width 	: '100%',
                	    	bodyPadding: 2,
							margins : '5 5 5 5',
                	    	layout	: 'anchor',
            	    		flex 	: 1,
                	    	items : [{
                	    		xtype		: 'textfield',
                	    		fieldLabel	: 'Title',
                	    		labelAlign 	: 'top',
                	    		name 		: 'title',
                	    		anchor 		: '100% 100%'
                	    	}]	
                	    }]
            		},{
                        xtype 	: 'procedure.dossiers.List',
                        margins : '0 5 5 5',
                        flex 	: 1,
                        border	: 1,
                        width 	: '100%'
                    },{
                        xtype 	: 'panel',
                        margins : '0 5 5 5',
                        flex 	: 0.5,
                        border	: 0,
                        width 	: '100%',
                        layout 	: {
                	        type : 'vbox',
                	        align : 'center'
                	    },
                        items: [{
                        	xtype 	: 'panel',
                            frame 	: true,
                            border 	: 0,
                            flex  	: 1,
                            width	: '100%',
                        	defaults : {
                            	labelAlign 	: 'top',
                            	margins		: '0 10 0 0'	
                            },
                        	layout : 'hbox',
                            items: [{
                                xtype:'textfield',
                                fieldLabel: 'Consolidated AMs',
                                flex	: 1,
                                name: 'consolidatedAMs',
                                anchor: '100%'
                            },{
                                xtype:'textfield',
                                fieldLabel: 'Council Text',
                                flex	: 1,
                                name:'councilText',
                                anchor: '100%'
                            },{
                                xtype:'textfield',
                                fieldLabel: 'Session AMs',
                                flex	: 1,
                                name:'sessionAMs',
                                anchor: '100%'
                            },{
								 xtype:'textfield',
								 fieldLabel: 'Plenary Vote',
								 flex	: 1,
								 name:'plenaryVote',
	                             anchor: '100%'
							},{
								 xtype:'textfield',
								 fieldLabel: 'Plenary Vote by CoordLeg',
								 flex	: 1,
								 name:'plenaryVoteCoordLeg',
	                             anchor: '100%'
							},{
								 xtype:'textfield',
								 fieldLabel: 'Session',
								 flex	: 1,
								 name:'session',
	                             anchor: '100%'
							}]
                        },{
                        	xtype : 'panel',
                            frame : true,
                            width : '100%',
                            flex  :1,
                            defaults : {
                            	labelAlign 	: 'top',
                            	margins		: '0 10 0 0'	
                            },
                        	layout : 'hbox',
                        	items: [{
                                xtype:'textfield',
                                fieldLabel: 'Chef de file',
                                flex : 1,
                                name:'chefDeFile',
                                anchor: '100%'
                            },{
                                xtype:'textfield',
                                fieldLabel: 'Pages',
                                flex : 1,
                                name:'pages',
                                anchor: '100%'
                            }, {xtype:'displayfield',flex : 1},{xtype:'displayfield',flex : 1},{xtype:'displayfield',flex : 1},{xtype:'displayfield',flex : 1}]
                        },{
                    	   xtype : 'panel',
                    	   width : '100%',
                           frame : true,
                           flex  :1,
                           defaults : {
                           		labelAlign 	: 'top',
                           		margins		: '0 10 0 0'	
                           },
                       	   layout : 'hbox',
                       	   items: [{
                                xtype:'textfield',
                                fieldLabel: 'Notes to DMS from Terminology',
                                name:'procedureKeywords',
                                flex	: 1,
                                anchor: '100%'
                         }]
                   }]        
                    }],
                    dockedItems: [
                                  {
                                      xtype	: 'toolbar',
                                      dock	: 'top',
                                      width 	: '100%',
                                      defaults    : {
                                          xtype    : "button",
                                          border	: 1,
                                          style: {
                                              borderColor:'gray', 
                                              borderStyle:'solid', 
                                              borderWidth:'1px'
                                          }
                                      },
                                      items: [{
                                          	text	:'Edit',
                                          	itemId	: 'edit',
                                            tooltip	: 'edit',
                                            scale	: 'small'
                                          },'->',{
                                          	text	: 'Cancel',
                                          	itemId	: 'cancel',
                                            tooltip	: 'cancel',
                                            scale	: 'small',
                                            hidden	: true
                                          },{ 
                                          	xtype	: 'tbspacer', 
                                          	width	: 10, 
                                          	border	: 0 
                                          },{
                                          	text	:'Save',
                                          	itemId	: 'save',
                                            tooltip	: 'save',
                                            scale	: 'small',
                                            hidden	: true
                                      }]
                                  }
                              ]
            }]
            
        });
        me.callParent( arguments );
    }
});