//Business logic
Pizza.prototype.getCost = function () {
  //check size
  if(this.size == "small")  {
    this.cost = 5;
  }
  else if(this.size == "medium")  {
    this.cost = 10;
  }
  else if(this.size == "large") {
    this.cost = 15;
  }
  else if (this.size == "giant")  {
    this.cost = 30;
  }
  //add topping
  if (this.topping == "pepperoni"){
     this.cost += 10;
  }
  else if (this.topping == "cheese"){
     this.cost += 5;
  }
  else if (this.topping == "artichoke") {
    this.cost += 20;
  }
  else if (this.topping == "anchovy") {
    this.cost += 15;
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
    const topping = $("input#topping").val();
    const size = $("input#size").val();
    const cost = 0;
    let pizza = new Pizza (topping, size, cost);
    alert("Your pizza cost is " + pizza.getCost(pizza));
    
    

})

})




