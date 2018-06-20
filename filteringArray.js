function filterArray(arr, min) {
  return arr.reduce((total, current) => {
    if (current < min) return total
    total.push(current)
    return total
  }, [])
}

function main() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const newArr = filterArray(arr, 5)
  console.log(newArr)
}

if (require.main === module) {
  main()
}
