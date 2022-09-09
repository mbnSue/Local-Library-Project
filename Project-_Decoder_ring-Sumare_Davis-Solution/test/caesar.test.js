const { caesar } = require("../src/caesar")
const { expect } = require("chai")
// Write your tests here!
describe("caesar", () =>{
    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present"
, () =>{
        const input = "str"
        const shift = 0
        const expected = false
        const actual = caesar(input,shift)
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () =>{
      const input = "STR"
      const shift = 3
      const expected = "vwu"
      const actual = caesar(input,shift) 
       expect(actual).to.equal(expected)
    })
    it("should when encoding, it handles shifts that go past the end of the alphabet ", () =>{
       const input = "stz"
       const shift = 3
       const expected = "vwc"
       const actual = caesar(input,shift) 
       expect(actual).to.equal(expected)
    })
    it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding",() => {
      const input = "st z"
       const shift = 3
       const expected = "vw c"
       const actual = caesar(input,shift) 
       expect(actual).to.equal(expected)
    })

})
