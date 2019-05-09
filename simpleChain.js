/**
 * block class
 * class with a constructor for block
 */
class Block {
  constructor(data) {
    this.hash = '',
      this.height = 0,
      this.body = data,
      this.time = 0,
      this.previousblockhash = ''
  }
}

/**
 * blockchain class
 */
class Blockchain {
  constructor() {
    // new chain array
    this.chain = [];
  }
  // add block method
  addBlock(newBlock) {
    this.chain.push(newBlock);
  }
}
