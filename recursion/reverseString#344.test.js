import reverseString from "./reverseString#344"

describe('reverseString test cases',()=>{
    it(`["h","e","l","l","o"]' will return [ 'o', 'l', 'l', 'e', 'h' ]`,()=>{
        expect(reverseString(["h","e","l","l","o"])).toStrictEqual([ 'o', 'l', 'l', 'e', 'h' ]);
    })
    it(`["H","a","n","n","a","h"] will return [ 'o', 'l', 'l', 'e', 'h' ]`,()=>{
        expect(reverseString(["H","a","n","n","a","h"])).toStrictEqual(["h","a","n","n","a","H"]);
    })
})