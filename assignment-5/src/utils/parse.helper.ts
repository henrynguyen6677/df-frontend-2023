export const JSONStringToObject = (objString: string) => {
  try {
    return JSON.parse(objString)
  } catch (e) {
    console.error(e)
    return {}
  }
}

export const cloneObject = <T>(obj: T) => {
  return JSON.parse(JSON.stringify(obj))
}
