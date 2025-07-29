<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Post</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
    <h1>Edit Post</h1>

    <form action="/posts/{{ $post->id }}" method="POST">
        @csrf
        @method('PUT')

        <div class="mb-3">
            <label class="form-label">Title</label>
            <input name="title" value="{{ old('title', $post->title) }}" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Body</label>
            <textarea name="body" class="form-control" rows="6" required>{{ old('body', $post->body) }}</textarea>
        </div>

        <button class="btn btn-primary">Update Post</button>
    </form>
</body>
</html>
