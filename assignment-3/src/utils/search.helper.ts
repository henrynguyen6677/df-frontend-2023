const WrapperToLowercase = (text) => {
  return text.toLowerCase();
};

export const SearchHelper = (books, filter) => {
  return books
    ?.filter(
      (item) =>
        WrapperToLowercase(item.name).includes(WrapperToLowercase(filter)) ||
        WrapperToLowercase(item.author).includes(WrapperToLowercase(filter)) ||
        WrapperToLowercase(item.author).includes(WrapperToLowercase(filter)),
    )
    .map((item) => item);
};
