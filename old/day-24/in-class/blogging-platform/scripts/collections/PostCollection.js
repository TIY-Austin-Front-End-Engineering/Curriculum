var PostCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://tiny-pizza-server.herokuapp.com/collections/aaron-blog-post'
});