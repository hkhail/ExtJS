Ext.define('Plato.view.query.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.query.form',
    requires : [    'Ext.ux.form.MultiSelect',
                    'Ext.ux.form.ItemSelector'],
    id: 'queryform',
    frame : true,
    autoHeight: true,
    title: 'Form',
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'qtip'
    },
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	items: [{
	                xtype: 'fieldcontainer',
	                anchor: '100%',
	                layout: 'hbox',
	                defaults: {
	                    flex: 1,
						margin 	: '0 5 0 0'
	                },
	                items: [{
	                		xtype : 'combobox',
	                		name : 'selectedmultipleDate',
	                		fieldLabel : 'Date',
	                		displayField : 'label',
	                		valueField : 'value',
	                		allowBlank: false,
	                		editable : false
	                	}, {
	    					xtype 	: 'datefield',
	    					fieldLabel : 'From',
	    					name : 'deadlinedatefromdate',
	    					format : 'Y-m-d'
	    			
	    				}, {
	    					xtype : 'datefield',
	    					fieldLabel : 'To',
	    					name : 'deadlinedatetodate',
	    					format : 'Y-m-d'
	    			
	    				},{
	    					xtype : 'combobox',
	    					name : 'selectedsl',
	    					fieldLabel : 'SL',
	    					displayField : 'label',
	    					valueField : 'value',
	    				    allowBlank: false,
	    					editable : false
	    				}
	                ]
	            },{
		                xtype: 'fieldcontainer',
		                combineErrors: true,
		                msgTarget : 'qtip',
		                layout: 'hbox',
		                defaults: {
		                    flex: 1,
							margin 	: '0 5 0 0'
		                },
		                items: [{
								xtype : 'combobox',
								name : 'selectedpolicy',
								fieldLabel : 'Policy area',
								displayField : 'label',
								valueField : 'value',
							    allowBlank: false,
								editable : false
							}, {
					
								xtype : 'combobox',
								name : 'selecteddoctype',
								fieldLabel : 'Document type',
								displayField : 'label',
								valueField : 'value',
							    allowBlank: false,
								editable : false
							}, {
								xtype : 'combobox',
								name : 'selectedterminologykw',
								fieldLabel : 'Terminology folders',
								displayField : 'label',
								valueField : 'value',
								allowBlank: false,
								editable : false
							}, {
								xtype : 'displayfield'
							}
						]
		            },{
			                xtype: 'fieldcontainer',
			                combineErrors: true,
			                msgTarget : 'qtip',
			                layout: 'hbox',
			                defaults: {
			                    flex: 1,
								margin 	: '0 5 0 0'
			                },
			                items: [{
								xtype : 'combobox',
								name : 'selectedrapporteur',
								fieldLabel : 'Rapporteur',
								displayField : 'label',
								valueField : 'value',
								allowBlank: false,
								editable : false
							}, {
								xtype : 'combobox',
								name : 'selectedadministrator',
								fieldLabel : 'Administrator',
								displayField : 'label',
								valueField : 'value',
								allowBlank: false,
								editable : false
							},{
								xtype : 'combobox',
								name : 'selectedverification',
								fieldLabel : 'Verification',
								displayField : 'label',
								valueField : 'value',
								allowBlank: false,
								editable : false
							},
							
							{
								xtype : 'combobox',
								name : 'selectedfdrstatus',
								fieldLabel : 'Fdr status:',
								displayField : 'label',
								valueField : 'value',
								allowBlank: false,
								editable : false
							}]
		    },{
                        xtype		: 'fieldset',
                        title		: 'More...',
                        collapsible	: true,
                        collapsed	: true,
                        items: [
                                {
                                    xtype: 'fieldcontainer',
                                    anchor: '100%',
                	                layout: 'hbox',
                	                defaults: {
                	                    flex: 1,
        								margin 	: '0 5 0 0'
                	                },
                                    items: [{
                                    	fieldLabel : 'Consideration of PR/PA in committee from',
                						xtype : 'datefield',
                						name : 'prpacomfromdate',
                						format : 'Y-m-d'
                					}, {
                						fieldLabel : 'to',
                						xtype : 'datefield',
                						name : 'prpacomtodate',
                						format : 'Y-m-d'
                					},{
	                   					xtype		: 'multiselect',
	                   					margin 		: '0 5 0 50',
	                					msgTarget	: 'side',
	                					fieldLabel	: 'Role',
	                					name		: 'selectedrole',
	                					allowBlank	: false,
	                					height		: 105,
	                					store: [			['','None'],
	                										['A : Opinion / Others','A : Opinion / Others'],
	                										['A* : Opinion, associated committees','A* : Opinion, associated committees'],
	                										['AC : Complementary opinion','AC : Complementary opinion'],
	                										['AL : Opinion on legal base','AL : Opinion on legal base'],
	                										['F : Main / Lead','F : Main / Lead'],
	                										['F* : Main, associated committees','F* : Main, associated committees']
	                							],
	                					value: [''],
	                					ddReorder: true
	                				},{
                    					xtype: 'multiselect',
                    					msgTarget: 'side',
                    					fieldLabel: 'Iter Phase',
                    					name: 'selectediterphase',
                    					allowBlank: false,
                    					height: 105,
                    					store: [			['All','All'],
                    										['01 to 04','01 to 04'],
                    										['01 to 09','01 to 09'],
                    										['01.00','01.00 Opened'],
                    										['02.00','02.00 Draftsperson / Rapporteur defined'],
                    										['03.00','03.00 Procedure in committee decided'],
                    										['04.00','04.00 Procedure and Draftsperson decided'],
                    										['05.00','05.00 Voted in committee'],
                    										['06.00','06.00 Report tabled by committee'],
                    										['07.00','07.00 Referred back after decision of plenary'],
                    										['08.00','08.00 Confirmed by committee'],
                    										['09.00','09.00 Opinion transmitted to main committee / decision \'no opinion\''],
                    										['09.50','09.50 Procedure confirmed by committee'],
                    										['10.00','10.00 Closed']
                    										
                    					],
                    					value: ['All'],
                    					ddReorder: true
                    				}]
                                },{
                                    xtype: 'fieldcontainer',
                                    anchor: '100%',
                	                layout: 'hbox',
                	                defaults: {
                	                    flex: 1,
        								margin 	: '0 5 0 0'
                	                },
                                    items: [{
                						xtype : 'datefield',
                						fieldLabel : 'AM Tabling deadline',
                						name : 'amtablingfromdate',
                						format : 'Y-m-d'
                					},{
                						xtype : 'datefield',
                						style : 'margin-left:10px',
                						fieldLabel : 'to',
                						name : 'amtablingtodate',
                						format : 'Y-m-d'
                					},{
        								xtype : 'displayfield',
        								margin 		: '0 5 0 50'
        							},{
        								xtype : 'displayfield'
        							},]
                                },{
                                    xtype: 'fieldcontainer',
                                    anchor: '100%',
                	                layout: 'hbox',
                	                defaults: {
                	                    flex: 1,
        								margin 	: '0 5 0 0'
                	                },
                                    items: [{
                                    		fieldLabel : 'Vote in committee from',
    										xtype : 'datefield',
    										name : 'voteincomfromdate',
    										format : 'Y-m-d'
    									}, {
    										xtype : 'datefield',
    										fieldLabel : 'to',
    										name : 'voteincomtodate',
    										format : 'Y-m-d'
    									},{
    										fieldLabel 	: 'Vote in plenary from',
    										margin 		: '0 5 0 50',
                    						xtype 		: 'datefield',
                    						name : 'voteinplefromdate',
                    						format : 'Y-m-d'
                    					}, {
                    						xtype : 'datefield',
                    						fieldLabel : 'to',
                    						name : 'voteinpletodate',
                    						format : 'Y-m-d'
                    					}]
                                },{
                                    xtype: 'fieldcontainer',
                                    anchor: '100%',
                	                layout: 'hbox',
                	                defaults: {
                	                    flex: 2,
        								margin 	: '0 5 0 0'
                	                },
                                    items: [{
                						xtype : 'combobox',
                						labelWidth	: 200,
                						name : 'selectedproctype',
                						fieldLabel : 'Proc.Type',
                						displayField : 'label',
                						valueField : 'value',
                						allowBlank: false,
                						editable : false
                					},{
                						xtype : 'combobox',
                						labelWidth	: 200,
                						name : 'selectedchefdefile',
                						fieldLabel : 'Chef de File',
                						displayField : 'label',
                						valueField : 'value',
                						allowBlank: false,
                						editable : false

                					}, {
                						xtype : 'combobox',
                						margin 		: '0 0 0 50',
                						name : 'selectedprocnature',
                						fieldLabel : 'Proc.Nature',
                						displayField : 'label',
                						valueField : 'value',
                						allowBlank: false,
                						editable : false
                					}, {
        								xtype : 'displayfield'
        							}]
                                }
                            ]
                    }
            ],
            buttons: [{
                text: 'Documents',
                itemId:'documents',
                id:'documents'
            },{
                text: 'Dossiers',
                itemId:'dossiers',
                id:'dossiers'
            },{
                text: 'Procedures',
                itemId:'procedures',
                id:'procedures'
            }]
        });
        
        
        
        
        me.callParent( arguments );
    }
});