angular.module('ideaApp')
  .filter('newIdeaFilter', function() {
    return function(ideas, onlyNew){
      if(!onlyNew) return ideas;
      var newIdeas = [];
      angular.forEach(ideas, function(idea) {
        if(idea.isNew) {
          newIdeas.push(idea);
        }
      });

      return newIdeas;
    };
  })
  .filter('categoryFilter', function() {
        return function(ideas, category){
            if(category == null) return ideas;
            var newIdeas = [];
            angular.forEach(ideas, function(idea) {
                if(idea.category == category) {
                    newIdeas.push(idea);
                }
            });

            return newIdeas;
        };
    });
