'use strict';

angular.module('ideaApp')
  .factory('Idea', function Idea($http, $stateParams, Auth) {
    return {
      getIdeas: function() {
        return $http.get('/api/v1/ideas');
      },
      getIdea: function() {
        return $http.get('/api/v1/ideas/' + $stateParams.id);
      },
      getMyIdeas: function() {
        return $http.get('/api/v1/users/' + Auth.getCurrentUser()._id + '/ideas');
      },
      addIdea: function(idea) {
        return $http.post('/api/v1/ideas', {
          category: idea.category.title,
          summary: idea.summary,
          images: idea.images,
          description: idea.description,
          latitude: idea.latitude,
          longitude: idea.longitude,
          creator: {
            id : Auth.getCurrentUser()._id,
            name : Auth.getCurrentUser().name
          },
          rating: 0,
          created: new Date()
        });
      },
      updateIdea: function(idea) {
        return $http.put('/api/v1/ideas/' + idea._id, idea);
      },
      deleteIdea: function(idea) {
        return $http.delete('/api/v1/ideas/' + idea._id);
      }
    };
  });
