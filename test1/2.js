const numbers = [1, 1, 1, 1, 1];
let sum = 0;
const forEachRes = numbers.forEach(num => {
  return (sum += num);
});
console.log(forEachRes)
console.log(numbers)
const mapRes = numbers.map(num => {
  return (sum += num);
});
console.log(sum)
console.log(mapRes)


