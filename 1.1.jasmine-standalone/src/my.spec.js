describe("test", () => {
    it("should run fine", () => {
        expect('fine').toEqual('fine');
    })
    xit("should break", () => {
        expect('fine').toEqual('not fine');
    })
})
