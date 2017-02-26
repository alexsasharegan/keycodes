# Keycodes
Started as my own simple map of named keycode constants, but evolved to my preferred semantics of this well done package: **[timoxley/keycode](https://github.com/timoxley/keycode)**. Now it's not much more than a personal fork of this package.


## Installation

#### npm

```sh
npm install @alexsasharegan/keycodes
```

## Example

```js
const keycode = require('@alexsasharegan/keycodes');

document.addEventListener('keydown', e => console.log(`You pressed: ${keycode(e)}`) );
```

## API

`keycode` tries to make an intelligent guess as to what
you're trying to discover based on the type of argument
you supply.

##keycode(keycode:Event)

Returns the name of the key associated with this event.

```js
document.addEventListener('keyup', e => console.log(keycode(e)) ); // prints name of key
```

[Due to the keypress event being weird](https://github.com/timoxley/keycode/wiki/wtf%3F-keydown,-keyup-vs-keypress),`keycodes `currently does not support the `keypress` event, but this should not be an issue as `keydown` and `keyup` work perfectly fine.

##keycode(keycode:Number)

Returns the constant name of a given numeric keycode.

```js
keycode(13); // => 'ENTER'
keycode(37); // => 'LEFT_ARROW'
```

##keycode(name:String)

Returns the numeric keycode for given key name.

```js
keycode('Enter'); // => 13

// keycode is not case sensitive
keycode('eNtEr'); // => 13
```


## Maps

Key code/name maps are available directly as `keycode.codes` and `keycode.names` respectively.

```js
keycode.names[13]; // => 'enter'
keycode.codes.ENTER; // => 13
```

## Credit
[timoxley/keycode](https://github.com/timoxley/keycode)