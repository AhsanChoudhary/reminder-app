const fs = require('fs');
const person = {
    name: 'ahsan',
    age: 22,
    favColour: 'blue',
};

const personJson = JSON.stringify(person);

console.log(person);
console.log(personJson);

fs.writeFileSync('json_demo/person.json', personJson);

const dataBuffer = fs.readFileSync('json_demo/person.json');
console.log(dataBuffer);

const dataJson = dataBuffer.toString();

const data = JSON.parse(dataJson);