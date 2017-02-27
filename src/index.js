(function ( exports, global ) {
	'use strict';
	
	const numToStrMap = {
		0: 'ZERO',
		1: 'ONE',
		2: 'TWO',
		3: 'THREE',
		4: 'FOUR',
		5: 'FIVE',
		6: 'SIX',
		7: 'SEVEN',
		8: 'EIGHT',
		9: 'NINE',
	};
	
	const NAMES = {
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
		COMMAND: [ 91, 93, 224 ],
		COMMAND_LEFT: [ 91, 224 ],
		WINDOWS: [ 91, 224 ],
		COMMAND_RIGHT: [ 93, 224 ],
		WINDOWS_MENU: [ 93, 224 ],
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
	for ( let i = 65; i < 91; i++ ) NAMES[ `LETTER_${String.fromCharCode( i )}` ] = i;
	
	// function keys
	for ( let i = 1; i <= 19; i++ ) NAMES[ `F${i}` ] = i + 111;
	
	// numbers
	for ( let i = 0; i <= 9; i++ ) NAMES[ numToStrMap[ i ] ] = i + 48;
	
	// numeric keypad keys
	for ( let i = 0; i <= 9; i++ ) NAMES[ `NUMPAD_${numToStrMap[ i ]}` ] = i + 96;
	
	// reverse mapping
	const CODES = {};
	for ( let name in NAMES ) {
		let code = NAMES[ name ];
		
		if ( Array.isArray( code ) ) code.forEach( codeVal => CODES[ codeVal ] = name );
		else CODES[ code ] = name;
	}
	
	function keycode( search, returnAsCode = false ) {
		// Normalize from event object
		if ( search && typeof search === 'object' ) {
			let hasKeyCode = search.which || search.keyCode || search.charCode;
			if ( hasKeyCode ) search = hasKeyCode;
		}
		
		// Number codes
		if ( typeof search === 'number' ) return returnAsCode ? search : CODES[ search ];
		
		return NAMES[ String( search ).toUpperCase() ];
	};
	
	function is( key, search ) {
		let target = typeof key === 'number' ? key : NAMES[ String( key ).toUpperCase() ];
		
		return (
			search
				? keycode( search, true ) === target
				: curriedSearch => target === keycode( curriedSearch, true )
		);
	}
	
	keycode.is    = is;
	keycode.names = NAMES;
	keycode.codes = CODES;
	
	if ( exports ) module.exports = keycode;
	else if ( global ) global.keycode = keycode;
	
	return keycode;
}(
	typeof module === "object" && typeof module.exports === "object"
	, typeof window !== "undefined" ? window : null
));
