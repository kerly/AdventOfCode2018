const fs = require('fs')

var inputText = fs.readFileSync('./input.txt').toString('utf-8')
var inputArray = inputText.split('\n')

var numContainTwo = 0
var numContainThree = 0

for(var i = 0; i < inputArray.length - 1; i++) {
  var input = inputArray[i].toString()
  var characterCount = Array(26).fill(0)
  for(var charIndex = 0; charIndex < input.length; charIndex++) {
    var charCode = input.toUpperCase().charCodeAt(charIndex) - 65
    if(charCode >= 0 && charCode <= 25) {
      characterCount[charCode] = characterCount[charCode] + 1
    }
  }

  var foundTwo = false
  var foundThree = false
  for(var charCount = 0; charCount < characterCount.length; charCount++) {
    if(foundTwo == false && characterCount[charCount] == 2) {
      numContainTwo = numContainTwo + 1
      foundTwo = true
    } else if(foundThree == false && characterCount[charCount] == 3) {
      numContainThree = numContainThree + 1
      foundThree = true
    }
  }
}

console.log(numContainTwo)
console.log(numContainThree)

var checksum = numContainTwo * numContainThree
console.log(checksum)

var wordOne = null
var wordTwo = null
for(var i = 0; i < inputArray.length - 1; i++) {
  var input = inputArray[i].toString()
  for(var secondCount = i + 1; secondCount < inputArray.length - 1; secondCount++) {
    var characterDifference = 0
    var secondInput = inputArray[secondCount].toString()
    for(var charCount = 0; charCount < input.length; charCount++) {
      if(input.charAt(charCount) != secondInput.charAt(charCount)) {
        characterDifference = characterDifference + 1
      }
    }

    if(characterDifference == 1) {
      wordOne = input
      wordTwo = secondInput
      break
    }
  }
}

var lastWord = null
for(var differenceCounter = 0; differenceCounter < wordOne.length -1; differenceCounter++) {
  if(wordOne.charAt(differenceCounter) != wordTwo.charAt(differenceCounter)) {
    lastWord = wordOne.slice(0, differenceCounter) + wordOne.slice(differenceCounter + 1)
  }
}

console.log(lastWord)
