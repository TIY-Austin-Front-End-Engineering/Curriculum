$(document).on('ready', function() {
	var appView = new AppView();
});

// 1. Page loads
// 2. jQuery "ready" event gets fired
// 3. anonymous function gets run
// 		4. Use the AppView class to create a new view (appView) object. (line 2 of this file)
// 5. The initialize method on our appView object runs