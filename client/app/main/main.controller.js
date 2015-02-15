'use strict';

angular.module('ideaApp')
  .controller('MainCtrl', function ($scope, socket, Idea, Category, $filter) {
    $scope.ideas = [];
    $scope.categories = [];

    Category.getCategories().success(function(categories){
      $scope.categories = categories;
    });

    Idea.getIdeas().success(function(ideas) {
      $scope.ideas = ideas;

      angular.forEach(ideas, function(idea) {
        var isNew = false;
        var now = new Date();
        now.setDate(now.getDate() - 5);
        if(new Date(idea.created).getTime() > now.getTime()) {
          isNew = true;
        }
        idea.isNew = isNew;
      });

      socket.syncUpdates('idea', $scope.ideas);
    });

    $scope.onlyNew = false;
    $scope.category = null;

    $scope.showNew = function() {
      $scope.category = null;
      $scope.onlyNew = true;
    }

    $scope.showAll = function() {
      $scope.category = null;
      $scope.onlyNew = false;
    }

    $scope.sortByCategory = function(category) {
        $scope.onlyNew = false;
        $scope.category = category;
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
  });
