import MyStack from "./stackUsingQueue#225";

describe('MyStack', () => {
    it('should push elements onto the stack', () => {
        const stack = new MyStack();
        stack.push(1);
        stack.push(2);
        
        expect(stack.top()).toBe(2);
    });

    it('should pop elements from the stack', () => {
        const stack = new MyStack();
        stack.push(1);
        stack.push(2);
        
        stack.pop();
        expect(stack.top()).toBe(1);
    });

    it('should correctly indicate if the stack is empty', () => {
        const stack = new MyStack();
        expect(stack.empty()).toBe(true);
        
        stack.push(1);
        expect(stack.empty()).toBe(false);
        
        stack.pop();
        expect(stack.empty()).toBe(true);
    });
});
