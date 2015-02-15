'use strict';

angular.module('ideaApp')
  .controller('AddCtrl', function($scope, $location, Category, Idea) {

    $scope.idea = {};
    $scope.idea.images = [];
    $scope.alerts = [];

    Category.getCategories().success(function(categories) {
      $scope.categories = categories;
    });

    $scope.addIdea = function(form) {    
        $scope.submitted = true;
        if (form.$valid) {
            Idea.addIdea($scope.idea).success(function() {
              $location.path('/');
            }).error(function(data) {
                $scope.alerts.push({
                  type: 'danger',
                  msg: data
                });
              });
          }
    };

    $scope.uploader = {
      controllerFn: function ($flow, $file, $message) {
        $scope.idea.images.push(JSON.parse($message).file);
      }
    };
    
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

  });
