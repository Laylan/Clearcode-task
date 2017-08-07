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
      },
      setPage: function(articles, page) {
        self.articles = articles;
        self.page = page;
      },
      getArticles: function() {
        return self.articles;
      },
      getPage: function() {
        console.log(self.page);
        return self.page;
      }
    }

  });
  app.controller("ArticlesCtrl", ['$scope', '$http', '$location', '$window','$routeParams', 'paramsService',
  function($scope, $http, $location, $window, $routeParams, paramsService) {
  //this.reddits = articlesss;
    var vm = this;
    vm.reddits = [];
    vm.article_id = "";
    vm.page = 0;
    if(paramsService.getArticles()) {
      vm.reddits = paramsService.getArticles();
      vm.page = paramsService.getPage();
    }
    else {
      $http.get("http://www.reddit.com/r/Articles/new.json?sort=new")
      .then(function FetchNewReddits(returnedData) {
        console.log(returnedData.data.data.children);
        vm.reddits = returnedData.data.data.children;
      },
      function FetchNewRedditsError(error) {
       console.log(error);
      });
    }


    $scope.showArticle = function(article) {
     paramsService.setParam(article);
     paramsService.setPage(vm.reddits, vm.page);
     this.article = article;
    //  $window.localStorage.setItem(title, this.article.data.title);
    //  $window.localStorage.setItem(content, this.article.data.selfText);
    //  $window.localStorage.setItem(url, this.article.data.url);
     console.log($window.localStorage.getItem(article));
     console.log(paramsService);
     $scope.isArticle = true;
     $location.url('/views/article-view');
    };

    $scope.nextPage = function() {
      vm.page += 25;
      var after = vm.reddits[24].data.name;
      console.log(vm.page);
      $http.get("http://www.reddit.com/r/Articles/new.json?count=" + vm.page + "&after=" + after)
      .then(function FetchNewReddits(returnedData) {
        console.log(returnedData.data.data.children);
        vm.reddits = returnedData.data.data.children;
      },
      function FetchNewRedditsError(error) {
       console.log(error);
      });
    }
      $scope.previousPage = function() {
        vm.page -= 25;
        var before = vm.reddits[0].data.name;
        console.log(vm.page);
        $http.get("http://www.reddit.com/r/Articles/new.json?count=" + vm.page + "&before=" + before)
        .then(function FetchNewReddits(returnedData) {
          console.log(returnedData.data.data.children);
          vm.reddits = returnedData.data.data.children;
        },
        function FetchNewRedditsError(error) {
         console.log(error);
        });
    }
  }]);

  app.controller("ArticleCtrl", ['$scope', '$http', '$location', '$window','paramsService',
  function($scope,$http, $location, $window, paramsService) {
    var vm = this;
    vm.article = {};
    vm.msg = "";
    vm.local = {};
    vm.article = paramsService.getParam();
    console.log(vm.article);
    if(vm.article === undefined) {
      alert("page reloaded!");
      console.log($window.localStorage);
      // vm.local.title = $window.localStorage.getItem(title);
      // vm.local.content = $window.localStorage.getItem(content);
      // vm.local.url = $window.localStorage.getItem(url);
    }
    else {
      if(!vm.article.data.selfText) {
        vm.msg = "This is an article in external domain. You can see the article using a link:";
      }
    };
    console.log($scope);
    $scope.backToArticles = function () {
      console.log("Back to main view");
      $location.url('/views/articles-view');
    }
  }]);

})();
