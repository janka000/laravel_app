@extends('layout')

@section('content')
<div class="container mt-5">
    <h1>Posts</h1>

    <a href="{{ route('posts.create') }}" class="btn btn-primary mb-3">Create New Post</a>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    @foreach($posts as $post)
        <div class="card mb-3">
            <div class="card-body">
                <h3>{{ $post->title }}</h3>
                <p>{{ $post->body }}</p>
                <a href="{{ route('posts.show', $post) }}" class="btn btn-info btn-sm">Show</a>

                <a href="{{ route('posts.edit', $post) }}" class="btn btn-warning btn-sm">Edit</a>

                <form action="{{ route('posts.destroy', $post) }}" method="POST" style="display:inline-block;">
                    @csrf
                    @method('DELETE')
                    <button onclick="return confirm('Delete this post?')" class="btn btn-danger btn-sm">Delete</button>
                </form>
            </div>
        </div>
    @endforeach
</div>
@endsection
