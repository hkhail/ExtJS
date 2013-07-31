Ext.define('Plato.store.Dossiers', {
	extend 	: 'Ext.data.Store',
    model	: 'Plato.model.Dossier',
    storeId	: 'dossiers',
    proxy: {
	        type: 'ajax',
	        url : './resources/json/dossiers.json',
	        reader: {
	            type: 'json',
	            root:'dossiers'
       		}
  	}
});