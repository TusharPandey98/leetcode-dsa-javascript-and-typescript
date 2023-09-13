import findWords from "./findWords#500";

describe('findWords', () => {
    it('should return ["asdfghjkl"] for ["asdfghjkl"]', () => {
        const words = ["asdfghjkl"];
        const result = findWords(words);
        expect(result).toEqual(["asdfghjkl"]);
    });

    it('should return [] for an empty array', () => {
        const words = [];
        const result = findWords(words);
        expect(result).toEqual([]);
    });

    it('should return ["qwertyuiop", "zxcvbnm"] for ["qwertyuiop", "zxcvbnm"]', () => {
        const words = ["qwertyuiop", "zxcvbnm"];
        const result = findWords(words);
        expect(result).toEqual(["qwertyuiop", "zxcvbnm"]);
    });

    it('should return [] for ["asdfghjkl", "qwertyuiop", "zxcvbnm"]', () => {
        const words = ["asdfghjkl", "qwertyuiop", "zxcvbnm"];
        const result = findWords(words);
        expect(result).toEqual(["asdfghjkl", "qwertyuiop", "zxcvbnm"]);
    });

    it('should return ["word"] for ["word", "another", "example"]', () => {
        const words = ["word", "another", "example"];
        const result = findWords(words);
        expect(result).toEqual([]);
    });
});
