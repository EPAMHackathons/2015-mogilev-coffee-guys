'use strict';

angular.module('ideaApp')
  .controller('IdeaCtrl', function($scope, $stateParams, $http, socket, Idea, Auth) {

    $scope.isAdmin = Auth.isAdmin;
    $scope.alerts = [];

    Idea.getIdea().success(function(idea) {
      $scope.idea = idea;
      $scope.isOwner = function() {
        return Auth.getCurrentUser._id === $scope.idea.creator;
      };
      socket.syncUpdates('idea', $scope.idea);
    });

    $scope.update = function(form) {
      $scope.submitted = true;
      if (form.$valid) {
        Idea.updateIdea($scope.idea).success(function() {
          $scope.alerts.push({
            type: 'success',
            msg: 'Idea successfully updated.'
          });
        }).error(function(data) {
          $scope.alerts.push({
            type: 'danger',
            msg: data
          });
        });
      }
    }

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('idea');
    });

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.addComment = function(comment) {
      alert(comment);
    };

    $scope.up = function(comment) {
      comment.rating = comment.rating + 1;
      idea.votes.push({
            id : Auth.getCurrentUser()._id,
            name : Auth.getCurrentUser().name
      });
      Idea.updateComment(comment);
    };

    $scope.down = function(comment) {
      comment.rating = comment.rating - 1;
      Idea.updateIdea(idea);
    };

  });
