// Business Logic

// Pizza Constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
  this.cost = 0;
}

function Topping(name, cost) {
  this.name = name;
  this.cost = cost;
}

// Total Cost Prototype
Pizza.prototype.totalCost = function() {

  var totalCost = 0;

  // Adds Topping Cost
  this.toppings.forEach(function(topping) {
    if (topping.name === "Cheese") {
      this.cost = 3;
      topping.cost = 3;
    } else if (topping.name === "Pepperoni") {
      this.cost = 1;
      topping.cost = 1;
    } else if (topping.name === "Mushrooms") {
      this.cost = 1;
      topping.cost = 1;
    } else if (topping.name === "Sausage") {
      this.cost = 3;
      topping.cost = 3;
    } else if (topping.name === "Bell Pepper") {
      this.cost = 2;
      topping.cost = 2;
    } else if (topping.name === "Onions") { // "Onions"
    this.cost = 1;
    topping.cost = 1;
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
      console.log($(this));
      inputtedToppings.push(new Topping($(this).val(), 1));
    });

    var inputtedSize = $("input:radio[name=select-a-size]:checked").val();

    var pizza = new Pizza(inputtedToppings, inputtedSize);
    var subtotal = pizza.totalCost() * 0.065;

    subtotal = Math.round(subtotal * 100) / 100;
    pizza.toppings.forEach(function(topping){
      $(".my-order").append("<li>" + topping.name + ", $" + topping.cost + "</li>");
    })
    $("#order-detail").empty().append("<h1>Order Receipt</h1>" +
    "<h4 id='subtotal'>Subtotal: $" + pizza.totalCost() + "</h4>" + "<h4>Tax: + $" + subtotal + "</h4>" + "<hr>"+ "<h4>Total: $" + (pizza.totalCost() + subtotal) + "</h4>" + "<h1>- Thank You -</h1>");
  });
});
