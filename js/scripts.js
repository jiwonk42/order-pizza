// Business Logic

// Pizza Constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
  this.cost = 0;
}

// Total Cost Prototype
Pizza.prototype.totalCost = function() {

  var totalCost = 0;

  // Adds Topping Cost
  this.toppings.forEach(function(topping) {
    if (topping === "Cheese") {
      this.cost = 3;
    } else if (topping === "Pepperoni") {
      this.cost = 1;
    } else if (topping === "Mushrooms") {
      this.cost = 1;
    } else if (topping === "Sausage") {
      this.cost = 3;
    } else if (topping === "Bell Pepper") {
      this.cost = 2;
    } else { // "Onions"
      this.cost = 1;
    }

    totalCost += this.cost;
  });

  // Adds Size Cost
  if (this.pizzaSize === "Small") {
    this.cost = 12;
  } else if (this.pizzaSize === "Medium") {
    this.cost = 16;
  } else { // "Large"
    this.cost = 20;
  }
  totalCost += this.cost;

  return this.cost = totalCost;
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

    var subtotal = parseInt(pizza.totalCost() * 0.65);

    $("#order-detail").empty().append("<h1>Order Receipt</h1>" +
    "<h4 id='subtotal'>Subtotal: $" + pizza.totalCost() + "</h4>" + "<h4>Tax: + $" + subtotal + "</h4>" + "<hr>"+ "<h4>Total: $" + (pizza.totalCost() + subtotal) + "</h4>" + "<h1>- Thank You -</h1>");
  });
});
