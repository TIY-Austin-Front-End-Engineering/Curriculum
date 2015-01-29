console.log(_.isArray('test'));		// false
console.log(_.isArray([]));			// true
console.log(_.isArray([1,2,3]));	// true
console.log(_.isBoolean(0));		// false
console.log(_.isBoolean(false));	// true
console.log(_.isDate(new Date()));	// true
console.log(_.isEmpty(null));		// true
console.log(_.isEmpty());			// true
console.log(_.isEmpty(0));			// true
console.log(_.isEmpty(false));		// true
console.log(_.isEmpty([]));			// true
console.log(_.isEmpty({}));			// true
// _.isFunction
// _.isNaN
// _.isNull
// _.isNumber
// _.isObject
// _.isString
// _.isUndefined

// Update day-10 homework to use lodash type checking