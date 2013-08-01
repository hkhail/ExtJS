Ext.define('Plato.store.Procedures', {
	extend 	: 'Ext.data.Store',
    model	: 'Plato.model.Procedure',
    storeId	: 'procedures',
    autoLoad : true,
    proxy: {
	        type: 'ajax',
	        url : './resources/json/procedures.json',
	        reader: {
	            type: 'json',
	            root:'procedures'
       		}
  	}
});