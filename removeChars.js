function removeChars(string, blacklist) {
  let newString = ''
  let listed = false
  for (const char of string) {
    for (const item of blacklist) {
      if (char === item) {
        listed = true
        break
      }
    }
    if (listed) {
      listed = false
      continue
    }
    newString += char
  }
  return newString
}

function main() {
  const newString = removeChars(
    'Battle of the Vowels: Hawaii vs. Grozny',
    'aeiou'
  )
  console.log(newString)
}

if (require.main === module) {
  main()
}
