// Business Logic

// Pizza Constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
  this.totalCost = 0;
}

// Total Cost Prototype
Pizza.prototype.totalCost = function() {

  var totalCost = 0;

  this.toppings.forEach(function(topping) {
    if (topping === "Cheese") {
      this.totalCost = 3;
    } else if (topping === "Pepperoni") {
      this.totalCost = 1;
    } else if (topping === "Mushrooms") {
      this.totalCost = 1;
    } else if (topping === "Sausage") {
      this.totalCost = 3;
    } else if (topping === "Bell Pepper") {
      this.totalCost = 2;
    } else { // Onions
      this.totalCost = 1;
    }
    totalCost += this.totalCost;
  });
  
  this.totalCost = totalCost;
}

// User Interface Logic
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = []; // Array for Toppings

    $("input:checkbox[name=add-toppings]:checked").each(function(){
      inputtedToppings.push($(this).val());
    });
    console.log(inputtedToppings);
    var inputtedSize = $("input:radio[name=select-a-size]:checked").val();
    console.log(inputtedSize);
    var pizza = new Pizza(inputtedToppings, inputtedSize);

    $("order-detail h2").text(pizza);
  });
});
