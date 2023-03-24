<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8'
$mail->setLanguage('uk', 'phpmailer/language/')
$mail->isHTML(true); 

$mail->setFrom('from@example.com', 'Mailer');
$mail->addAddress('catarina.leon.203@gmail.com', 'Joe User');
$mail->Subject = 'Заявка на Каппадокію';

// тело письма
$body = '<h1>Заявка з форми</h1>';

if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Ім`я:</strong> '.$_POST['name'].'</p>'
}

if(trim(!empty($_POST['phone']))){
	$body.='<p><strong>Номер телефону:</strong> '.$_POST['phone'].'</p>'
}

if (!$mail->send()) {
	$message = 'Помилка!!!'
}else{
	$message = 'Дані надіслані!'
}

$response = ['message' => $message];

header('Content-type: application/json');

echo json_encode($response);

?>
