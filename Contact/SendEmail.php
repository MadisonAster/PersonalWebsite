<?php
 
if(isset($_POST['Submit'])) {
 
    $email_to = 'contact@thomas-mcvay.info';

    function died($error) {
        echo "I'm very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
    if(!isset($_POST['Name']) ||
        !isset($_POST['Email']) ||
        !isset($_POST['Subject']) ||
        !isset($_POST['Message'])) {
        died('I am sorry, but there appears to be a problem with the form you submitted.');       
    }
 
    $name = $_POST['Name']; // required
    $email_from = $_POST['Email']; // required
    $email_subject = $_POST['Subject']; // required
    $message = $_POST['Message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
  
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n\n\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
}
?>

<script>
function createCookie(name,value,seconds){
	if (seconds) {
		var date = new Date();
		date.setTime(date.getTime()+(seconds*1000));
		var expires = '; expires='+date.toGMTString();
	}
	else var expires = '';
	document.cookie = name+'='+value+expires+'; path=/';
}
window.onload = function() {
createCookie('EmailSent','True',3);
window.location.href = "http://www.thomas-mcvay.info/Contact";
};
</script>
