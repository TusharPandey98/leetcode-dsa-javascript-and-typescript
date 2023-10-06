import floodFill from "./floodFill#733";

describe('floodFill function', () => {
    it('should fill the connected region with newColor', () => {
        const image = [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ];
        const sr = 1;
        const sc = 1;
        const newColor = 2;
        const expectedImage = [
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1],
        ];
        expect(floodFill(image, sr, sc, newColor)).toEqual(expectedImage);
    });

    it('should return the original image if newColor is the same as the starting color', () => {
        const image = [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ];
        const sr = 1;
        const sc = 1;
        const newColor = 1; // Same as the starting color
        expect(floodFill(image, sr, sc, newColor)).toEqual(image);
    });

    it('should work with different starting points and colors', () => {
        const image = [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1],
        ];
        const sr = 0;
        const sc = 0;
        const newColor = 2;
        const expectedImage = [
            [2, 2, 2],
            [2, 1, 1],
            [2, 1, 1],
        ];
        expect(floodFill(image, sr, sc, newColor)).toEqual(expectedImage);
    });
});
