import Backbone from 'backbone';

import UnicornModel from '../models/unicorn.js';

const UnicornsCollection = Backbone.Collection.extend({
  model: UnicornModel,
  url: 'http://tiny-za-server.herokuapp.com/collections/unicorns'
})

let unicorns = new UnicornsCollection();

export default unicorns;
