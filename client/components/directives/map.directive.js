'use strict';

angular.module('ideaApp')
  .directive('map', function() {
    return {
      restrict:'A',
      templateUrl: 'components/partials/map/map.html',
      link: function(scope, Idea) {
      	scope.point = {
    		geometry:{
        		type:'Point',
        		coordinates:[30.33,53.91]
    		},
    		properties:{
    			balloonContentHeader: "Идея",
            	balloonContentBody: "Описание идеи",
            	balloonContentFooter: "Адресс идеи",
            	hintContent: "Идея"
    		}
		};
      }
    };
});
