import maxWidthOfVerticalArea from "./maxWidthOfVerticalArea#1637"

describe('maxWidthOfVerticalArea Test Cases', () => { 
    it('[[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]] should return 3',()=>{
        expect(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])).toBe(3);
    })
    it('[[8,7],[9,9],[7,4],[9,7]] should return 1',()=>{
        expect(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])).toBe(1);
    })
 })