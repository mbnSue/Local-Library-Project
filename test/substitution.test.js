const { substitution } = require("../src/substitution")
const { expect } = require("chai")
// Write your tests here!
describe("substitution", () =>{
  it("should return false if the given alphabet isn't exactly 26 characters long", () =>{
    const input = "str"
    const alphabet = "xoyqmcgrukswaflnthdjpzibe"
    const expected = false
    const actual = substitution(input, alphabet)
      expect(actual).to.equal(expected)
  })
    it("should correctly translate the given phrase, based on the alphabet given to the function", () =>{
    const input = "str"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const expected = "djh"
    const actual = substitution(input, alphabet)
      expect(actual).to.equal(expected)
  })
  it("should return false if there are any duplicate characters in the given alphabet", () =>{
    const input = "str"
    const alphabet = "xoyxmcgrukswaflnthdjpzibev"
    const expected = false
    const actual = substitution(input, alphabet)
      expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the message, before and after encoding", () =>{
    const input = "st r"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const expected = "dj h"
    const actual = substitution(input, alphabet)
      expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the message, before and after decoding", () =>{
    const input = "dj h"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const expected = "st r"
    const actual = substitution(input, alphabet, false)
      expect(actual).to.equal(expected)
  })
  it("should ignore capital letters", () =>{
    const input = "STR"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const expected = "djh"
    const actual = substitution(input, alphabet)
      expect(actual).to.equal(expected)
  })
})
