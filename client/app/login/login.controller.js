'use strict';

angular.module('ideaApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};
    $scope.alerts = [];
    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          $location.path('/');
        })
        .catch( function(err) {
          $scope.alerts.push({type: 'danger', msg: err.message});
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
