// Smooth scroll to sections when nav links are clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Hover effect on product cards (e.g., cookies)
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.2s ease-in-out';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItemsDiv.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        ${item.name} - R${item.price}
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  cartTotal.textContent = `Total: R${total}`;
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function clearCart() {
  cart = [];
  updateCartDisplay();
}

let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart');
  const totalPrice = document.getElementById('total-price');

  cartList.innerHTML = ''; 
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - R${item.price}`;
    cartList.appendChild(li);
  });

  totalPrice.textContent = `Total: R${total}`;
}

let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart');
  const totalPrice = document.getElementById('total-price');
  const checkoutButton = document.getElementById('checkout-button');

  cartList.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - R${item.price}`;
    cartList.appendChild(li);
  });

  totalPrice.textContent = `Total: R${total}`;
  checkoutButton.style.display = cart.length > 0 ? 'block' : 'none';
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let itemList = cart.map(item => `${item.product} (R${item.price})`).join('\n');
  alert(`Order placed!\n\nItems:\n${itemList}\n\nTotal: R${total}`);

  cart = [];
  total = 0;
  updateCart();
}

let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalPrice = document.getElementById('total-price');
  const checkoutButton = document.getElementById('checkout-button');

  cartList.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - R${item.price}`;
    cartList.appendChild(li);
  });

  totalPrice.textContent = `Total: R${total}`;
  checkoutButton.style.display = cart.length > 0 ? 'block' : 'none';
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const itemList = cart.map(item => `${item.product} (R${item.price})`).join('\n');
  alert(`Order placed!\n\nItems:\n${itemList}\n\nTotal: R${total}`);

  cart = [];
  total = 0;
  updateCart();
}
