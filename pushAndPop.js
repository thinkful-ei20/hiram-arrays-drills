const Array = require('./array')

function main() {
  Array.SIZE_RATIO = 3

  let arr = new Array()
  arr.push(3) // this increases cap to 3
  arr.push(5)
  arr.push(15)
  arr.push(19) // this increases cap to 12
  arr.push(10)
  arr.push(3)
  arr.push(5)
  arr.push(15)
  arr.push(19)
  arr.push(10)
  arr.push(10)
  arr.push(3)
  arr.push(5)
  arr.push(15)
  arr.push(19)
  arr.push(10)
  arr.push(10)
  arr.push(3)
  arr.push(5)
  arr.push(15)
  arr.push(19)
  arr.push(10)
  console.log(arr) // Array { length: 5, _capacity: 12, ptr: 3 }

  arr.pop()
  arr.pop()
  arr.pop() // pop() does not call _resize, so _cap is not changed
  console.log(arr) // Array { length: 2, _capacity: 12, ptr: 3 }

  console.log(arr.get(0)) // First item

  for (let i = 0; i < arr.length; ) {
    // Empty array
    arr.remove(i)
  }
  arr.push('tauhida') // add one item
  console.log(arr.get(0)) // print only item
  // memory is Float64Array, string 'tauhida' is not a float

  /**
   * _resize() make a new, larger(higher capacity), array
   * at a memory address after the original array
   */
}

main()
