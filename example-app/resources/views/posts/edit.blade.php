@extends('layout')

@section('content')
<div class="container mt-5">
    <h1>Edit Post</h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('posts.update', $post) }}" method="POST">
        @csrf
        @method('PUT')

        <div class="mb-3">
            <label>Title</label>
            <input type="text" name="title" class="form-control" value="{{ old('title', $post->title) }}" required>
        </div>

        <div class="mb-3">
            <label>Body</label>
            <textarea name="body" class="form-control" rows="5" required>{{ old('body', $post->body) }}</textarea>
        </div>

        <button class="btn btn-primary" type="submit">Update Post</button>
    </form>
</div>
@endsection
