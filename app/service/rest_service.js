userApp.factory('rest_login', function ($resource) {
    return $resource(
        'http://localhost:8000/api/login/',
        {},
        {
            login: {method: 'POST'}
        }
    )
});

userApp.factory('rest_user', function ($resource) {
    return {
        user: function (token) {
            return $resource(
                'http://localhost:8000/api/user/:user_id/',
                {user_id: '@user_id'},
                {
                    add_user: {method: 'POST'},
                    get_user: {method: 'GET', headers: {'Authorization': 'Token ' + token}},
                    update_user: {method: 'PUT', headers: {'Authorization': 'Token ' + token}}
                }
            )
        }
    }
});

userApp.factory('rest_logout', function ($resource) {
    return {
        user: function (token) {
            return $resource(
                'http://localhost:8000/api/logout/',
                {},
                {
                    logout: {method: 'GET', headers: {'Authorization': 'Token ' + token}}
                }
            )
        }
    }
});