function getTotalBooksCount(books) {
//     return books.length
  return books.reduce(total => total + 1, 0);
}

function getTotalAccountsCount(accounts) {  
  return accounts.length
}

function getBooksBorrowedCount(books) {
   let count = 0
  for( let index in books){
    let book = books[index]
    if(book.borrows[0].returned === false){
      count += 1
    }
  }
  return count
}


function getMostCommonGenres(books) {
let mostCommonGenres = []
const grabbedGenres = books.map((book) => book.genre)
const count = {} 
// object we will look into and add to
  for(const genre of grabbedGenres){
    // if the genre is in count, the value is 1. now add 1 the count 
    if (count [genre]){
      count[genre] += 1 
    }else{
      count[genre] = 1
    }
  }
  for(let key in count){
    //the keys in count are Genre names
    mostCommonGenres.push({name: key, count: count[key],
    });
  }
  mostCommonGenres.sort((genreA, genreB) => (genreB.count - genreA.count));
  console.log(mostCommonGenres)
  return mostCommonGenres.slice(0,5);
}
  
function getMostPopularBooks(books) {
let mostPopularBooks = []
let grabbedBooks = []
for(let index = 0; index < books.length; index++){
  let grabbedBook = {}
  book = books[index]
  grabbedBook = {name: book.title, count: book.borrows.length}  
  grabbedBooks.push(grabbedBook)
 }
  mostPopularBooks = grabbedBooks.sort((gbook1, gbook2) => gbook2.count - gbook1.count).filter((book, index) => index < 5)
  return mostPopularBooks 
}


function getMostPopularAuthors(books, authors) {
  const mostPopularAuthors = [];
  authors.forEach(author => {
    const returnAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length;
      }
    })
    mostPopularAuthors.push(returnAuthor);
  })
  return mostPopularAuthors.sort((a,b) => b.count - a.count).slice(0, 5);

}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
