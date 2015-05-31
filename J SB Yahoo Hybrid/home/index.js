'use strict';

app.home = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.yahooFinance;
    var dataSource = new kendo.data.DataSource({
        type: 'json',
        transport: {
            read: {
                url: dataProvider.url
            }
        },
        schema: {
            model: {
                fields: {
                    query: {
                        field: 'query',
                        defaultValue: ''
                    },
                }
            }
        },
    });

    var homeModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('homeModel', homeModel);
})(app.home);