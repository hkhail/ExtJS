Ext.define( 'Plato.controller.Query', {
    extend: 'Plato.controller.Base',
    stores : ['Documents','Dossiers'],
    models: ['Document','Dossier'],
    views: [
        'query.Form',
        'query.List',
        'query.Panel',
        'tab.procedure.Form'
    ],
    refs: [
        {
        	ref: 'center',
        	selector: '[xtype=layout.center]'
        },{
			ref: 'querylist',
			selector: '[xtype=query.list]'
		},{
        	ref: 'querypanel',
        	selector: '[xtype=query.panel]'
        },{
            ref: 'queryform',
            selector: '[xtype=query.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'form[xtype=query.form] button#documents': {
                    click: this.queryformsubmitdocuments
                },'form[xtype=query.form] button#dossiers': {
                    click: this.queryformsubmitdossiers
                },'form[xtype=query.form] button#procedures': {
                    click: this.queryformsubmitprocedures
                },'grid[xtype=query.list]' : {
                	cellclick  : this.test
                }
            },
            global: {}
        });
    },
    test : function(table, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    	var me 		= this,
    		center	= me.getCenter(),
    		tabPanel = center.down('tabpanel'),
    		grid 	= me.getQuerylist(),
    		/* get the column clicked */
    		column 	= grid.getView().getHeaderCt().getHeaderAtIndex(cellIndex);
    	
    	/* */
    	console.log('column clicked', column.itemId);
    	
    	tabPanel.add({
            xtype: 'tab.procedure.form'
        });
    	
    },
    queryformsubmitdocuments : function(button) {
    	var me = this,
    		store = me.getDocumentsStore();
    	
    	var columnModel = [{
			xtype : 'gridcolumn',
			id : 'translationdeadlineinuseString',
			dataIndex : 'translationdeadlineinuseString',
			text : 'Translation deadline'
		},{
			xtype : 'gridcolumn',
			id : 'geproDocType',
			dataIndex : 'geproDocType',
			text : 'DT'
			
		},{
			xtype : 'gridcolumn',
			dataIndex : 'fdrnumber',
			text : 'Fdr#'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'docid',
			renderer : me.doDocumentUrl,
			text : 'DocId'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'version',
			text : 'Version'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'fdrstatus',
			text : 'Status'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'originallanguage',
			text : 'SL'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'totalpgcount',
			text : 'Pgs'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'dossier',
			itemId : 'dossier',
			renderer : me.doDossierUrl,
			text : 'Dossier(s)'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'procedures',
			renderer : me.doProcedureUrl,
			text : 'Procedure'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'reading',
			text : 'Rdg'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'titles',
			text : 'Title',
			width : 300
		},{
			xtype : 'gridcolumn',
			dataIndex : 'comments',
			text : 'Comment'
		},{
			xtype : 'gridcolumn',
			dataIndex : 'relatedproceduresIds',
			renderer : me.doProcedureList, 
			text : 'Related Procs'
		}];
    	
    	var grid = Ext.ComponentQuery.query('grid[id=querylist]')[0];
    	grid.reconfigure(store, columnModel);
    	grid.store.load();
    	
    },
    queryformsubmitdossiers : function(button) {
    	var me = this,
    		store = me.getDossiersStore();
    	
    	
    	var columnModel = [{
			xtype : 'gridcolumn',
			id : 'committeeDossier',
			renderer : me.doDossierUrl,
			dataIndex : 'committeeDossier',
			text : 'Committee Dossier',
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'procedureNumber',
			dataIndex : 'procedureNumber',
			text : 'Procedure Number',
			renderer : me.doProcedureUrl,
			resizable : false
		}, {
			xtype 	: 'gridcolumn',
			id 		: 'readingColumn',
			dataIndex : 'reading',
			text 	: 'Rdg',
			//
			cls :	'clsAutoBreak',
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id:'title',
			dataIndex : 'title',
			text : 'Title',
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'rapporteurWithGroupColumn',
			dataIndex : 'rapporteurWithGroup',
			text : 'Rapporteur',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'administratorResponsibleColumn',
			dataIndex : 'administratorResponsible',
			text : 'Administrator Responsible',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'referenceDocumentColumn',
			dataIndex : 'referenceDocument',
			text : 'Reference Document',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'mainOpinionColumn',
			dataIndex : 'mainOpinion',
			text : 'Role',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'nameOfMainOpinionCommitteeColumn',
			dataIndex : 'nameOfMainOpinionCommittee',
			text : 'Committee',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'workingDocumentColumn',
			dataIndex : 'workingDocument',
			text : 'Working Document',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'exchangeOfViewColumn',
			dataIndex : 'exchangeOfView',
			text : 'Exchange of View',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'PRorPATranslationSubmissionColumn',
			dataIndex : 'PRorPATranslationSubmission',
			text : 'PR, PA. RE Submission date',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'PRorPATranslationDeadlineColumn',
			dataIndex : 'PRorPATranslationDeadline',
			text : 'PR, PA, RE Translation Deadline',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'PRorPAConsiderationInCommitteeColumn',
			dataIndex : 'PRorPAConsiderationInCommittee',
			text : 'PR or PA Consideration In Committee',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'PRorPAFDRColumn',
			dataIndex : 'PRorPAFDR',
			text : 'PR or PA FDR',
			renderer : function (value, style, record, index) {
					var myURL = '';
					var version=record.get('version');
					if (value !== '') {
						myURL = '<a href="#" onclick="_querycontroller.onRelatedDocumentClick(\''+value+'\',\''+version+'\')">'+value+'</a>';
					}
					return myURL;

			},
			resizable : false
		},{
			xtype : 'gridcolumn',
			id : 'PRorPAFDRreplacesFdrColumn',
			dataIndex : 'PRorPAFDRreplacesFdr',
			text : '',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'PRorPAsourcelanguageColumn',
			dataIndex : 'PRorPAsourcelanguage',
			text : 'PR/PA SL',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'PRorPApeNumberColumn',
			dataIndex : 'PRorPApeNumber',
			text : 'PR/PA PE Number',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'AMTablingDeadlineColumn',
			dataIndex : 'AMTablingDeadline',
			text : 'AM Tabling Deadline',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'AMTranslationSubmissionColumn',
			dataIndex : 'AMTranslationSubmission',
			text : 'AM Submission date',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'AMTranslationDeadlineColumn',
			dataIndex : 'AMTranslationDeadline',
			text : 'AM Translation Deadline',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'AMFDRColumn',
			dataIndex : 'AMFDR',
			text : 'AM FDR',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'AMFDRreplacesFdrColumn',
			dataIndex : 'AMFDRreplacesFdr',
			text : '',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'AMsourcelanguageColumn',
			dataIndex : 'AMsourcelanguage',
			text : 'AM SL',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'AMpeNumberColumn',
			dataIndex : 'AMpeNumber',
			text : 'AM PE Number',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'voteInCommitteeColumn',
			dataIndex : 'voteInCommittee',
			text : 'Vote in Committee',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'RRorADTranslationSubmissionColumn',
			dataIndex : 'RRorADTranslationSubmission',
			text : 'RR or AD Submission date',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'RRorADTranslationDeadlineColumn',
			dataIndex : 'RRorADTranslationDeadline',
			text : 'RR or AD Translation Deadline',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'RRorADFDRColumn',
			dataIndex : 'RRorADFDR',
			text : 'RR or AD FDR',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'RRorADFDRreplacesFdrColumn',
			dataIndex : 'RRorADFDRreplacesFdr',
			text : '',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'RRorADsourcelanguageColumn',
			dataIndex : 'RRorADsourcelanguage',
			text : 'RR/AD SL',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'RRorADpeNumberColumn',
			dataIndex : 'RRorADpeNumber',
			text : 'RR/AD PE Number',
			
			resizable : false
		}, {
			xtype : 'gridcolumn',
			id : 'plenaryVoteColumn',
			dataIndex : 'plenaryVote',
			text : 'Plenary Vote',
			
			resizable : false
		}];
    	
    	var grid = Ext.ComponentQuery.query('grid[id=querylist]')[0];
    	grid.reconfigure(store, columnModel);
    	grid.store.load();
    },
    queryformsubmitprocedures : function(button) {
    	var me = this,
    		itemsPerPage = 4;
    	
    	var store = Ext.create('Ext.data.Store', {
    	    storeId:'simpsonsStore',
    	    fields:['name', 'email', 'phone'],
    	    pageSize: itemsPerPage,
    	    data:{'items':[
    	        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
    	        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
    	        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
    	        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  },
    	        { 'name': 'Lisa 1',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
    	        { 'name': 'Bart 1',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
    	        { 'name': 'Homer 1', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
    	        { 'name': 'Marge 1', "email":"marge@simpsons.com", "phone":"555-222-1254"  },
    	        { 'name': 'Lisa 2',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
    	        { 'name': 'Bart 2',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
    	        { 'name': 'Homer 2', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
    	        { 'name': 'Marge 2', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
    	    ]},
    	    proxy: {
    	        type: 'memory',
    	        reader: {
    	            type: 'json',
    	            root: 'items',
    	            totalProperty: 'total'
    	        }
    	    }
    	});
    	
    	var columnModel = [{ text: 'Name',  dataIndex: 'name' },
    	                   { text: 'Email', dataIndex: 'email', width : 200 },
    	                   { text: 'Phone', dataIndex: 'phone', width : 200 },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' },
    	                   { text: 'Phone', dataIndex: 'phone' }];
    	
    	var grid = Ext.ComponentQuery.query('grid[id=querylist]')[0];
    	grid.reconfigure(store, columnModel);
    }
});