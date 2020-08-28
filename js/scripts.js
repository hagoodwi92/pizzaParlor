//Business logic
/* Pizza.prototype.getCost = function () {
  if (array contains Pizza )  {
    add 5
  }
  if it contains cheese {
    add 10;
  }
  return totalCost = this.toppingCost;
} */



function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

//ui
$(document).ready(function()  {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const topping1Input = $("input#topping1").val();
    const topping2Input = $("input#topping2").val();
    const topping3Input = $("input#topping3").val();
    const size = $("input#size").val();

    alert(topping2Input, topping3Input, size);

    let pizza = new Pizza (topping1Input, topping2Input, topping3Input, size);
    
    

})

})




