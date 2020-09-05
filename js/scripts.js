function Pizza(topping1, topping2, topping3, topping4, topping5, size, cost) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.topping5 = topping5;
  this.size = size;
  this.cost = cost;
}
function PizzaBook(){
  this.pizzas = [];
}
PizzaBook.prototype.addPizza = function(pizza)  {
  this.pizzas.push(pizza);
}
Pizza.prototype.getCost = function () {
  if(this.size == "Small")  {
    this.cost = 5;
  }
  else if(this.size == "Medium")  {
    this.cost = 10;
  }
  else if(this.size == "Large") {
    this.cost = 15;
  }
  else if (this.size == "Giant")  {
    this.cost = 30;
  }
  if (this.topping1 == "Pepperoni"){
    this.cost += 5;
  }
  if (this.topping2 == "Cheese"){
    this.cost += 5;
  }
  if (this.topping3 == "Artichoke") {
    this.cost += 5;
  }
  if (this.topping4 == "Anchovy") {
    this.cost += 5;
  }
  if (this.topping5 == "NutritionalYeast"){
    this.cost +=5;
  }
  else {
    this.cost += 0.00;
  }
}
//ui
let pizzaBook = new PizzaBook();
$(document).ready(function()  {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const Input1 = $("input:checkbox[name=topping1]:checked").val();
    const Input2 = $("input:checkbox[name=topping2]:checked").val();
    const Input3 = $("input:checkbox[name=topping3]:checked").val();
    const Input4 = $("input:checkbox[name=topping4]:checked").val();
    const Input5 = $("input:checkbox[name=topping5]:checked").val();
    const size = $("input:radio[name=size]:checked").val();
    const cost = 0;
    let pizza = new Pizza (Input1, Input2, Input3, Input4, Input5, size, cost);
    pizzaBook.addPizza(pizza);
    pizza.getCost();
    $("#cost").text(pizza.cost);
    $("#output").show();
    $(".alert").show();
    $("#pizzaSize").text(pizza.size);
    console.log(pizzaBook.pizzas);
    $("#orders").text.toString((pizzaBook.pizzas));
  })
})



