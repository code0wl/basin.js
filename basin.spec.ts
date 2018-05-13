import { Basin } from './basin';

test('should work with numbers', () => {

    const calculateTotal = (initial: number) =>
        Basin(initial)
            .tap((s: number) => s * .21) // add tax
            .tap((s: number) => s + 12) // shipping costs
            .drop((total: number) => initial + total);

    const result = calculateTotal(100);

    expect(result).toBe(133);

});

test('should work with strings', () => {

    const combineAllTheThings = (initial: string) =>
        Basin(initial)
            .drop((s: string) => s + ' World')

    const result = combineAllTheThings('Hello');

    expect(result).toBe('Hello World');

});