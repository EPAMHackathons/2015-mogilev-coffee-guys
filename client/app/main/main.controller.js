'use strict';

angular.module('ideaApp')
  .controller('MainCtrl', function ($scope, socket, Idea) {
    $scope.ideas = [];

    Idea.getIdeas().success(function(ideas) {
      $scope.ideas = ideas;
      socket.syncUpdates('idea', $scope.ideas);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('idea');
    });
    
    $scope.up = function(idea) {
      idea.rating = idea.rating + 1;
      Idea.updateIdea(idea);
    };
    
    $scope.down = function(idea) {
      idea.rating = idea.rating - 1;
      Idea.updateIdea(idea);
    };
    
  });
