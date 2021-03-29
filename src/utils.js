const filterBooksByPrice = (books, price) => {
  if (price === 'Price') {
    return books;
  } else if (price === '< 25') {
    return books.filter(({ price }) => price < 25);
  } else if (price === '< 50') {
    return books.filter(({ price }) => price > 25 && price < 50);
  } else if (price === '> 50') {
    return books.filter(({ price }) => price > 50);
  }
};

const searchBooksByTitle = (books, titleSearchValue) => {
  if (titleSearchValue === '') {
    return books;
  } else {
    return books.filter(({ title }) =>
      title.toLowerCase().includes(titleSearchValue.toLowerCase())
    );
  }
};

export { filterBooksByPrice, searchBooksByTitle };
