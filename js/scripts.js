//Business logic
Pizza.prototype.getCost = function () {
  //check size
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
  //add topping
  if (this.topping == "Pepperoni"){
     this.cost += 10;
  }
  else if (this.topping == "Cheese"){
     this.cost += 5;
  }
  else if (this.topping == "Artichoke") {
    this.cost += 20;
  }
  else if (this.topping == "Anchovy") {
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
    const topping = $("#topping").val();
    const size = $("#size").val();
    const cost = 0;
    let pizza = new Pizza (topping, size, cost);
    //alert("Your pizza cost is " + pizza.getCost(pizza));
    $("#cost").text(pizza.getCost(pizza));
   
    
    

})

})




