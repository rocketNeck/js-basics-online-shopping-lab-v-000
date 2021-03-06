'use strict';

var orderNumber;
var total;
var cardNumber;
var cart = [];  // items in here [{k: v}, {k: v}, {k: v}]

function addToCart(item){
  var o = {}
  var randPrice = Math.floor(Math.random() * 101);
  o[item] = randPrice;
  cart.push(o);
  total += randPrice;
  console.log(item + " has been added to your cart");
}


function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty");
  }else{
    for (var i = 0; i < cart.length; i++){
      for (var key in cart[i]){
        console.log("In your cart you have: " + key + " $" + cart[i][key]);
      }
    }
  }
}

function addCreditCard(ccNum){
  cardNumber = ccNum;
  console.log("Your credit card number has been saved.");
  return cardNumber;
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      total -= cart[i][item];
      cart.splice(i, 1);
    }else {
      console.log("That item is not in your cart");
    }
  }
}

function placeOrder(){
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order");
  }else {
    console.log("Your total cost is: $" + total + " and will be charged to the credit card on file (" + cardNumber + "). Your order number is " + orderNumber);
    cart = [];
    orderNumber += 1;
    total = 0;
  }
}
//'Your total cost is: $27 and will be charged to the credit card on file (12346312). Your order number is 0'
//'Your total cost is: $27 and will be charged to the credit card on file 12346312. Your order number is 0'
