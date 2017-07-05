'use strict'
let argv = process.argv.slice(2)

let pigLatin = (word) => {
  // console.log(wordToStr);
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
  // console.log(sentence);
  // let words = sentenceToString.trim().split(/\s+/g)
  for (let i=0;i<sentence.length;i++) {
    result[i] = pigLatin(sentence[i])
  }
// console.log(result);
  return result.join(" ")
  
}

// Your CLI code here
console.log(convert(argv))
