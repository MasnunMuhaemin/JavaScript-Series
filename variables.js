// let & var re-assignable

let FirstName = 'Hengky';
FirstName = 'Tatang';
console.log(FirstName); 

//  const itu tidak bisa re-assignable
const numbers = [1, 2, 3];
console.log(Array.isArray(numbers));
numbers[1] = 3;
console.log(numbers);
