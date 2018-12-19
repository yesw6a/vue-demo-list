export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  // console.log('res',payload)
  if (removedIndex === null && addedIndex === null) return arr
  let result = [...arr]

  let itemToAdd = payload
  
  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }
  
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }
  
  return result
}

export const generateItems = (count, creator) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
}