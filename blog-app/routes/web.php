<?php

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Home route - shows blog main page, passes posts to blade (React uses this for main list)
Route::get('/', function () {
    $posts = Post::latest()->get();
    return view('blog', ['posts' => $posts]);
});

// Show create post form (blade or React-powered form, depending on your setup)
Route::get('/posts/create', function () {
    return view('create');
});

// Store new post (form submission)
Route::post('/posts', function (Request $request) {
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'body' => 'required|string',
    ]);

    Post::create($validated);

    return redirect('/');
});

// Show edit form (blade or React-powered form)
Route::get('/posts/{post}/edit', function (Post $post) {
    return view('edit', ['post' => $post]);
});

// Update post (form submission)
Route::put('/posts/{post}', function (Request $request, Post $post) {
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'body' => 'required|string',
    ]);

    $post->update($validated);

    return redirect('/posts/' . $post->id);
});

// Catch-all route for post details — serve React app container view here
// So React Router handles showing the post page or edit page client-side
Route::get('/posts/{post}', function () {
    return view('blog');  // Your main React app blade view
});

Route::get('/api/posts/{post}', function (Post $post) {
    return response()->json($post);
});
