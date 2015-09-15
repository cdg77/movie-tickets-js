function Ticket(nameOfMovie, age, showtime) {
  this.nameOfMovie = nameOfMovie;
  this.age = age;
  this.showtime = showtime;
  this.price = "";
}

Ticket.prototype.ticketPrice = function() {
  return (this.price = "14.00");
}

// $(document).ready(function(event) {
//   event.preventDefault;
//
//   var inputNameOfMovie = $("input#new-movie-name");
//   var inputAge = $("input#new-age");
//   var inputShowtime = $("input#new-showtime");
//   var newTicket = new Ticket(inputNameofMovie, inputAge, inputShowtime);
// })
