<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('en', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('dergelevakristina@gmail.com', 'Фрилансер по жизни');
	//Кому отправить
	$mail->addAddress('dergelevakristina@gmail.com');
	//Тема письма
	$mail->Subject = 'new form submitted"';

	//Рука
	
	//Тело письма
	$body = '<h1>New form information</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Name</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['phone'].'</p>';
	}
	
	

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Form sent succesfully';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>