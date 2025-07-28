@extends('layout')

@section('content')
<div class="container mt-5">
    <h1>My To-Do List</h1>

    <form action="{{ route('todo.store') }}" method="POST" class="mb-4">
        @csrf
        <div class="input-group">
            <input type="text" name="title" class="form-control" placeholder="New task..." required>
            <button class="btn btn-primary">Add</button>
        </div>
    </form>

    @foreach ($todos as $todo)
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
                <form action="{{ route('todo.update', $todo) }}" method="POST" class="d-inline">
                    @csrf
                    @method('PUT')
                    <input type="hidden" name="completed" value="{{ $todo->completed ? 0 : 1 }}">
                    <button class="btn btn-sm {{ $todo->completed ? 'btn-success' : 'btn-outline-success' }}">
                        {{ $todo->completed ? '✓' : '□' }}
                    </button>
                </form>
                <span class="{{ $todo->completed ? 'text-decoration-line-through text-muted' : '' }}">
                    {{ $todo->title }}
                </span>
            </div>

            <form action="{{ route('todo.destroy', $todo) }}" method="POST">
                @csrf
                @method('DELETE')
                <button class="btn btn-sm btn-danger">Delete</button>
            </form>
        </div>
    @endforeach
</div>
@endsection
