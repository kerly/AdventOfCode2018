const ArrayUtils = require('../utils/arrayUtils')
const FileUtils = require('../utils/fileUtils')
const SheetClaim = require('./sheetClaim')

var inputArray = FileUtils.readFileIntoArray('./input.txt')
var sheet2dArray = ArrayUtils.createArray(1000, 1000)

var overlaps = Array(inputArray.length).fill(false)
overlaps[0] = true
for(var i = 0; i < inputArray.length -1; i++) {
  var sheetClaim = new SheetClaim(inputArray[i])
  sheet2dArray = fillArray(sheet2dArray, sheetClaim)
}

var duplicateCount = 0
for(var x = 0; x < sheet2dArray.length; x++) {
  for(var y = 0; y < sheet2dArray[x].length; y++) {
    if(sheet2dArray[x][y] == 'X') {
      duplicateCount = duplicateCount + 1
    }
  }
}

console.log(duplicateCount)
console.log(overlaps.indexOf(false))

function fillArray(sheetArray, sheetClaim) {

  for(var x = sheetClaim.xOffset; x < sheetClaim.xOffset + sheetClaim.xSize; x++) {
    for(var y = sheetClaim.yOffset; y < sheetClaim.yOffset + sheetClaim.ySize; y++) {
      if(sheetArray[x][y] == undefined) {
        sheetArray[x][y] = sheetClaim.claimID
      } else {
        overlaps[sheetArray[x][y]] = true
        overlaps[sheetClaim.claimID] = true
        sheetArray[x][y] = "X"
      }
    }
  }

  return sheetArray
}
