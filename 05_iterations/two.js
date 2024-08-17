//All the loops have similar structure of initializing, condition checking & incrementing/decrementing they just have different syntaxes of their own!

//while loop

let index = 0;

while (index <= 10) {
    console.log("value of index is: ", index);
    index += 2
    
}

//Programming m kuch glt sahi nhi hai bss output jo bola hai vo aana chahiye fir tum kahi se bhi usse generate kro that doesn't matter at all!

let myArr = ["flash", "batman", "superman"]
let arr = 0

while(arr < myArr.length){
    console.log("Value is: ", myArr[arr]);
    arr++;
    
}

//do-while loop: Pehle specified kaam hoga and baad me the condition will be checked! It is a very rare loop which is used in rare cases! It is just used when we have to do some work before checking its condition!

let score = 1;
do {
    console.log("Value of score is: ", score);
    score++;
} while (score <= 10);

console.log("********************************");

let score2 = 11;
do {
    console.log("Value of score2 is: ", score2);
    score2++;
} while (score2 <= 10);