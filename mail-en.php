<?php

$to = 'kamilkontrabasista@gmail.com';
$name = $_POST['name'];
$mail = $_POST['mail'];
$temat = $_POST['temat'];
$number = $_POST['number'];
$tresc = $_POST['tresc'];

$headers = "From: ".$mail."\n".$temat;


$response = mail($to, $mail, $tresc, $headers);

if($response ==true)
{
 echo "<h1>Message sent</h1>";
}
else
{
    echo "<h1>Message not send</h1>";
}

echo '<a href="contact.html">Return</a>';



?>
