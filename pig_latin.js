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
// console.log(process.argv[2]);
var kalimat = []
for (var i = 2; i < process.argv.length; i++) {
  kalimat.push(process.argv[i])
}
process.argv[2] = kalimat.join(' ')
console.log(convert(process.argv[2]));
