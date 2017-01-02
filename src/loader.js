'use strict';
/* dependencies */
import _ from 'lodash';
/* local classes */
/* instansiated */

/**
 * Loader:
 * @desc The class responsible for loading the 'extends' command dependency
 */
var Loader = class Loader {
	constructor() {
		/* run parent constructor */

		/* init props */
	}

	load(superClass, ...deps) {
		/* preserve context */
		var _this = this;
		console.log("building super class...");
		console.log(`loading dependencies...`);
		deps.forEach(function(dep, idx) {
			console.log(dep.toString());
		
			let deps = dep.deps();
			console.log(deps);

			for(var prop in deps) {
				superClass.prototype[prop] = deps[prop];
			}

			// for(var prop in deps) {
			// 	if(!(superClass.hasOwnProperty(prop)) {
			// 		console.log(prop);
			// 		console.log(deps[prop]);
			// 		/* apply the property to the object */
			// 		Object.defineProperty(superClass, prop, {
			// 		  enumerable: false,
			// 		  configurable: false,
			// 		  writable: false,
			// 		  value: deps[prop],
			// 		});
					
					
			// 	}
			// }
		});



		return superClass;
	}
};

module.exports = (new Loader()).load;