$(document).ready(function() {

    var database = {
      "raslen": "raslen1234",
      "nciri": "nciri1234",
      "alaa": "alaa1234"
    };
  
    $('form').submit(function(event) {
      event.preventDefault(); 
      
      //inputs in vars 
      var username = $('input[type="text"]').val();
      var password = $('input[type="password"]').val();
      
     
      //comparing the input of the user withe the database
      if (database.hasOwnProperty(username)) {
       
        if (database[username] === password) {
         window.location.href = "./majid.html";
        //  alert('Login successful!');
        } else {
          alert('Incorrect password');
        }
      } else {
        alert('Username not found');
      }
    });
    
})
