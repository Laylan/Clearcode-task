(function() {
  var app = angular.module('appService', ['ngRoute']);
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
})();
