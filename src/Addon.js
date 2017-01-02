'use strict';
/* dependencies */

/* local classes */
/* instansiated */

/**
 * Addon:
 * @desc the base class for all injected addons
 */
var Addon = class Addon {
	constructor() {

		/* init props */
		this.funcs = new Object();
	}

	deps() {
		/* preserve context */
		var _this = this;

		return _this.funcs;
	}
};

module.exports = Addon;