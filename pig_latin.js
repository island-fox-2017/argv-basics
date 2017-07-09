'use strict'

let pigLatin = (word) => {
  // let firstLetter = word.charAt(0);
  // if(isPowel(firstLetter)){
  //   return word
  // }else{
  //   return `${word.substr(1)}${firstLetter}ay`;
  // }
  let splitFirstLeter =  word.split('');
  for (let i = 0; i < splitFirstLeter.length; i++) {
    if(isPowel(splitFirstLeter[0])) {
      return word;
    }
    if(isPowel(splitFirstLeter[i])) {
      return `${word.substr(i)}${word.slice(0,i)}ay`;
    }
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
let args = process.argv.splice(2)
console.log(convert(args));
