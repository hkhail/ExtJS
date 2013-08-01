/**
 * Grid for displaying Staff details
 */
Ext.define('Plato.view.tab.procedure.dossiers.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.procedure.dossiers.List',
    id	: 'proceduredossiersList',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number'
    ],
    store: [],
    columnLines	: true,
    selType	: 'rowmodel',
    autoScroll : true,
    viewConfig: {
        deferEmptyText: false,
        markDirty: false,
        stripeRows	: true,
        loadMask 	: true,
        loadingText	: 'Please wait ...'
    },
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {},
                items: [
                    {
                            text: 'Dossier#',
                            dataIndex: 'dossier',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Rdg',
                            dataIndex: 'reading',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Role',
                            dataIndex: 'role',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Fdr#',
                            dataIndex: 'fdrNumber',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Doc Id',
                            dataIndex: 'docId',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Version',
                            dataIndex: 'version',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Status',
                            dataIndex: 'fdrStatus',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Pg#',
                            dataIndex: 'pageCount',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'SL',
                            dataIndex: 'originaLang',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Pr.Lang',
                            dataIndex: 'priorityLang',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Submission Date',
                            dataIndex: 'submissionDate',
                            sortable: false,
                            hideable: false
                        },
                        {
                            text: 'Tr. Deadline',
                            dataIndex: 'deadlineDate',
                            sortable: false,
                            hideable: false
                        }
                ]
            }
        });
        me.callParent( arguments );
    }
});