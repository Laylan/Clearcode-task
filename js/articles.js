(function (){
  var app = angular.module('app-directives', ['ngRoute']);

  app.config(['$routeProvider', '$locationProvider',
    function($routeProvider) {
      $routeProvider
        .when('/views/article-view', {
    templateUrl: '/views/article-view.html'
    // controller: 'AddOrderController'
  })
        .when('/views/articles-view', {
      templateUrl: '/views/articles-view.html',
      controller: "ArticlesCtrl",
      controllerAs: "reddit",
      })
      .otherwise({
     redirectTo: 'views/articles-view'
         });
  }]);

  // app.directive("articlesView",
  // function () {
  //   return {
  //     restrict: "E",
  //     templateUrl: "/views/articles-view.html",
  //     controller: "ArticlesCtrl",
  //     controllerAs: "reddit",
  //   };
  // });

app.controller("ArticlesCtrl", function($scope, $route, $http, $location) {
  //this.reddits = articlesss;
  var vm = this;
  vm.reddits = [];
  $http.get("http://www.reddit.com/new.json?sort=new")
  .then(function FetchNewReddits(returnedData) {
    console.log(returnedData.data.data.children);
    vm.reddits = returnedData.data.data.children;
  },
  function FetchNewRedditsError(error) {
   console.log(error);
 });

 $scope.showArticle = function() {
   console.log("Change view func");
   console.log($route);
  //  $scope.isArticle = true;
   $location.url('/views/article-view');
 };

//  $routeProvider.when('/views/article-view', {
//    templateUrl: 'views/article-view.html'
// });
});

  // app.directive("articleView", function () {
  //   console.log("#####");
  //   return {
  //     restrict: "E",
  //     templateUrl: "views/article-view.html"
  //   };
  // });

})();
