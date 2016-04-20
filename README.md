# requirejs-global
A RequireJS plugin for waiting global variables.
# examples
Waiting a global variable, e.g. `$` object of jQuery:
```javascript
define(["global!$"], function ($) {
    console.log("got $: " + $);
});
```
Waiting a property of a global variable:
```javascript
define(["global!$.fn.jquery"], function (version) {
    console.log("got $.fn.jquery: " + version);
});
```
Also can be used in `map` and `shim` configurations of RequireJS:
```javascript
{
    map: {
        "*": {
            "jquery": "global!$"
        }
    },
    shim: {
        "a.fake.jquery.plugin": [
            "global!$"
        ]
    }
}
```
