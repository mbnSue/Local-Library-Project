function findAuthorById(authors, id) {
let found = authors.find((author) => author.id === id)
return found
}

function findBookById(books, id) {
let found = books.find((book) => book.id === id)
return found
}

function partitionBooksByBorrowedStatus(books) {
  let checked = []
  let unchecked = []
  for (let i = 0; i < books.length; i++){
    if(books[i].borrows[0].returned === false){
      checked.push(books[i])
    }else{
      unchecked.push(books[i])
    }
  }
let array = [checked, unchecked]
return array
}

const {findAccountById} = require("./accounts");
function getBorrowersForBook(book, accounts) {
//  let accs = []
//   for(let i  = 0; i < book.borrows.length; i++){
//     for(let a  = 0; a < accounts.length; a++)
//     if(accounts[a].id === book.borrows[i].id && accs.length < 10){
//     //we have located an account that borrowed that book
//     accounts[a].returned = book.borrows[i].returned
//      accs.push(accounts[a])
//     }
//   }
//   return accs
  let borrowedList = book.borrows.map((borrow) => {
    let id = borrow.id
    let account = findAccountById(accounts, id);
      return { ...borrow, ...account };
  });                                    
  return borrowedList.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
