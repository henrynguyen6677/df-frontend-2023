export const JSONStringToObject = (objString) => {
  try {
    return JSON.parse(objString);
  } catch (e) {
    console.error(e);
    return {};
  }
};
