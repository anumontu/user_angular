userApp.service('check_login_service', function () {
    return {
        checkIfLoggedIn: function ($location, localStorageService) {
            var token_key = localStorageService.get('token_key');
            var loggedin_user_id = localStorageService.get('user_id');
            if(token_key !=null && localStorageService != null){
                $location.url('/userDetail');
            }
        }
    }
});