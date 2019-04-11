/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.cart) || [];
  console.log(cartItems, ' in load cart getting data');
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // table.getELementsByTagName('tr').innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

function showCart() {
  
  //Find the table body
  var tbody = table.childNodes[3];

  //Iterate over the items in the cart
  for (var i = 0; i< cart.items.length; i ++){
    var tr = document.createElement('tr');
    var a = document.createElement('a');
    var linkText = document.createTextNode('remove');
    a.appendChild(linkText);
    a.href = '';
    
    var removeTd = document.createElement('td');
    removeTd.appendChild(a);
    removeTd.id = `${cart.items[i].product}`;
    removeTd.addEventListener('click', removeItemFromCart);
    var quantityTd = document.createElement('td');
    quantityTd.innerText=`${cart.items[i].quantity}`;
    var productTd = document.createElement('td');
    productTd.innerText = `${cart.items[i].product}`;

    tr.appendChild(removeTd);
    tr.appendChild(quantityTd);
    tr.appendChild(productTd);
    tbody.appendChild(tr);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage

  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
