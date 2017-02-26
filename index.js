'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};(function(){'use strict';for(var b={BACKSPACE:8,TAB:9,CLEAR:12,RETURN:13,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,OPTION:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESCAPE:27,SPACE_BAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,COMMAND_LEFT:91,WINDOWS:91,COMMAND_RIGHT:93,WINDOWS_MENU:93,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_MINUS:109,NUMPAD_HYPHEN:109,NUMPAD_PERIOD:110,NUMPAD_FORWARD_SLASH:111,NUM_LOCK:144,SCROLL_LOCK:145,MY_COMPUTER:182,MY_CALCULATOR:183,SEMICOLON:186,EQUALS:187,COMMA:188,DASH:189,MINUS:189,HYPHEN:189,PERIOD:190,FORWARD_SLASH:191,BACKTICK:192,LEFT_BRACKET:219,BACKSLASH:220,RIGHT_BRACKET:221,APOSTROPHE:222},e=65;91>e;e++)b['LETTER_'+String.fromCharCode(e)]=e;for(var e=1;19>=e;e++)b['F'+e]=e+111;for(var e=0;9>=e;e++)b[a[e]]=e+48;for(var e=0;9>=e;e++)b['NUMPAD_'+a[e]]=e+96;var c={};for(var e in b)c[b[e]]=e;var d=function keycode(e){var f=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(e&&'object'===('undefined'==typeof e?'undefined':_typeof(e))){var h=e.which||e.keyCode||e.charCode;h&&(e=h)}if('number'==typeof e)return f?e:c[e];var g=e+'';return b[g.toUpperCase()]};if(d.is=function(e,f){var g='number'==typeof e?e:b[e+''];return f?d(f)===g:function(h){return g===d(h,!0)}},d.names=b,d.codes=c,'object'===('undefined'==typeof module?'undefined':_typeof(module))&&'object'===_typeof(module.exports))module.exports=d;else if('undefined'!=typeof window)window.keycode=d;else return d})();