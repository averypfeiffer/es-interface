'use strict';
/* dependencies */

/* local classes */
/* instansiated */

/**
 * Addon:
 * @desc the base class for all injected addons
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Addon = function () {
	function Addon() {
		_classCallCheck(this, Addon);

		/* init props */
		this.funcs = new Object();
	}

	_createClass(Addon, [{
		key: 'deps',
		value: function deps() {
			/* preserve context */
			var _this = this;

			return _this.funcs;
		}
	}]);

	return Addon;
}();

module.exports = Addon;
