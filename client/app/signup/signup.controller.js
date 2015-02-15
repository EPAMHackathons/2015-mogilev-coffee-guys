'use strict';

angular.module('ideaApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.alerts = [];

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.name,
          email: $scope.email,
          password: $scope.password
        })
        .then( function() {
          $location.path('/');
        })
        .catch(function(err) {
          err = err.data;
          angular.forEach(err.errors, function(error) {
            $scope.alerts.push({type: 'danger', msg: error.message});
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
    
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
    
  });
