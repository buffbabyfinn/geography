describe('Vacay', function(){
  it("creates a new place record", function(){
    var testVacay = new Vacay ("Hell", "Georgia", "United States");
    expect(testVacay.city).to.equal("Hell");
    expect(testVacay.state).to.equal("Georgia");
    expect(testVacay.country).to.equal("United States");
  });

  it("adds the fullVacay to the entries", function() {
    var testVacay = new Vacay("Hell", "Georgia", "United States");
    expect(testVacay.fullVacay()).to.equal("Hell, Georgia, United States");
});

  it("adds the Event to the entries", function() {
    var testEvent = new Event("Saw Satan");
    expect(testEvent.thing).to.equal("Saw Satan");
  });
});
