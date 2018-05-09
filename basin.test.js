var Basin = function (x) {
    return ({
        tap: function (f) { return Basin(f(x)) },
        drop: function (f) { return f(x) }
    });
};

test('checks if all functionality of Basin works', () => {

    const calculateTotal = initial =>
        Basin(initial)
            .tap(s => s * .21) // add tax
            .tap(s => s + 12) // shipping costs
            .drop(total => initial + total)

    const result = calculateTotal(100);

    expect(result).toBe(133);

});