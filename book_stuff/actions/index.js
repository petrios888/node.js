export function selectBook(book){
  // selectBook is an ActionCreator, it needs to return an aciton,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };





  //console.log('You selected a book,', book.title);
}
