const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
// console.log(data);

const list = data.list;
// console.log(typeof data);

const humanOne = {
    name: list[0].name,
    age: Number(list[0].age),
    prof: list[0].prof,
}

const humanTwo = {
    name: list[1].name,
    age: Number(list[1].age),
    prof: list[1].prof,
}

console.log('list', humanOne, humanTwo);