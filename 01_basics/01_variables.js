const accountId = "1234";
let accountEmail = "aanchal@gmail.com";
let accountCity = "Nagpur";

accountState = "Maharashtra";

let accountDetails;
// accountId = "4213";

console.log(accountId);

//console.table - The table() method writes a table to the console. table() static method displays tabular data as a table

console.table([accountId, accountCity, accountEmail, accountState, accountDetails])


/*
Summary : const is used to declare and initialize constant variables.
Prefer not to use var
because of issue in block scope and functional scope
Use let & const in modern JS
let allows for block scope & functional scope

Problem with function scope- As a programmer, Sometimes, we need to access the information within the normal block only but the problem with Var is, It is accessible throughout the function level means outside of the normal block. That's why we prefer not to use Var as It could give us the undesired result.

*/
