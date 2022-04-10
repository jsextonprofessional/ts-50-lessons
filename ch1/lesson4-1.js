// @ts-check
/**
* Adding two numbers. This annotation tells
TypeScript
* which types to expect. Two parameters (params) of
* type number and a return type of number *
* @param {number} numberOne
* @param {number} numberTwo
* @returns {number} 
*/
function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo
}

// Typescript throws an error here, bc JSDoc comments expect two number, not a number and a string 
addNumbers(3, '2')

// TS throws an error here, bc addNumbers returns a number, and toUpperCase() is not available in number
addNumbers(3, 2).toUppercase()