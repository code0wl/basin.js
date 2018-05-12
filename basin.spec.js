const Basin = x => ({
    tap: f => Basin(f(x)),
    drop: f => f(x)
});

test('checks if all functionality of Basin works', () => {

    const calculateTotal = (initial) =>
        Basin(initial)
        .tap(s => s * .21) // add tax
        .tap(s => s + 12) // shipping costs
        .drop(total => initial + total);

    const result = calculateTotal(100);

    expect(result).toBe(133);

});