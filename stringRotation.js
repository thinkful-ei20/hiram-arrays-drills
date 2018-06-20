function isRotation(str1, str2) {
  if (str1.length !== str2.length) return false
  for (let i = 0; i < str1.length; i++) {
    if (str1.slice(i) + str1.slice(0, i) === str2) {
      return true
    }
  }
  return false
}

function main() {
  let output = isRotation('amazon', 'azonma')
  console.log(output)

  output = isRotation('amazon', 'azonam')
  console.log(output)
}

if (require.main === module) {
  main()
}
