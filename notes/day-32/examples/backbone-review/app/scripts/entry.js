// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import Backbone from 'backbone';

//model factory
const UnicornModel = Backbone.Model.extend({
  defaults: {
    name: '',
    power: '',
    color: ''
  }
});

const UnicornCollection = Backbone.Collection.extend({
  model: UnicornModel
});

//instance of a model
let amalthea = new UnicornModel({name: 'amalthea'});

//subscribe to changes on the model
amalthea.on('change', function() {
  console.log(amalthea.attributes);
});

//don't do this
// amalthea.name="Amalthea";
// amalthea.attributes.name="Amalthea";

//do do this
amalthea.set('age', '57')
// console.log(amalthea.get('age'))

let unicorns = new UnicornCollection();

//add a single model to a collection (model was already created)
unicorns.add(amalthea);

// add multiple models at once, and create in them int eh process
unicorns.add([{name: "sparkles", power: 'sparkling'},{},{},{}])

console.log(unicorns) //there are 5 unicorns in this unicorn collection now

// you might do something like this if you wanted to use data in your component:
//warning this code probably doesn't work! but it will give you an idea.
// <UnicornFriend model={unicorns.models[0].attributes}/>
