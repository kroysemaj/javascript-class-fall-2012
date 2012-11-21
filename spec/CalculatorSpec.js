describe('Calculator', function () {
    it('can add 2 and 2', function () {
        var calculator = new Calculator();
        var actual = calculator.add(2, 2);
        expect(actual).toBe(4);
    });

    it('can subtract 42 and 11', function () {
        var calculator = new Calculator();
        var actual = calculator.subtract(42, 11);
        expect(actual).toBe(31);
    });

    it('can multiply 3 and 3', function () {
        var calculator = new Calculator();
        var actual = calculator.multiply(3, 3);
        expect(actual).toBe(9);
    });
    
    it('can divide 9 by 3', function () {
        var calculator = new Calculator();
        var actual = calculator.divide(9, 3);
        expect(actual).toBe(3);
    });
       
    
    
});
