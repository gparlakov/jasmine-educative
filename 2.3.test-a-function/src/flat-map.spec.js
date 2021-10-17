// load the polyfill
require('./flat-map');

describe("flatMap polyfill", () => {
    it("test case 1", () => {
        const numbers = [1, 2, 3, 4];
        const actual = numbers.flatMap(x => [x, x * 2]);
        expect(actual).toEqual([1, 2, 2, 4, 3, 6, 4, 8]);
    })

    it("test case 2", () => {
        const strings = ["it's Sunny in", "", "California always"];
        const actual = strings.flatMap(x => x.split(" "));
        expect(actual).toEqual(["it's", "Sunny", "in", "", "California", "always"]);
    })

    it("test case 3", () => {
        const numbers2 = [1, 2, 3, 4];
        const actual = numbers2.flatMap(x => [x * 2]);
        expect(actual).toEqual([2, 4, 6, 8]);
    })

    it("test case 4", () => {
        const actual = [1, 2, 3, 4].flatMap(x => [[x * 2]]);
        expect(actual).toEqual([[2], [4], [6], [8]]);
    })
})
