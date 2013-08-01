Ext.define('Plato.model.Procedure', {
	extend : 'Ext.data.Model',
	fields : [ {
        name: 'id'
    },
    {
        name: 'relatedProcedures'
    },
    {
        name: 'reading'
    },
    {
        name: 'mainCommittee'
    },
    {
        name: 'mainReferenceDoc'
    },
    {
        name: 'otherRefDocs'
    },
    {
        name: 'cNumber'
    },
    {
        name: 'procType'
    },
    {
        name: 'procNature'
    },
    {
        name: 'legalBases'
    },
    {
        name: 'title'
    },
    {
        name: 'consolidatedAMs'
    },
    {
        name: 'councilText'
    },
    {
        name: 'sessionAMs'
    },
    {
        name: 'plenaryVote'
    },
    {
        name: 'plenaryVoteCoordLeg'
    },
    {
        name: 'session'
    },
    {
        name: 'chefDeFile'
    },
    {
        name: 'pages'
    },
    {
        name: 'procedureKeywords'
    },
    {
        name: 'additionalInfo'
    },
    {
        name: 'remarks'
    },
    {
        name: 'gridBeans'
    } ],
	proxy : {
		type : 'ajax',
		reader: {
			type:'json'
		},
		writer:{
			type:'json',
			writeAllFields: true
		},
		api : {
			read : './resources/json/procedure.json'
		}
	}
});