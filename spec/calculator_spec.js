describe('Calculator', function() {
  it('should calculate properly', function() {
    expect(calculate('3 2 1 - *')).toEqual(3);
    expect(calculate('7 4 5 + * 3 - 10 /')).toEqual(6);
    expect(calculate('7 4 5 + * 3.4 - 10 /')).toEqual(5.96);
    expect(calculate('2 4 1 - ^')).toEqual(8);
    expect(calculate('2 0 /')).toEqual(0);
    expect(calculate('3 2 0 / +')).toEqual(3);
    expect(calculate('1 3 40')).toEqual(40);
    expect(calculate('1 34 100.3')).toEqual(100.3);
    expect(calculate()).toEqual(0);
  })
});
