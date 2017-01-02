'use strict';
/* dependencies */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* local classes */
/* instansiated */

/**
 * Loader:
 * @desc The class responsible for loading the 'extends' command dependency
 */
var Loader = function () {
	function Loader() {
		/* run parent constructor */

		/* init props */

		_classCallCheck(this, Loader);
	}

	_createClass(Loader, [{
		key: 'load',
		value: function load(superClass) {
			for (var _len = arguments.length, deps = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				deps[_key - 1] = arguments[_key];
			}

			/* preserve context */
			var _this = this;
			console.log("building super class...");
			console.log('loading dependencies...');
			deps.forEach(function (dep, idx) {
				console.log(dep.toString());

				var deps = dep.deps();
				console.log(deps);

				for (var prop in deps) {
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
	}]);

	return Loader;
}();

module.exports = new Loader().load;
