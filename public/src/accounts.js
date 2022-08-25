function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id)
return found
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1)
}




function getTotalNumberOfBorrows(account, books) {
const { id: accId } = account;
  return books.reduce((accumulator, book) => {
    return (
      accumulator +
      book.borrows
        .filter(borrow => borrow.id === accId)
        .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
    );
  }, 0);  
}                         


function getBooksPossessedByAccount(account, books, authors) {
for (let book of books){
    for (let author of authors){
      if(book.authorId === author.id){
        book.author = author
      }
    }
  }
  return books.filter((book) => book.borrows.filter(borrow => account.id === borrow.id && !borrow.returned).length > 0)

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
