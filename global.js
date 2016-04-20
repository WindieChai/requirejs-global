/* eslint no-magic-numbers: 0 */
define(function () {
    "use strict";

    function ensure (parent, name, callback) {
        var names = name.split("."),
            actualName = names[0],
            timeout = 100;

        if (typeof parent[actualName] === "undefined") {
            setTimeout(function () {
                ensure(parent, name, callback);
            }, timeout);
        } else if (names.length === 1) {
            callback(parent[actualName]);
        } else {
            names.shift();
            ensure(parent[actualName], names.join("."), callback);
        }
    }

    function load (name, req, onload) {
        ensure(window, name, onload);
    }

    return {
        load: load
    };
});
