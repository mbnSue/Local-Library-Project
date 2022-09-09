const { polybius } = require("../src/polybius")
const { expect } = require("chai")
// Write your tests here!
describe("polybius", () => {
  it( "When encoding, it should translate the letters i and j to 42", () =>{
    const input = "stij"
    const expected = "34444242"
    const actual = polybius(input)
    expect(actual).to.equal(expected)
  })
  it("When decoding, it should translate 42 to (i/j)", () => {
    const input = "34444242"
    const expected = "st(i/j)(i/j)"
    const actual = polybius(input, false)
    expect(actual).to.equal(expected)
  })
  it("should ignore capital lettters",() =>{
    const input = "stT"
    const expected = "344444"
    const actual = polybius(input)
    expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the message, before and after encoding", () =>{
    const input = "st T"
    const expected = "3444 44"
    const actual = polybius(input)
    expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the message, before and after decoding", () =>{
    const input = "3444 44"
    const expected = "st t"
    const actual = polybius(input, false)
    expect(actual).to.equal(expected)
  
  }) 
})