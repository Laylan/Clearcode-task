Junior Front-end Dev App <br/>
Shows a list of articles from Reddit.com, you can read them if they are in reddit.com domain. Otherwise there is a link to an artcile.<br/>
There is a form to comment an article but it doesn't really do anything.

To start a serwer:
1. Download and install nodeJs
2. Command line: npm install -g http-server
3. In command line to start serwer: http-server (if problem see at google how to start a http-server)
4. In a web browser: localhost:8080

App uses:
- Bootstrap
- AbgularJS
- jQuery

Project Description:
- folder views contain view of all articles (articles-view.html) and view of a specific article(article-view.html)
- folder js contain basic js files like angular.js, boostrap.js and also
  - app.js (main functionality of app - main module of app)
  - controllers.js (contains two controllers of app one for list of articles and one to controle the view of specific article)
  - service.js (contains the factory 'paramsService' which help the send objects between controllers)
