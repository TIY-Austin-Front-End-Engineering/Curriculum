// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import Backbone from 'backbone';
import $ from 'jquery';

const basicView = Backbone.View.extend({
  initialize: function(url, linkName) {
    this.url = url;
    this.linkName = linkName;
  },
  template: function() {
    return `<a href="${this.url}">${this.linkName}</a>
  hi
  `
  },
  tagName: 'section',
  render: function() {
    this.$el.html(this.template());
    $('body').append(this.el)
  }
});

var googleLink = new basicView('http://google.com', 'google');
var tiyLink = new basicView('http://theironyard.com', 'tiy');

googleLink.render();
tiyLink.render();
