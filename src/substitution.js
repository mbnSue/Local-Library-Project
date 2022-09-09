// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
const daRealAlpha = "abcdefghijklmnopqrstuvwxyz"
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //make input lowercase
    let lowerCaseInput = input.toLowerCase().split("")
    //if the number of characters in alphabet isn't 26
    //or if every character isn't unique
     //return false
    if(!alphabet || alphabet.length != 26) return false
    let dupeChecker = {}
    for (let i = 0; i < alphabet.length; i++) {
      if (dupeChecker[alphabet[i]]) {
        return false;
      }
      
      dupeChecker[alphabet[i]] = 1;
    }
     //if encode is true
    if(encode){
      let message = lowerCaseInput.map((letter) =>{
        if (!alphabet.includes(letter)) return letter
        let subIndex = daRealAlpha.indexOf(letter)
        return alphabet[subIndex]
        
      })
      return message.join("")
    }else{
      let message = lowerCaseInput.map((letter) =>{
       if( letter === " ")return " "
        let subIndex = alphabet.indexOf(letter)
        return daRealAlpha[subIndex]
        
      })
      return message.join("")
    }
      //find out the index number of the letter from the real alphabet 
      //use that index number to return a letter from the fake alphabet     
  }
       
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
