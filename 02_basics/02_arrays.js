const marvel_heros = ["thor", "ironman", "hulk"]

const dc_heros = ["superman", "flash", "batman"]


marvel_heros.push(dc_heros)

console.log(marvel_heros);
//Push inserts the arrays inside the original array


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


//concats return the new array after combining the arrays

//We also have spread operator which spreads the values of the arrays & gives it to us: Imagine it like a glass, break the glass & see it turns into pieces.

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//flat method flats down all the subarrays into a single array by specifing infinity we specify the levels we want to flat the array by

console.log(Array.isArray("Aanchal")) // gives the answer of whether the specified argument is array or not
console.log(Array.from("Aanchal")) // It creates arrays from the specified argument
console.log(Array.from({name: "hitesh"})) // interesting: It is interesting to know that whether from the key or from the values we have to make the array. Since we haven't specified it, it returns us the null array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Another method to make arrays of elements specified. 