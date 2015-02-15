'use strict';

angular.module('ideaApp')
  .controller('IdeaCtrl', function ($scope, $stateParams, $http, socket, Idea, Auth) {
    
    $scope.isAdmin = Auth.isAdmin;
    
    Idea.getIdea().success(function(idea) {
      $scope.idea = idea;
      $scope.isOwner = function() {
        return Auth.getCurrentUser._id === $scope.idea.creator;
      };
      socket.syncUpdates('idea', $scope.idea);
    });
    
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('idea');
    });
    
  });