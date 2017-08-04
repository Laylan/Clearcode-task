(function (){
  var app = angular.module('app-directives', []);

  app.directive("articlesView", function () {
    console.log("app-directives");
    var articlesss = [
      {
        title : 'Dogs',
        author : 'Whoof, Whoof, Whoof',
     },
      {
        title: "Cats",
        author: "Miau Miau",
      }
    ];
    return {
      restrict: "E",
      templateUrl: "views/articles-view.html",
      controller: function($http) {
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
      },
      controllerAs: "reddit",
    };
  });

  app.directive("articleView", function () {
    console.log("#####");
    return {
      restrict: "E",
      templateUrl: "views/article-view.html"
    };
  });

})();
