'use strict';

angular.module('ideaApp')
  .factory('Category', function Category($http, $stateParams) {
    return {
      getCategories: function() {
        return $http.get('/api/v1/categories');
      },
      getCategory: function() {
        return $http.get('/api/v1/categories/' + $stateParams.id);
      },
      addCategory: function(category) {
        return $http.post('/api/v1/categories', {
          title: category.title
        });
      },
      updateCategory: function(category) {
        return $http.put('/api/v1/categories/' + category._id, {
          title: category.title
        });
      },
      deleteCategory: function(category) {
        return $http.delete('/api/v1/categories/' + category._id);
      }
    };
  });
