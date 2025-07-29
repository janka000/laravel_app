<?php

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// API: Get all posts
Route::get('/api/posts', function () {
    return Post::latest()->get();
});

// API: Get a single post
Route::get('/api/posts/{post}', function (Post $post) {
    return $post;
});

// API: Create a new post
Route::post('/api/posts', function (Request $request) {
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'body' => 'required|string',
    ]);

    $post = Post::create($validated);

    return response()->json($post, 201);
});

// API: Update a post
Route::put('/api/posts/{post}', function (Request $request, Post $post) {
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'body' => 'required|string',
    ]);

    $post->update($validated);

    return response()->json($post);
});

// API: Delete a post
Route::delete('/api/posts/{post}', function (Post $post) {
    $post->delete();
    return response()->json(null, 204);
});

// Catch-all route for React app - let React Router handle front-end routing
Route::get('/{any}', function () {
    return view('app'); // Your main React app blade view
})->where('any', '.*');
