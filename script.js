document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.querySelector('.material');
  const registrationMessage = document.getElementById('registrationMessage');

  registrationForm.addEventListener('submit', async function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // You can make an AJAX request to the server here if needed

    // Show the registration message (if necessary)
    if (registrationMessage) {
      registrationMessage.style.display = 'block';
    }

    // You can redirect the user after showing the message if needed
    // window.location.href = '/success'; // Uncomment this line if you want to redirect
  });
});
