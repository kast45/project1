$(document).ready(function() {
    // Dummy database
    var database = {
      "raslen": "raslen1234",
      "nciri": "nciri1234",
      "alaa": "alaa1234"
    };
  
    // function to handle form submission
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // the values from the username and password box
      var username = $('input[type="text"]').val();
      var password = $('input[type="password"]').val();
      
     
      // check if the username exists in the database
      if (database.hasOwnProperty(username)) {
        // Check if the password matches the one in the database
        if (database[username] === password) {
          alert('Login successful!');
        
        } else {
          alert('Incorrect password');
        }
      } else {
        alert('Username not found');
      }
    });
    
})