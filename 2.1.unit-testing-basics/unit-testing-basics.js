//
Array.prototype.flatMap = function(cb) {
    return [];
    //return this.map(cb).reduce((acc, n) => acc.concat(n), []);
}



// Case 1
const numbers = [1, 2, 3, 4];

const actual = numbers.flatMap(x => [x, x * 2]);
const expected = '1,2,2,4,3,6,4,8';
console.log('test case 1 passing:', actual.join() === expected);



// Case 2
const strings = ["it's Sunny in", "", "California"];

const actual1 = strings.flatMap(x => x.split(" "));
const expected1 =  ["it's","Sunny","in", "", "California"];
console.log('test case 2 passing:',actual1.join() === expected1.join())



// Case 3
const numbers2 = [1, 2, 3, 4];
const actual2 = numbers2.flatMap(x => [x * 2]);
const expected2 = [2, 4, 6, 8];
console.log('test case 3 passing:',actual2.join() === expected2.join())
// [2, 4, 6, 8]

// Case 4
// only one level is flattened
console.log('test case 4 passing:', numbers.flatMap(x => [[x * 2]]).join() === [[2], [4], [6], [8]].join()) ;
// [[2], [4], [6], [8]]
