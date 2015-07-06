# Express

### You should already know about


## Setting up an express project

1. Install the express generator
	* `npm install -g express-generator`
1. cd into your projects folder
1. Create a new project folder
	* `mkdir express`
1. cd into that specific project folder
	* `cd express`
1. Run the generator
	* `express`

## Adding routes

Backend routes specify what code should be run when you first load a new page. The express generator gives you two routes by default: your home page (/) and a users page (/users). You can see your routes in the `app.js` file:

```js
// ...

app.use('/', routes);
app.use('/users', users);

// ...
```

You'll notice that 