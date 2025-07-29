<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Create Post</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
<div class="container my-5">
    <h1 class="mb-4 text-center">Create New Post</h1>

    <form method="POST" action="/posts">
        @csrf

        <div class="mb-3">
            <label class="form-label">Title</label>
            <input name="title" type="text" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Body</label>
            <textarea name="body" rows="5" class="form-control" required></textarea>
        </div>

        <button type="submit" class="btn btn-success">Publish</button>
        <a href="/" class="btn btn-outline-secondary ms-2">Cancel</a>
    </form>
</div>
</body>
</html>
