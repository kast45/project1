$(document).ready(function() {

    var database = {
      "raslen": "raslen1234",
      "nciri": "nciri1234",
      "alaa": "alaa1234"
    };
  
    $('form').submit(function(event) {
      event.preventDefault(); 
      
      
      var username = $('input[type="text"]').val();
      var password = $('input[type="password"]').val();
      
     
      
      if (database.hasOwnProperty(username)) {
       
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