//Business logic
Pizza.prototype.getCost = function () {
  if (this.topping == "pepperoni"){
     this.cost = 10;
  }
  else if (this.topping == "cheese"){
     this.cost = 5;
  }
  else if(this.topping == "artichoke"){
     this.cost = 15;
  }
  return this.cost;
}



function Pizza(topping, size, cost) {
  this.topping = topping;
  this.size = size;
  this.cost = cost;
}

//ui
$(document).ready(function()  {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const topping = $("input#topping1").val();
    const size = $("input#size").val();
    const cost = 0;
    let pizza = new Pizza (topping, size, cost);
    pizza.getCost(pizza);
    
    

})

})




