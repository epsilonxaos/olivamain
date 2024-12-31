<?php

namespace App\Mail;

use App\Models\Forms;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class MailBolsaTrabajo extends Mailable
{
	use Queueable, SerializesModels;
	public $data;
	public $forms;

	/**
	 * Create a new message instance.
	 */
	public function __construct($data)
	{
		$this->data = $data;
		$this->forms = Forms::where('section', 'bolsa')->get();
	}

	/**
	 * Get the message envelope.
	 */
	public function envelope(): Envelope
	{
		return new Envelope(
			subject: 'Nueva Solicitud de Bolsa de Trabajo',
		);
	}

	/**
	 * Get the message content definition.
	 */
	public function content(): Content
	{
		return new Content(
			view: 'mails.bolsa',
			with: array_merge($this->data, ['forms' => $this->forms])
		);
	}

	/**
	 * Get the attachments for the message.
	 *
	 * @return array<int, \Illuminate\Mail\Mailables\Attachment>
	 */
	public function attachments(): array
	{
		return [];
	}
}
