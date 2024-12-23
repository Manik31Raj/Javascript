const accountId = 12345
let accountEmail = "abc@google.com"
var accountPass ="12345"
accountCity = "Patna"

console.log(accountId)
/*  prefer not to use var due to issue in block and functional scope*/
console.table([accountId,accountEmail,accountPass,accountCity])