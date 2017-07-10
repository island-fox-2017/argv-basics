'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here

// console.log(convert('hello world'))
// process.argv[2] = convert('hello world')
let tes = process.argv.slice(2).join(' ')
console.log(convert(tes));



// process.argv.forEach((val, index, array) => {
//   console.log(`${index}: '${val}'`)
// })
