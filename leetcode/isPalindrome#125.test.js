import isPalindrome from "./isPalindrome#125"
describe('isPalindrome test cases', () => { 
    test('"A man, a plan, a canal: Panama" will return true', () => { 
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
     })
    test('"race a car" will return false', () => { 
        expect(isPalindrome("race a car")).toBe(false);
     })
    test('" " will return true', () => { 
        expect(isPalindrome(" ")).toBe(true);
     })
    test('"A man, a plan, a canal: Panama" will return true', () => { 
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
     })
     
 })