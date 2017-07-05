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
  // let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<sentence.length;i++) {
    result[i] = pigLatin(sentence[i])
  }

  return result.join(" ")
}

// Your CLI code here
// let args = process.argv
let args = process.argv.splice(2)
console.log(convert(args));
