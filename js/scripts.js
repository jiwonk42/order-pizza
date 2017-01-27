// Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}

// User Interface Logic
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();
  });
});
