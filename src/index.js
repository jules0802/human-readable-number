module.exports = function toReadable (number) {
  if (number == 0) return "zero";
  let arrayToNineteen = ["","one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let dozens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

  if (number <= 19) return arrayToNineteen[number];
  else {
      let numberString = String(number);
      let result;
      switch (numberString.length) {
          case 2:{
              result = dozens[numberString[0]] +" "+ arrayToNineteen[numberString[1]];
              break;
          }
          case 3: {
              result = arrayToNineteen[numberString[0]] + " hundred "; //+ dozens[numberString[1]] + " " + arrayToNineteen[numberString[2]];
              if (numberString[1] == "1") {
                  result += arrayToNineteen[numberString.slice(1)];
              }
              else {
                if (numberString[1] == "0") {
                  result += arrayToNineteen[numberString[2]];
                } else
                   result += dozens[numberString[1]] + " " + arrayToNineteen[numberString[2]]; 
            }
              break;
          }
      }
    return result.trim();
  }
}
