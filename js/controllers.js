(function (){
  var app = angular.module('appControllers', ['ngRoute']);

  app.factory('paramsService', function(){
    var self = this;
    //self.article = {};
    return {
      getParam: function() {
        return self.article;
      },
      setParam: function(value) {
          self.article = value;
      }
    }

  });
  app.controller("ArticlesCtrl", ['$scope', '$http', '$location', '$window','$routeParams', 'paramsService',
  function($scope, $http, $location, $window, $routeParams, paramsService) {
  //this.reddits = articlesss;
    var vm = this;
    vm.reddits = [];
    vm.article_id = "";
    $http.get("http://www.reddit.com/r/Articles/new.json?sort=new")
    .then(function FetchNewReddits(returnedData) {
      console.log(returnedData.data.data.children);
      vm.reddits = returnedData.data.data.children;
    },
    function FetchNewRedditsError(error) {
     console.log(error);
    });

    $scope.showArticle = function(article) {
     console.log("Change view func");
     paramsService.setParam(article);
     $window.localStorage.setItem(article, article);
     console.log($window.localStorage.getItem(article));
     console.log(paramsService);
     $scope.isArticle = true;
     $location.url('/views/article-view');
    };
  }]);

  app.controller("ArticleCtrl", ['$scope', '$http', '$location','paramsService',
  function($scope,$http, $location, paramsService) {
    var vm = this;
    vm.article = {};
    vm.msg = "";
    vm.article = paramsService.getParam();
    console.log(vm.article);
    if(!vm.article.data.selfText) {
        vm.msg = "This is an article in external domain. You can see the article using a link:";
    };

    $scope.backToArticles = function () {
      console.log("Back to main view");
      $location.url('/views/articles-view');
    }
  }]);

})();
