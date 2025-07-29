<?php
use App\Models\Post;

Route::get('/', function () {
    $posts = Post::latest()->get();
    return view('blog', ['posts' => $posts]);
});

use Illuminate\Support\Facades\Route;

Route::get('/posts/{post}', function (Post $post) {
    return view('post', ['post' => $post]);
});

use Illuminate\Http\Request;

Route::get('/posts/create', function () {
    return view('create');
});

Route::post('/posts', function (Request $request) {
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'body' => 'required|string',
    ]);

    Post::create($validated);

    return redirect('/');
});
