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
		$w = Website::find(1);

		Mail::to($w->email_bolsa)->send(new MailBolsaTrabajo($request->toArray()));

		return response("ok", 200);
	}

	public function sendEvento(Request $request)
	{

		$w = Website::find(1);

		$mailsCC = $w->emails_cc;
		$arrayCC = explode(";", $mailsCC);

		Mail::to($w->email_eventos)
			->cc($arrayCC)->send(new MailEventos($request->toArray()));

		return response("ok", 200);
	}
}
