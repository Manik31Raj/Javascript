//primitive

//7 types : string,Number ,boolean,null,undefined,symbol,bigint

const score =100
const scoreValue= 100.3
const isloggedIn =false
const outTemp=null
let useremail;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id == anotherid);
const bigNumber=12525554657n



//reference(non-primitive)
//array,objects,functions

const heros=["krrish","doga"]
let myobj={
    name:"Manik",
    age:22,
}
const myfunction= function(){
    console.log("Hello");}

    

// stack (primitive) and heap(non-primitive)

let myhome ="absccdghcdg.com"
let anothername=myhome
anothername ="dsgxjghd"
console.log(myhome);
console.log(anothername);

let userone = {
    email: "abc.gamil.com",
    upi: "3565465465@ybl"
}
let usertwo = userone 
usertwo.email="cdf@gmail.com"
console.log(userone.email);
console.log(usertwo.email);


