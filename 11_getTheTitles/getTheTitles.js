// const books = [
//   {
//     title: "Book",
//     author: "Name",
//   },
//   {
//     title: "Book2",
//     author: "Name2",
//   },
// ];

// const getTheTitles = function (book) {
//   const titelRij = [];
//   // * Als ik "books" in te vullen, krijg ik elke title van de rij books.
//   for (let book of books) {
//     titelRij.push(book.title);
//   }
//   return titelRij;
// };

// getTheTitles(books);

const getTheTitles = function (boeken) {
  return boeken.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
