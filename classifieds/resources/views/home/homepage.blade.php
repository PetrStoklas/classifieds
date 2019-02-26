@extends('index')

@section('content')
<div class="input-group input-group-lg">
    <h1> Insert new product </h1>
    
    <form method="POST" action="/home">
        {{ csrf_field() }}
        <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg">title</span>
        </div>
        <input type="text" class="form-control" name="title" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">

        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">description</span>
        </div>
        <input type="text" class="form-control" name="description" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">

        <div class="input-group-prepend">   
            <span class="input-group-text" id="inputGroup-sizing-lg">price</span>
        </div>
        <input type="number" class="form-control" name="price" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">

        <div class="form-group">
            <label for="exampleFormControlSelect1">Select category</label>
            <select class="form-control" id="exampleFormControlSelect1" name="category_id">
            @foreach($categories as $category)
                   <option value="{{ $category->id }}">{{ $category->name }} </option>
            @endforeach 
            </select>
        </div>
        <input type="submit" class="btn btn-dark" value="submit" name="submit">
    </form>

</div>
@endsection