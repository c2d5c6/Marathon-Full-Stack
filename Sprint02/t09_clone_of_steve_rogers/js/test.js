const user = {
  name: 'Steve',
  surname: 'Rogers',
  age: 101,
  city: 'New York'
};

console.log(user);
// {name: "Steve", surname: "Rogers", age: 101, city: "New York"}
let cpy = copyObj(user);
console.log(cpy);
// {name: "Steve", surname: "Rogers", age: 101, city: "New York"}


user.name = 'John';
console.log(user);
// {name: "John", surname: "Rogers", age: 101, city: "New York"}
console.log(cpy);
// {name: "Steve", surname: "Rogers", age: 101, city: "New York"}

cpy.age = 59;
console.log(user);
//{name: "John", surname: "Rogers", age: 101, city: "New York"}
console.log(cpy);
// {name: "Steve", surname: "Rogers", age: 59, city: "New York"}

cpy.surname = 'Vi'
console.log(user);
console.log(cpy);

cpy.surname = 'Vi'
console.log(user);
// Первый вариант как вывести JSON.stringify => вывод будет в одну строку
console.log(JSON.stringify(cpy));
// Второй вариант вывода JSON.stringify => выводит данные читабельными 
console.log(JSON.stringify(cpy, null, 2));
// {name: "Steve", surname: "Vi", age: 101, city: "New York"}
