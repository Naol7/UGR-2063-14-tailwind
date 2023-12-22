document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');

    burger.addEventListener('click', function() {
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        burger.classList.add('clicked');
      } else {
        menu.style.display = 'none';
        burger.classList.remove('clicked');
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform data validation
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            // If all fields are valid, you can submit the form to the processor
            const formData = new FormData(form);
            fetch('form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                // Handle the response from the server
                console.log(data);
            })
            .catch(error => {
                // Handle any errors that occur during the fetch operation
                console.error('Error:', error);
            });
        } else {
            // If any field is invalid, display an error message or perform other actions
            console.log('Please fill out all fields.');
        }
    });
});