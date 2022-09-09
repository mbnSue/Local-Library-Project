// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift < -25 || shift > 25 || shift === 0) return false;
    //make all text lowercase
    const inputArray = input.toLowerCase().split(""); 
    //[ 's', 't', 'r' ] 
    const message = inputArray.map((letter) => {
//       map() creates a new array from calling a function for every array element [ 'v', 'w', 'u' ]
      if (!alphabet.includes(letter)) return letter;
      let shiftedIndex = alphabet.indexOf(letter);
       // gives index of the letter in the alphabet
//       18
//       19
//       17
      if (encode) {
        shiftedIndex += shift; //to disguise string
        // shiftedIndex now equals ShiftedIndex + shift
//        21
//        22
//        20
        if (shiftedIndex > 25)(shiftedIndex -= 26);
        // if you go out of bounds to the right, this wraps it back around
        else if (shiftedIndex < 0) (shiftedIndex += 26); 
      }// if you go out of bounds to the left, this wraps it back around
      else {//decoding
        shiftedIndex -= shift;
        if (shiftedIndex < 0) (shiftedIndex += 26);
        else if (shiftedIndex > 25) (shiftedIndex -= 26);
      }
      return alphabet[shiftedIndex];   
      //v
      // w
      // u 
    });
   console.log(message.join(""))
    return message.join("");
  };
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar }