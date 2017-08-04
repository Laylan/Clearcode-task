(function(){
  var app = angular.module('myRedditApp', ['app-directives']);
console.log("articles Ctrl11");
  app.controller('RedditController', function($scope, $http){
    console.log("reddits Ctrl");
    $http.get("https://www.reddit.com/r/pics/new.json?sort=new&limit=100")
    .success(function(response) {
      console.log("http get success");
      console.log($scope);
    })
    .error(function(returnData) {
      console.log("error Http", returnData);
    });
  });
  //
  // var articles = [
  //   {
  //     title : 'Dogs',
  //     content : 'Whoof, Whoof, Whoof',
  //   },
  //   {
  //     title: "Cats",
  //     content: "Miau Miau",
  //   } "http://www.reddit.com/r/subreddit/new.json?sort=new"
  // ];
})();
