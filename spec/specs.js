describe("Ticket", function() {
  it("creates a new ticket with the given specifications", function() {
    var newTicket = new Ticket("The Help", 21, "9:15");
    expect(newTicket.nameOfMovie).to.equal("The Help");
    expect(newTicket.age).to.equal(21);
    expect(newTicket.showtime).to.equal("9:15");
    expect(newTicket.price).to.equal("");
  });

  it('returns a price for a new ticket', function() {
    var newTicket = new Ticket("The Help", 21, "9:15");
    expect(newTicket.ticketPrice()).to.equal("14.00");
  });
});
