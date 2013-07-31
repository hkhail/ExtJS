/**
* @class CarTracker
* @singleton
*/
/*
This file is generated and updated by Sencha Cmd. You can edit this file as
needed for your application, but these edits will have to be merged by
Sencha Cmd when it performs code generation tasks such as generating new
models, controllers or views and when running "sencha app upgrade".

Ideally changes to this file would be limited and most work would be done
in other places (such as Controllers). If Sencha Cmd cannot merge your
changes and its generated code, it will produce a "merge conflict" that you
will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides
Ext.util.Format.yesNo = function( v ) {
    return v ? 'Yes' : 'No';
};

Ext.Loader.setPath('Plato', 'app');
Ext.Loader.setPath('Ext.ux', 'ux');
Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'Plato',
    autoCreateViewport : true,
    views: [
        'Viewport'
    ],
    controllers: ['Base', 'Query'],
    requires: [
        'Ext.util.History'      
    ],
    /**
     * launch is called immediately upon availability of our app
     */
    launch: function( args ) {
        
    }
});