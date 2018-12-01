const fs = require('fs')

var inputText = fs.readFileSync('./input.txt').toString('utf-8')
var inputArray = inputText.split('\n')

var sum = 0
var firstDoubleFrequency = null
var frequencies = []
while (firstDoubleFrequency == null) {
  for(var i = 0; i < inputArray.length -1; i++) {
    frequencies.push(sum)
    number = parseInt(inputArray[i])
    sum = sum + number
    console.log(number + ' ' + sum + '\n')
    if(frequencies.includes(sum)) {
      firstDoubleFrequency = sum
      break
    }
  }
}

console.log(firstDoubleFrequency)
