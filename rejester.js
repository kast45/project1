$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
      event.preventDefault(); // Prevent form submission
      var username = $('#username').val();
      var password = $('#password').val();
     


      // validation of the username.length
      if (username.length < 5) {
        $('#usernameError').text('Username must be at least 5 characters long');
        return;
      }

      // validation of the  pass. length
      if (password.length < 8) {
        $('#passwordError').text('Password must be at least 8 characters long');
        return;
      }
      if (username.length>5 && password.length>8) {
        window.location.href="./prjct.html"
       }
  else alert ('your are now one of us ')
     
    });
  });