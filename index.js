//  1:
const numbers = [1, 3, 5, 7, 9];
const multify = numbers.map(x => x + 1);
// console.log(multify);

//  2 :
const arrry = [33, 50, 79, 78, 90, 101, 30];
const divide = arrry.filter(n => n % 10);
const comperisom = arrry.find(n => n % 10);
// console.log(divide);
// console.log(comperisom);

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

// 5

const users = {
    id: 1,
    name: 'Leana Graham',
    username: 'breat',
    email: 'Sincere@gmail.com',
    address: {
        street: 'kulas light',
        suite: 'Apt . 556',
        city: 'lost angels',
        zipcode: '92998-3874',
        geo: {
            lat: '-6561656562',
            lng: '763trwq436y3',
        }
    },
    phone: '001-65656251656521',
    website: 'tomsKrick.web',
    company: {
        name: 'Ramugfera-vcoirhg',
        catchParse: 'Multi-Layered client-server nural.net',
        bs: 'harness real-time e markets',
    }
}
console.log(users.email);
console.log(users.address)
console.log(users.address.city)
console.log(users.address.geo.lat);
console.log(users.company.name)