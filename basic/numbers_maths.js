const score =400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const num=23.456789
console.log(num.toPrecision(3));

const rs=13457796896
console.log(rs.toLocaleString('en-IN'));


//*****************Maths*********

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.random()); //values between 0 and 1 
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

Math.random() * (max-min + 1) + min

console.log(Math.floor(Math.random() * (max-min + 1) + min));
