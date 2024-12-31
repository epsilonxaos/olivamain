<?php

namespace App\Http\Controllers;

use App\Mail\MailBolsaTrabajo;
use App\Mail\MailContacto;
use App\Mail\MailEventos;
use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
	const SUCCESS_MESSAGE = "Mensaje enviado!";

	public function sendBolsa(Request $request)
	{
		try {
			$w = Website::find(1);

			$mailsCC = $w->contact_cc_mail_bolsa;

			$mail = Mail::to($w->contact_mail_bolsa);
			if ($mailsCC) {
				$arrayCC = explode(";", $mailsCC);
				$mail->cc($arrayCC);
			}

			$mail->send(new MailBolsaTrabajo($request->toArray()));

			return response(["success" => true, "message" => self::SUCCESS_MESSAGE], 200);
		} catch (\Exception $e) {
			return response(["success" => false, "message" => $e->getMessage()], 500);
		}
	}

	public function sendEvento(Request $request)
	{
		try {
			$w = Website::find(1);

			$mail = Mail::to($w->contact_mail_eventos);

			$mailsCC = $w->contact_cc_mail_eventos;
			if ($mailsCC) {
				$arrayCC = explode(";", $mailsCC);
				$mail->cc($arrayCC);
			}

			$mail->send(new MailEventos($request->toArray()));

			return response(["success" => true, "message" => self::SUCCESS_MESSAGE], 200);
		} catch (\Exception $e) {
			return response(["success" => false, "message" => $e->getMessage()], 500);
		}
	}

	public function sendContact(Request $request)
	{
		try {
			$w = Website::find(1);

			$mail = Mail::to($w->contact_mail);

			$mailsCC = $w->contact_cc_mail;
			if ($mailsCC) {
				$arrayCC = explode(";", $mailsCC);
				$mail->cc($arrayCC);
			}

			$mail->send(new MailContacto($request->toArray()));
			return response(["success" => true, "message" => self::SUCCESS_MESSAGE], 200);
		} catch (\Exception $e) {
			return response(["success" => false, "message" => $e->getMessage()], 500);
		}
	}

	public function sendTest()
	{
		$w = Website::find(1);

		$mail = Mail::to($w->contact_mail);

		$mailsCC = $w->contact_cc_mail;
		if ($mailsCC) {
			$arrayCC = explode(";", $mailsCC);
			$mail->cc($arrayCC);
		}

		$mail->send(new MailEventos([
			"nombre_completo" => "Jesus",
			"telefono" => "(993) 999-9999",
			"email" => "soporte@dev.com",
			"mensaje" => "adadad"
		]));
	}
}
