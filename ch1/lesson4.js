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

addNumbers(3, '2')

addNumbers(3, 2).toUppercase()