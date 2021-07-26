describe('test', () => {
    it('should work', () => {
        expect(true).toBe(true);
    })

    it('should access browser apis', () => {
        expect(requestAnimationFrame).toBeDefined();
    })
})
