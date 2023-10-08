export const JSONStringToObject = (objString: string) => {
  try {
    return JSON.parse(objString)
  } catch (e) {
    console.error(e)
    return {}
  }
}
