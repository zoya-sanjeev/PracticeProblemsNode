let numArray = new Array();

for (let count = 0; count < 10; count++) {
  let number = Math.floor(100 + Math.random() * 900);
  numArray.push(number);
}
console.log(numArray);