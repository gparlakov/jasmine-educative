// load the polyfill
require('./concat');

describe('concat polyfill', () => {
    it('test case 1', () => {
        const numbers = [1, 2, 3, 4];
        const actual = [].concatPolyfill(numbers);
        expect(actual).toEqual([1, 2, 3, 4]);
    });

    it('test case 2', () => {
        const number1 = 1;
        const number2 = 2;
        const actual = [].concatPolyfill(number1, number2);
        expect(actual).toEqual([1, 2]);
    });

    it('test case 3', () => {
        const numbers = [1, 2, 3, 4];
        const actual = [].concatPolyfill(numbers, 5, [6, 7]);
        expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
})
