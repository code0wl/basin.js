var Basin = function (x) {
    return ({
        tap: function (f) { return Basin(f(x)) },
        drop: function (f) { return f(x) }
    });
};