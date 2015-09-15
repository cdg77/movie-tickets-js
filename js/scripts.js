function Ticket(nameOfMovie, age, showtime) {
  this.nameOfMovie = nameOfMovie;
  this.age = age;
  this.showtime = showtime;
  this.price = "";
}

Ticket.prototype.ticketPrice = function() {
  return (this.price = "14.00");
}

$(document).ready(function(event) {

  $("form#new-movie-ticket").submit(function(event) {
    event.preventDefault();

    var inputNameOfMovie = $("select#new-movie-name option:selected").text();
    var inputAge = $("select#new-age").text();
    var inputShowtime = $("select#new-showtime option:selected").text();
    var newTicket = new Ticket(inputNameOfMovie, inputAge, inputShowtime);

  $('#ticket-confirmation').text('You have successfuly purchased tickets for : ' + newTicket.nameOfMovie + " showing at " + newTicket.showtime);

  });


});
