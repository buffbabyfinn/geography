// Business Logic

function Vacay(city, state, country) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.events = [];
}

Vacay.prototype.fullVacay = function() {
  return this.city + ", " + this.state + ", " + this.country;
}

function Event(thing) {
  this.thing = thing;
}

$(document).ready(function() {
  $("form#new-vacay").submit(function(event) {
// debugger;
    var inputtedCity = $("input.new-city").val();
    var inputtedState = $("input.new-state").val();
    var inputtedCountry = $("input.new-country").val();
    var newVacay = new Vacay(inputtedCity, inputtedState, inputtedCountry);
    var newEvent =  $("input.new-event").val();
    newVacay.events.push(newEvent);

  $("ul#trips").append("<li><span class='trip'>" + newVacay.fullVacay() + "</span></li>");


  $(".trip").last().click(function() {
      $("#show-trip").show();
      $("#show-trip h2").text(newVacay.fullVacay());
      $("ul#events").text("");
      newVacay.events.forEach(function(event) {
        $("ul#events").append("<li>" + event + "</li>");
  });
  });
  event.preventDefault();
  });
});



// User Interface Logic
// $(document).ready(function() {
//   $("form#IDselector").submit(function(event) {
//     // variables and shit go here, bitch!
//
//     // link your muthafuckin' variables to yo bad-ass bidness logic function, Yo!
//
//     // Make shit happen here...BITCH!
//
//     // Muthafuckin' variables connect to your output down here hommie.
//
//     // Show me some money, hunny, and reveal that hiddin fine shit you got stashed.
//
//     // It's all good baby.'
//     event.preventDefault();
//   });
// });
