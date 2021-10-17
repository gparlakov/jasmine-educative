
/**
 * Map function (A polyfill for Array.prototype.map) that takes an array and maps over its items and returns a new array
 * @param {Array} arr the array to iterate over and project each item via the projection arg
 * @param {(x: any) => any} projection the projection function which receives an item and returns an item
 */
function map(arr, projection) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const next = arr[i];
        result.push(projection(next));
    }

    return result;
}

module.exports = map;
