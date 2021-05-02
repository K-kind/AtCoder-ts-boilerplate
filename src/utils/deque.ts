// shift・unshiftの動作が遅いArrayに代わり、高速に動作する両端キューを実装

/** 2つのArrayで表現するDeque（動的な要素数で動作可） */
export class DynamicDeque<T> {
  protected frontStack: T[]
  protected backStack: T[]

  constructor(initialValue: T[] = []) {
    this.frontStack = []
    this.backStack = initialValue
  }

  get first() {
    return this.frontStack[this.frontStack.length - 1] || this.backStack[0]
  }

  get last() {
    return this.backStack[this.backStack.length - 1] || this.frontStack[0]
  }

  pushBack(value: T) {
    this.backStack.push(value)
  }

  popBack() {
    return this.backStack.pop()
  }

  pushFront(value: T) {
    this.frontStack.push(value)
  }

  popFront() {
    // frontが空の場合は、backの要素を逆順にしたものをfrontに移動する
    // この操作時間は、操作の回数でならすことで定数時間となる
    if (this.frontStack.length === 0) {
      this.frontStack = this.backStack.reverse()
      this.backStack = []
    }
    return this.frontStack.pop()
  }

  toArray() {
    return [
      ...this.frontStack.slice().reverse(),
      ...this.backStack
    ]
  }
}

/** リングバッファで表現するDeque（高速だが最大要素数は固定） */
export class RingBufferDeque<T> {
  protected data: T[]
  protected head: number
  protected tail: number

  constructor(length: number, initialValue?: T[]) {
    if (initialValue) {
      this.data = [
        ...initialValue,
        ...new Array(length - initialValue.length)
      ]
      this.head = 0
      this.tail = initialValue.length
    } else {
      this.data = new Array(length)
      this.head = 0
      this.tail = 0
    }
  }

  get first() {
    return this.data[this.head]
  }

  get last() {
    if (this.tail === 0) {
      return this.data[this.data.length - 1]
    } else {
      return this.data[this.tail - 1]
    }
  }

  pushBack(value: T) {
    this.data[this.tail] = value
    this.tail = (this.tail + 1) % this.data.length
  }

  popBack() {
    const res = this.data[this.tail]
    if (this.tail === 0) {
      this.tail = this.data.length - 1
    } else {
      this.tail--
    }
    return res
  }

  pushFront(value: T) {
    if (this.head === 0) {
      this.head = this.data.length - 1
    } else {
      this.head--
    }
    this.data[this.head] = value
  }

  popFront() {
    const res = this.data[this.head]
    this.head = (this.head + 1) % this.data.length
    return res
  }

  toArray() {
    if (this.head <= this.tail) {
      return this.data.slice(this.head, this.tail)
    } else {
      return [
        ...this.data.slice(this.head, this.data.length),
        ...this.data.slice(0, this.tail)
      ]
    }
  }
}
