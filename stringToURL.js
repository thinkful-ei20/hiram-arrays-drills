function stringToURL(string) {
  return string
    .split('')
    .map(val => (val === ' ' ? '%20' : val))
    .join('')
}

function main() {
  console.log(stringToURL('hiram cruz hello'))
}

main()
