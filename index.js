//  1:
const numbers = [1, 3, 5, 7, 9];
const multify = numbers.map(x => x + 1);
// console.log(multify);

//  2 :
const arrry = [33, 50, 79, 78, 90, 101, 30];
const divide = arrry.filter(n => n % 10);
const comperisom = arrry.find(n => n % 10);
console.log(divide);
console.log(comperisom);

// 4:
// console.log(defined);

const student = {
    name: 'Fredie',
    age: 26,
    city: {
        one:'ctg',
        two:'dhaka',
    }
}
// console.log(student.city.two)