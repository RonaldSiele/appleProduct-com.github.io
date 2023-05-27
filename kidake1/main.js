!-- Add this form to your HTML code -->
<form id="feedback-form">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <label for="message">Message:</label><br>
  <textarea id="message" name="message"></textarea><br><br>
  <input type="submit" value="Send Feedback">
</form>

<!-- Add the EmailJS library to your HTML code -->
<script src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
<script>
  // Replace YOUR_USER_ID, YOUR_SERVICE_ID, and YOUR_TEMPLATE_ID with your own values
  emailjs.init("YOUR_USER_ID");
  
  // Add an event listener to the form submission
  document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      "from_name": document.getElementById("name").value,
      "from_email": document.getElementById("email").value,
      "message": document.getElementById("message").value
    })
    .then(function(response) {
      console.log("Email sent successfully!", response);
      alert("Thanks for your feedback!");
    }, function(error) {
      console.error("Email send failed!", error);
      alert("Sorry, there was an error sending your feedback. Please try again later.");
    });
  });
</script>