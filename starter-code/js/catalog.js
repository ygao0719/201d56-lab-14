/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
var selectElement = document.getElementById('items');
var cartItemCounter = 0;
var selectProduct;
var selectQuantity;
document.getElementById('quantity').min = 0;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product

  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.textContent = `${Product.allProducts[i].name}`;
    optionEl.value = `${Product.allProducts[i].name}`;
    selectElement.appendChild(optionEl);
    console.log(Product.allProducts[i].name);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  console.log(event);
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  //  suss out the item picked from the select list
  selectProduct = selectElement.options[selectElement.selectedIndex].value;

  // get the quantity

  selectQuantity = document.getElementById('quantity').value;
  console.log(selectQuantity);
  //using those, add one item to the Cart
  cart.addItem(selectProduct,selectQuantity);
  cartItemCounter++;
}

//Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  document.getElementById('itemCount').innerText = cartItemCounter;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
var cartContentDiv = document.getElementById('cartContents');
var ulEl = document.createElement('ul');
cartContentDiv.appendChild(ulEl);
function updateCartPreview() {
  // TODO: Get the item and quantity from the form

  // TODO: Add a new element to the cartContents div with that information
    var liEl = document.createElement('li');
    liEl.textContent= `${selectProduct} x ${selectQuantity}`;
    ulEl.appendChild(liEl);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
