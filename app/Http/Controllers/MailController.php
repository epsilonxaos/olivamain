<?php

namespace App\Http\Controllers;

use App\Mail\MailBolsaTrabajo;
use App\Mail\MailEventos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
	public function sendBolsa(Request $request)
	{
		Mail::to('jesusgleztr94@gmail.com')->send(new MailBolsaTrabajo($request->toArray()));

		return response("ok", 200);
	}

	public function sendEvento(Request $request)
	{
		Mail::to('jesusgleztr94@gmail.com')->send(new MailEventos($request->toArray()));

		return response("ok", 200);
	}
}
