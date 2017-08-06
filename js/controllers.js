(function (){
  var app = angular.module('appControllers', ['ngRoute']);

  app.factory('paramsService', function(){
    var article_url = "url";
    this.article_url = article_url;
return {
  getParam: function() {
    return this.article_url;
  },
  setParam: function(value) {
      this.article_url = value;
    return article_url;
  }
}

  });
  app.controller("ArticlesCtrl", ['$scope', '$http', '$location', '$routeParams', 'paramsService',
  function($scope, $http, $location, $routeParams, paramsService) {
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
     var url = article.data.permalink;
     $scope.isArticle = true;
     $location.url('/views/article-view');
    };
  }]);

  app.controller("ArticleCtrl", ['$scope', '$http', '$location','paramsService',
  function($scope,$http, $location, paramsService) {
    var vm = this;
    vm.article = {};
    var article_url = paramsService.getParam();
    // "https://www.reddit.com" + article_url
  //  https://www.reddit.com/r/CarFans/comments/6rzq54/1969_alfa_romeo_giulia_super_2l_my_new_dream_car.json
    $http.get("http://voebeheard.com/wh%d0%b5n-d%d0%be-%d1%83%d0%beu-kn%d0%bew-is-th%d0%b5-right-time-t%d0%be-quit-y%d0%beur-j%d0%beb-and-g%d0%be-full-tim%d0%b5.json")
    .then(function FetchNewReddits(returnedData) {
      console.log(returnedData);
    //  vm.reddits = returnedData.data.data.children;
    },
    function FetchNewRedditsError(error) {
     console.log(error);
     alert("No acces to this article!");
    });

    $scope.backToArticles = function () {
      console.log("Back to main view");

      $location.url('/views/articles-view');
    }
  }]);

})();
