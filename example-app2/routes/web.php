<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TodoController;

Route::get('/', function () {
    return view('app');
});

Route::resource('posts', PostController::class);

Route::resource('todo', TodoController::class);

