(function(){
  var app = angular.module('myRedditApp', ['app-directives']);
console.log("articles Ctrl11");
  app.controller('RedditController',['$scope' ,'$http', '$log', function($scope, $http, $log){
    console.log("reddits Ctrl");
    $http.get("http://www.reddit.com/new.json?sort=new")
    .then(function(success) {
      console.log("http get success");
      console.log($scope);
      console.log($log);
      console.log(success);
    });
    // .error(function(returnData) {
    //   console.log("error Http", returnData);
    // });
  } ]);
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
