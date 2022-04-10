// @ts-check
let val = 1234; // OK!
val = 'onetwothreefour'; // Reassignment. Still OK!

let val = { a : 3 } + 5 // what the heck does that even mean and why is that ok?

const person = {
  firstName: 'Jacob',
  lastName: 'Sexton',
  age: 31
}

// OR

type Person = {
  firstName: string,
  lastName: string,
  age: number
}