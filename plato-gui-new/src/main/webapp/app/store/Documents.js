Ext.define('Plato.store.Documents', {
	extend 	: 'Ext.data.Store',
    model	: 'Plato.model.Document',
    storeId	: 'documents',
    proxy: {
	        type: 'ajax',
	        url : './resources/json/documents.json',
	        reader: {
	            type: 'json',
	            root:'documents'
       		}
  	}
});