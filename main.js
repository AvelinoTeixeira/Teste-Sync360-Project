// script.js
document.getElementById('update-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get updated values
  var newName = document.getElementById('new-name').value;
  var newAge = document.getElementById('new-age').value;
  var newAddress = document.getElementById('new-address').value;
  var newState = document.getElementById('new-state').value;
  var newBio = document.getElementById('new-bio').value;
  
  // Update user details
  document.getElementById('name').textContent = newName;
  document.getElementById('age').textContent = newAge;
  document.getElementById('address').textContent = newAddress;
  document.getElementById('state').textContent = newState; // Updated to match the id in your HTML
  document.getElementById('bio').textContent = newBio;
  
  // Reset form
  this.reset();
});
