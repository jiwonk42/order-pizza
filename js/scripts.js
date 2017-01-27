// Business Logic

// Pizza Constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}

// User Interface Logic
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = []; // Array for Toppings

    $("input:checkbox[name=add-toppings]:checked").each(function(){
      inputtedToppings.push($(this).val());
    });

    var inputtedSize = $("input:radio[name=select-a-size]:checked").val();

    var pizza = new Pizza(inputtedToppings, inputtedSize);

    $("order-detail h2").text(pizza);
  });
});
