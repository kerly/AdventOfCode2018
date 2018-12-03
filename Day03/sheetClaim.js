class SheetClaim {
  constructor(input) {
    const regexLiteral = /\#(\d+) \@ (\d+),(\d+): (\d+)x(\d+)/
    var matches = input.match(regexLiteral)
    this.claimID = parseInt(matches[1])
    this.xOffset = parseInt(matches[2])
    this.yOffset = parseInt(matches[3])
    this.xSize = parseInt(matches[4])
    this.ySize = parseInt(matches[5])
  }
}

module.exports = SheetClaim
