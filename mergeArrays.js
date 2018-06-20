function merge(arr1, arr2) {
  const newArr = [...arr1, ...arr2]
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      let tmp = newArr[i + 1]
      newArr[i + 1] = newArr[i]
      newArr[i] = tmp
      i = 0
    }
  }
  return newArr
}

function main() {
  const arr1 = [1, 3, 6, 8, 11]
  const arr2 = [2, 3, 5, 8, 9, 10]
  const newArr = merge(arr1, arr2)
  console.log(newArr)
}

if (require.main === module) {
  main()
}
