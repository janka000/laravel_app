@extends('layout')

@section('content')
<div class="container mt-5">
    <a href="{{ route('posts.index') }}" class="btn btn-success mb-3">Posts</a>
    <a href="{{ route('todo.index') }}" class="btn btn-info mb-3">Todos</a>
</div>
@endsection
