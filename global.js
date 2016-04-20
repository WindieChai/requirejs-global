/* eslint no-magic-numbers: 0 */
define(function () {
    "use strict";

    function ensure (parent, names, callback) {
        var actualName = names[0],
            timeout = 100;

        if (typeof parent[actualName] === "undefined") {
            setTimeout(function () {
                ensure(parent, names, callback);
            }, timeout);
        } else if (names.length === 1) {
            callback(parent[actualName]);
        } else {
            names.shift();
            ensure(parent[actualName], names, callback);
        }
    }

    function load (name, req, onload) {
        ensure(window, name.split("."), onload);
    }

    return {
        load: load
    };
});
