describe('test', () => {
    it('should work', () => {
        expect(true).toBe(true);
    })

    it('should access browser apis', () => {
        expect(requestAnimationFrame).toBeDefined();
    })


    it('should access helper functions', () => {
        expect(pageOffsetHelper()).toEqual('x:0,y:0');
    })
})
