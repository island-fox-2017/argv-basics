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
let run = process.argv;
if(run.length == 3){
  console.log(`Hasilnya : ${convert(run[2])}`)
} else if(run.length == 4){
  console.log(`Hasilnya : ${convert(run[2])} ${convert(run[3])}`)
} else if(run.length == 5){
  console.log(`Hasilnya : ${convert(run[2])} ${convert(run[3])} ${convert(run[4])}`)
} else {
  console.log('masukan maksimum 3 kata');
}
// console.log(run);
// Your CLI code here
