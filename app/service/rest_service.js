userApp.factory('rest_angular', ['Restangular', function (Restangular) {
    return {
        login: function (email, password) {
            return Restangular.all('login').post({
                email: email,
                password: password
            });
        },
        add_user: function (user) {
            return Restangular.all('user').post(user);
        },
        get_user: function (token, user_id) {
            return Restangular.one('user', user_id).get({}, {
                'Authorization': 'Token ' + token
            });
        },
        update_user: function (token, user_id, user) {
            return Restangular.one('user', user_id).patch(user, {}, {
                'Authorization': 'Token ' + token
            });
        },
        logout: function (token) {
            return Restangular.one('logout').get({}, {
                'Authorization': 'Token ' + token
            });
        }
    }
}]);