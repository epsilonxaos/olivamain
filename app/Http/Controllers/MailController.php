<?php

namespace App\Http\Controllers;

use App\Mail\MailBolsaTrabajo;
use App\Mail\MailEventos;
use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
	public function sendBolsa(Request $request)
	{
		try {
			$w = Website::find(1);

			$mailsCC = $w->contact_cc_mail_bolsa;
			$arrayCC = explode(";", $mailsCC);

			Mail::to($w->contact_mail_bolsa)
				->cc($arrayCC)
				->send(new MailBolsaTrabajo($request->toArray()));

			return response(["success" => true, "message" => "Mensaje enviado!"], 200);
		} catch (\Exception $e) {
			return response(["success" => false, "message" => $e->getMessage()], 500);
		}
	}

	public function sendEvento(Request $request)
	{
		try {
			$w = Website::find(1);

			$mailsCC = $w->contact_cc_mail_eventos;
			$arrayCC = explode(";", $mailsCC);

			Mail::to($w->contact_mail_eventos)
				->cc($arrayCC)
				->send(new MailEventos($request->toArray()));

			return response(["success" => true, "message" => "Mensaje enviado!"], 200);
		} catch (\Exception $e) {
			return response(["success" => false, "message" => $e->getMessage()], 500);
		}
	}

	public function sendContact(Request $request)
	{
		try {
			$w = Website::find(1);

			$mailsCC = $w->contact_cc_mail;
			$arrayCC = explode(";", $mailsCC);

			Mail::to($w->contact_mail)
				->cc($arrayCC)
				->send(new MailEventos($request->toArray()));

			return response(["success" => true, "message" => "Mensaje enviado!"], 200);
		} catch (\Exception $e) {
			return response(["success" => false, "message" => $e->getMessage()], 500);
		}
	}
}
