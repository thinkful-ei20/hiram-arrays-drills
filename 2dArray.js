function array2D(arr) {
  const newArr = []
  for (const inner of arr) {
    newArr.push([...inner])
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        for (let k = 0; k < arr[i].length; k++) {
          newArr[i][k] = 0
        }
        for (let k = 0; k < arr.length; k++) {
          newArr[k][j] = 0
        }
      }
    }
  }
  return newArr
}

function main() {
  const arr = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]
  const newArr = array2D(arr)
  console.log(newArr)
}

if (require.main === module) {
  main()
}
