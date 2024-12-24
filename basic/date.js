//date

let myDate= new Date()
console.log(myDate.toString());//Tue Dec 24 2024 06:22:59 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Dec 24 2024
console.log(myDate.toLocaleString());//12/24/2024, 6:22:59 AM
console.log(typeof myDate);


let createDate=new Date(2025 , 0 , 23)
console.log(createDate.toDateString());


let creatDate=new Date(2025 , 0 , 23 ,5,3)
console.log(creatDate.toLocaleString());


let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(creatDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate.getMonth()+1);


newDate.toLocaleString('default', {weekday: "long"})
