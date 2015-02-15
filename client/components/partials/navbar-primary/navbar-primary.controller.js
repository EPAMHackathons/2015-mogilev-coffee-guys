'use strict';

angular.module('ideaApp')
  .controller('NavbarPrimaryCtrl', function ($scope, Auth, $location) {

    $scope.isCollapsed = true;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.isAdmin = Auth.isAdmin;
    $scope.isLoggedIn = Auth.isLoggedIn;
    
    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
    
    $scope.addIdea = function() {
      $location.path('/add');
    };
    
  });