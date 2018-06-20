function products(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    let product = 1
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue
      product *= arr[j]
    }
    newArr.push(product)
  }
  return newArr
}

function main() {
  const newArr = products([1, 3, 9, 4])
  console.log(newArr)
}

if (require.main === module) {
  main()
}
