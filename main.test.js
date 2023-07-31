const capitalize = require('./capitalize.js')
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const analyzeArray = require('./analyze.js');

test('analyze array', () => {
  expect(analyzeArray([1,2,3,4,5])).toEqual({min:1, max:5, length:5, average:3});
})

test('capitalize string', () => {
  expect(capitalize('string')).toBe('String')
})

test('reverse string', () => {
  expect(reverseString('string')).toBe('gnirts')
})

test('addition', () => {
  expect(calculator.add(2,2)).toBe(4)
})

test('subtraction', () => {
  expect(calculator.subtract(4,2)).toBe(2)
})

test('division', () => {
  expect(calculator.divide(8,4)).toBe(2)
})

test('multiplication', () => {
  expect(calculator.multiply(4,2)).toBe(8)
})