<?php

require_once('PHPMailer/PHPMailer.php');
require_once('PHPMailer/SMTP.php');
require_once('PHPMailer/Exception.php');

use PHPMailer\PHPMailer\PHPmailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['submit']))
{
	$name = $_POST["name"];
	$email = $_POST["mail"];
	$message = $_POST["message"];

	$mail = new PHPMailer();

	try {
		// $mail->SMTPDebug = SMTP::DEBUG_SERVER;
		$mail->setLanguage('pt_br', 'PHPMailer/phpmailer.lang-pt_br.php');
		$mail->isSMTP();
		$mail->Host = 'smtp.gmail.com';
		$mail->SMTPAuth = true;
		$mail->Username = 'conteudosimmailsender@gmail.com';
		$mail->Password = 'Akld@9090!';
		$mail->Port = 587;
	
		$mail->setFrom('conteudosimmailsender@gmail.com');
		$mail->addAddress('luan.todos@gmail.com');
	
		$mail->isHTML(true);
		$mail->Subject = "Contato de {$name} via ConteudoSim";
		$mail->Body = "Email: {$email} <br/><br/> {$message}";
		$mail->AltBody = "Email: {$email}, {$message}";
	
		if($mail->send()) {
			echo 'Email enviado com sucesso';
		} else {
			echo 'Email nao enviado';
		}

		header("Location: http://localhost/"); 
		exit();
	} catch (Exception $e) {
		echo "Erro ao enviar mensagem {$mail->ErrorInfo}";
	}

} 


