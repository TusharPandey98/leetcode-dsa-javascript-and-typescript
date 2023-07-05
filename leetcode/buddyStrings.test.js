import buddyStrings from "./buddyStrings";

describe('Buddy Strings test cases', () => { 
    test('"ab", "ba" is true', () => { 
        expect(buddyStrings("ab", "ba")).toBe(true);
     })
    test('"ab", "ab" is false', () => { 
        expect(buddyStrings("ab", "ab")).toBe(false);
     })
    test('"aa", "aa" is true', () => { 
        expect(buddyStrings("aa", "aa")).toBe(true);
     })
    test('"aaaaaaabc", "aaaaaaacb" is true', () => { 
        expect(buddyStrings("aaaaaaabc", "aaaaaaacb")).toBe(true);
     })
    test('"", "" is false', () => { 
        expect(buddyStrings("", "")).toBe(false);
     })
 })