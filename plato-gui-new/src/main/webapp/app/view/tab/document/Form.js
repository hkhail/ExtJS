Ext.define('Plato.view.tab.document.form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tab.document.form',
    id: 'tabdocumentform',
    bodyPadding: 10,
    preventHeader: true,
    title: 'Document form',
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
            items: [{
                xtype		: 'form',
                layout		: 'anchor',
                frame 		: true,
    			bodyPadding	: 10,
    			border 		: 0,
    			fieldDefaults : {
    				anchor 		: '100%',
    				labelAlign  : 'left',
    				labelWidth  : 150
    			},
                items: [{
    					xtype: 'fieldcontainer',
                        border: 1,
                        frame: true,
                        height: 120,
                        margin: 20,
                        width: 1400,
                        fieldLabel: '',
                        labelPad: 2,
                        labelSeparator: 'false',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'fdrid',
                                name: 'fdrid',
                                fieldLabel: 'FDR#',
                                labelStyle: 'font-weight: bold;',
                                labelWidth: 150
                            },
                            {
                                xtype: 'textfield',
                                id: 'dossierid',
                                name: 'dossierid',
                                fieldLabel: 'Dossier#',
                                labelStyle: 'font-weight: bold;',
                                labelWidth: 150
                            },
                            {
                                xtype: 'fieldcontainer',
                                frame: false,
                                layout: {
                                    type: 'table'
                                },
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name: 'procedureid',
                                        fieldLabel: 'Procedure#',
                                        labelStyle: 'font-weight: bold;',
                                        labelWidth: 150
                                    }
                                    ,
                                    {
                                        xtype: 'combobox',
										style: 'margin-left:10px',
										name: 'procreadingid',
										value: 'Last',
										store: Ext.create('Ext.data.ArrayStore', {
													fields: ['label','value'],
													data: [
															['Last','Last'],
															['All','All'],
															['I','I'],
															['II','II'],
															['III','III']
														  ]
											}),
                                        id : 'procedurereadings',
										displayField : 'label',
										valueField : 'value',
										allowBlank: false,
										editable : false
                                        
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                name: 'qodossierid',
                                fieldLabel: 'Add Rslt/QO Dossier',
                                labelStyle: 'font-weight: bold;',
                                labelWidth: 150
                            }
                        ]
                    }
                ]
            }],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: ['->',
                    		{
                    			itemId 	: 'submit',
                    			text 	: 'Submit',
                    			action 	: 'submit'
                    		}
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});