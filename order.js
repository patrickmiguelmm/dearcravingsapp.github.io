document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the selected product name from localStorage
  var productName = localStorage.getItem("productName");

  // Update the product name in the order details section
  var productNameElement = document.getElementById("product-name");
  productNameElement.textContent = productName;
});

function handleSubmitOrder(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  const orderDetails = {
    productName: productNameElement.textContent,
    customerName: name,
    customerEmail: email,
    customerAddress: address,
  };

  // Display the order details
  const orderDetailsContainer = document.getElementById('order-details');
  orderDetailsContainer.style.display = 'block';
  orderDetailsContainer.innerHTML = `
    <h3>Order Details</h3>
    <p><strong>Product:</strong> ${orderDetails.productName}</p>
    <p><strong>Name:</strong> ${orderDetails.customerName}</p>
    <p><strong>Email:</strong> ${orderDetails.customerEmail}</p>
    <p><strong>Address:</strong> ${orderDetails.customerAddress}</p>
  `;

  customerInfoForm.reset();
}

const customerInfoForm = document.getElementById('customer-info-form');
customerInfoForm.addEventListener('submit', handleSubmitOrder);
