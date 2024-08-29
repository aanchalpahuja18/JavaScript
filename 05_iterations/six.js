// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

//Above is not possible using for-each loop that means accessing each value using for each won't work with this loop


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Filter: It returns a value surely and also it accepts a callback which returns a result on a specified condition & then filter it out!
//Using curly braces we have to write the return keyword explicitly & it will return an empty array if no return keyword is written there. Also filter method gives the result in an array

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

//   console.log(userBooks);


  let publishYear = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"})

    // userBooks = books.filter( (bk) => { 
    //     return bk.publish >= 1995 && bk.genre === "History"
    // })

  console.log(publishYear);
  
  