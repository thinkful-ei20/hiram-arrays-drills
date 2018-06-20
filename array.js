const Memory = require('./memory')
const memory = new Memory()

class Array {
  constructor() {
    this.length = 0
    this._capacity = 0
    this.ptr = memory.allocate(this.length)
  }

  push(val) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }

    memory.set(this.ptr + this.length, val)
    this.length++
  }

  _resize(size) {
    const oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    if (this.ptr === null) {
      throw new Error('Out of memory')
    }
    memory.copy(this.ptr, oldPtr, this.length)
    memory.free(oldPtr)
    this._capacity = size
  }

  get(i) {
    if (i < 0 || i >= this.length) {
      throw new Error('Index error')
    }
    return memory.get(this.ptr + i)
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error')
    }
    const val = memory.get(this.ptr + this.length - 1)
    this.length--
    return val
  }

  insert(i, val) {
    if (i < 0 || i >= this.length) {
      throw new Error('Index error')
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }

    memory.copy(this.ptr + i + 1, this.ptr + i, this.length - i)
    memory.set(this.ptr + i, val)
    this.length++
  }

  remove(i) {
    if (i < 0 || i >= this.length) {
      throw new Error('Index error')
    }
    memory.copy(this.ptr + i, this.ptr + i + 1, this.length - i - 1)
    this.length--
  }
}

Array.SIZE_RATIO = 2

module.exports = Array
