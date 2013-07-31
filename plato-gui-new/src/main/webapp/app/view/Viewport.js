/**
* Main application Viewport
* Uses a {@link Ext.layout.container.Border} layout for ccontent organization

*/
Ext.define('Plato.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'Plato.view.layout.North',
        'Plato.view.layout.Center'
    ],
    layout: {
        type: 'border'
    },
    items: [
        { xtype: 'layout.north' },
        { xtype: 'layout.center' }
    ]
});