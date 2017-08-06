(function(){
  var app = angular.module('myRedditApp', ['ngRoute','appControllers']);
  app.config(['$routeProvider', '$locationProvider',
    function($routeProvider) {
      $routeProvider
        .when('/views/article-view', {
          templateUrl: '/views/article-view.html',
          controller: 'ArticleCtrl',
          controllerAs: 'view'
        })
        .when('/views/articles-view', {
          templateUrl: '/views/articles-view.html',
          controller: 'ArticlesCtrl',
          controllerAs: 'reddit',
        })
        .otherwise({
          redirectTo: 'views/articles-view'
        });
      }
    ]);


})();
