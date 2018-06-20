function maxSum(arr) {
  let max = 0
  for (let i = 0; i < arr.length - 1; i++) {
    let sumCarrier = [arr[i]]
    for (let j = i + 1; j < arr.length; j++) {
      sumCarrier.push(sumCarrier[j - (i + 1)] + arr[j])
    }
    for (const sum of sumCarrier) {
      max = sum > max ? sum : max
    }
  }
  return max
}

function main() {
  const arr = [4, 6, -3, 5, -2, 1]
  let output = maxSum(arr)
  console.log(output)
}

if (require.main === module) {
  main()
}
