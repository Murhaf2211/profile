<?php
    $error = ""; $successMessage = "";
    
    if ($_POST) {
      if (!$_POST["name"]) {    
        $error .= "The Name is required.<br>";
      }
      if (!$_POST["email"]) {  
        $error .= "An email address is required.<br>";    
      } 
      if (!$_POST["message"]) {  
        $error .= "The comment field is required.<br>";      
      } 
      if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {    
        $error .= "The email address is invalid.<br>";     
      } 
      if ($error != "") {   
          $error = '<div class="alert alert-danger" role="alert"><p>There were error(s) in your form:</p>' . $error . '</div>';   
      } else {
          $emailTo = "orfali.murhaf@web.de";  
          $name = $_POST['name'];
          $subject = $_POST['subject'];
          $message = $_POST['message'];
          $content = "You have received a new message from the user $name.\n".
          "Here is the message:\n $message".
          $headers = "From:".$_POST['email'];
          if (mail($emailTo,$subject,$content,$headers)) {
            $successMessage = '<div class="alert alert-success" role="alert">Your message was sent, we\'ll get back to you ASAP!</div>';
          }else {  
            $error = '<div class="alert alert-danger" role="alert"><p><strong>Your message couldn\'t be sent - please try again later</div>';   
          } 
        } 
    }
?>
