(function (){
  var app = angular.module('app-directives', []);
    console.log("app-directives111");

  app.directive("articlesView", function () {
    console.log("app-directives");
    var articles = [
      {
        title : 'Dogs',
        content : 'Whoof, Whoof, Whoof',
      },
      {
        title: "Cats",
        content: "Miau Miau",
      }
    ];
    
    return {
      restrict: "E",
      templateUrl: "views/articles-view.html",
      controller: function() {
        console.log("articles Ctrl");
        this.articles = articles;
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
