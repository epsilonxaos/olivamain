<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/initial', [ApiController::class, 'getHomeResources']);
Route::post('/sucursal', [ApiController::class, 'getSucursal']);

Route::post('/send/contact', [MailController::class, 'sendContact']);
Route::post('/send/events', [MailController::class, 'sendEvento']);
Route::post('/send/bolsa', [MailController::class, 'sendBolsa']);
