// Get the form element
const form = document.getElementById("i1zj");

// Get the input elements
const fullnameInput = document.getElementById("ijowk-7");
const phonenumberInput = document.getElementById("indfi-5");
const emailInput = document.getElementById("ipmgh-7");
const addressInput = document.getElementById("imgis-6");
const messageInput = document.getElementById("i5vyy-7");
const workikContactBox = document.querySelector(".workik-contact-box");
const iconsContainer = document.querySelector(".icons-container");

// Get the submit button
const submitButton = document.getElementById("i634i-7");

// Set up an event listener for the submit button
submitButton.addEventListener("click", function() {
  // Get the values of the input elements
  const fullname = fullnameInput.value;
  const phonenumber = phonenumberInput.value;
  const email = emailInput.value;
  const address = addressInput.value;
  const message = messageInput.value;

  // Create a new form data object
  const formData = new FormData();

  // Add the form data to the form data object
  formData.append("fullname", fullname);
  formData.append("phonenumber", phonenumber);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("message", message);

  // Submit the form data
  fetch("/contact-us", {
    method: "POST",
    body: formData,
  });
});

// Set up an event listener for the icons
iconsContainer.addEventListener("click", function(event) {
  // Get the target of the event
  const target = event.target;

  // Check if the target is a share icon
  if (target.classList.contains("share-icon")) {
    // Open the social media page for the icon
    window.open(target.getAttribute("href"));
  }
});