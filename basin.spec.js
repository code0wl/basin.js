const Basin = x => ({
    tap: f => Basin(f(x)),
    drop: f => f(x)
});

test('should work with numbers', () => {

    const calculateTotal = initial =>
        Basin(initial)
        .tap(s => s * .21) // add tax
        .tap(s => s + 12) // shipping costs
        .drop(total => initial + total);

    const result = calculateTotal(100);

    expect(result).toBe(133);

});

test('should work with strings', () => {

    const combineAllTheThings = initial =>
        Basin(initial)
        .drop(s => s + ' World') // add tax

    const result = combineAllTheThings('Hello');

    expect(result).toBe('Hello World'); //?

});