'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (exports, global) {
	'use strict';

	var numToStrMap = {
		0: 'ZERO',
		1: 'ONE',
		2: 'TWO',
		3: 'THREE',
		4: 'FOUR',
		5: 'FIVE',
		6: 'SIX',
		7: 'SEVEN',
		8: 'EIGHT',
		9: 'NINE'
	};

	var NAMES = {
		BACKSPACE: 8,
		TAB: 9,
		CLEAR: 12,
		RETURN: 13,
		ENTER: 13,
		SHIFT: 16,
		CONTROL: 17,
		ALT: 18,
		OPTION: 18,
		PAUSE_BREAK: 19,
		CAPS_LOCK: 20,
		ESCAPE: 27,
		SPACE_BAR: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40,
		INSERT: 45,
		DELETE: 46,
		COMMAND: [91, 93, 224],
		COMMAND_LEFT: [91, 224],
		WINDOWS: [91, 224],
		COMMAND_RIGHT: [93, 224],
		WINDOWS_MENU: [93, 224],
		NUMPAD_ASTERISK: 106,
		NUMPAD_PLUS: 107,
		NUMPAD_DASH: 109,
		NUMPAD_MINUS: 109,
		NUMPAD_HYPHEN: 109,
		NUMPAD_PERIOD: 110,
		NUMPAD_FORWARD_SLASH: 111,
		NUM_LOCK: 144,
		SCROLL_LOCK: 145,
		MY_COMPUTER: 182,
		MY_CALCULATOR: 183,
		SEMICOLON: 186,
		EQUALS: 187,
		COMMA: 188,
		DASH: 189,
		MINUS: 189,
		HYPHEN: 189,
		PERIOD: 190,
		FORWARD_SLASH: 191,
		BACKTICK: 192,
		LEFT_BRACKET: 219,
		BACKSLASH: 220,
		RIGHT_BRACKET: 221,
		APOSTROPHE: 222
	};

	/***************************** Dynamic Allocation *****************************/

	// letters
	for (var i = 65; i < 91; i++) {
		NAMES[String.fromCharCode(i)] = i;
	} // function keys
	for (var _i = 1; _i <= 19; _i++) {
		NAMES['F' + _i] = _i + 111;
	} // numbers
	for (var _i2 = 0; _i2 <= 9; _i2++) {
		NAMES[numToStrMap[_i2]] = _i2 + 48;
	} // numeric keypad keys
	for (var _i3 = 0; _i3 <= 9; _i3++) {
		NAMES['NUMPAD_' + numToStrMap[_i3]] = _i3 + 96;
	} // reverse mapping
	var CODES = {};

	var _loop = function _loop(name) {
		var code = NAMES[name];

		if (Array.isArray(code)) code.forEach(function (codeVal) {
			return CODES[codeVal] = name;
		});else CODES[code] = name;
	};

	for (var name in NAMES) {
		_loop(name);
	}

	function getCodeFromName(search) {
		var RE = /\s+/g;
		var name = String(search).toUpperCase();
		if (RE.test(name)) name = name.replace(RE, '_');

		return NAMES[name];
	}

	function keycode(search) {
		var returnAsCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		// Normalize from event object
		if (search && (typeof search === 'undefined' ? 'undefined' : _typeof(search)) === 'object') {
			var hasKeyCode = search.which || search.keyCode || search.charCode;
			if (hasKeyCode) search = hasKeyCode;
		}

		// Number codes
		if (typeof search === 'number') return returnAsCode ? search : CODES[search];

		return getCodeFromName(search);
	};

	function is(key, search) {
		var target = typeof key === 'number' ? key : getCodeFromName(key);

		return search ? keycode(search, true) === target : function (curriedSearch) {
			return target === keycode(curriedSearch, true);
		};
	}

	keycode.is = is;
	keycode.names = NAMES;
	keycode.codes = CODES;

	if (exports) module.exports = keycode;else if (global) global.keycode = keycode;

	return keycode;
})((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object", typeof window !== "undefined" ? window : null);