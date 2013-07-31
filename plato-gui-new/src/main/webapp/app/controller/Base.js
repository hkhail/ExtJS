/**
Base controller from which all others will extend
*/
Ext.define('Plato.controller.Base', {
    extend: 'Ext.app.Controller',
    doProcedureUrl : function (value, style, record, index) {
		var myURL = '';
		if (value !== '') {
			myURL = '<a href="#">'+value+'</a>';
		}
		return myURL;

	},
	doDocumentUrl : function (value, style, record, index) {
		var myURL = '';
		var version=record.get('version');
		if (value !== '') {
			myURL = '<a href="#">'+value+'</a>';
		}
		return myURL;

	},
	doDossierUrl : function (value, style, record, index) {
		var myURL = '';
		if (value !== '') {
			myURL = '<a href="#">'+value+'</a>';
		}
		return myURL;
	}
});