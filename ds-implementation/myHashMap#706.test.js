import MyHashMap from "./myHashMap#706";

describe('MyHashMap', () => {
    let hashMap;

    beforeEach(() => {
        hashMap = new MyHashMap();
    });

    it('should put and get values correctly', () => {
        hashMap.put(1, 2);
        hashMap.put(2, 3);

        expect(hashMap.get(1)).toBe(2);
        expect(hashMap.get(2)).toBe(3);
    });

    it('should return -1 for keys not found', () => {
        expect(hashMap.get(1)).toBe(-1);
    });

    it('should remove values correctly', () => {
        hashMap.put(1, 2);
        hashMap.put(2, 3);

        hashMap.remove(1);
        expect(hashMap.get(1)).toBe(-1);
        expect(hashMap.get(2)).toBe(3);
    });
});
