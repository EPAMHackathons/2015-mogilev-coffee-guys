'use strict';

angular.module('ideaApp')
  .controller('MainCtrl', function ($scope, socket, Idea, User, $filter) {
    $scope.ideas = [];

    Idea.getIdeas().success(function(ideas) {
      $scope.ideas = ideas;

      angular.forEach(ideas, function(idea) {
        var isNew = false;
        var now = new Date();
        now.setDate(now.getDate() - 5);
        if(new Date(idea.created).getTime() > now.getTime()) {
          isNew = true;
        }
        idea.creator = User.get(idea.creator);
        idea.isNew = isNew;
      });

      socket.syncUpdates('idea', $scope.ideas);
    });

    $scope.onlyNew = false;

    $scope.showNew = function() {
      $scope.onlyNew = true;
    }

    $scope.showAll = function() {
      $scope.onlyNew = false;
    }

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

    $scope.up = function(idea) {
      $scope.ideas = $filter()
    };

  });
