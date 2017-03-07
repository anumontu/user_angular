userApp.service('loggedin_info', function () {
    var data = '';

        return {
            getProperty: function () {
                return data;
            },
            setProperty: function(value) {
                data = value;
            }
        };
});