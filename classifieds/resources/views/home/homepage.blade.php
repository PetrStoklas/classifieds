@extends('index')

@section('content')
<div class="input-group input-group-lg">
    <h1>{!!  isset($product) ? "Edit product" : "Add product" ; !!}</h1>
    
    <form method="POST" action="{!!  isset($product) ? action('ProductsController@update', $product->id) : action('ProductsController@store'); !!}" enctype="multipart/form-data">{{--IMPORTANT TO HAVE THE enctype attr IF SUBMITING IMG--}}
        @csrf
        {{ csrf_field() }}
        @if(isset($product))
            {{ method_field('PUT') }}
        @endif 

        <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg">title</span>  
        </div>
        <input type="text" class="form-control" name="title" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="{!! isset($product) ? $product->title : "" ; !!}">

        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">description</span>
        </div>
        <input type="text" class="form-control" name="description" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="{!! isset($product) ? $product->description : "" ; !!}">

        <div class="input-group-prepend">   
            <span class="input-group-text" id="inputGroup-sizing-lg">price</span>
        </div>
        <input type="number" class="form-control" name="price" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="{!! isset($product) ? $product->price : "" ; !!}">

        <div class="form-group">
            <label for="exampleFormControlSelect1">Select category</label>
            <select class="form-control" id="exampleFormControlSelect1" name="category_id">

            @foreach($categories as $category)
                   <option value="{{ $category->id }}" {!! isset($product) ? "selected=".$product->category_id : "" ; !!}>{{ $category->name }} </option>
            @endforeach 

            </select>
        </div>

        <div class="input-group-prepend">   
            <span class="input-group-text" id="inputGroup-sizing-lg">Import images</span>
        </div>
        <input type="file" class="form-control" name="image" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
        {{-- <div class="dropzone" id="my-awesome-dropzone"></div> --}}

        {{-- <input name="dropzone" class="dropzone"> --}}

        <input type="submit" class="btn btn-dark" value="submit" name="submit">
    </form>
    <form class="dropzone" id="myDropzone" action="{{ action('ProductsController@store') }}" enctype="multipart/form-data" method="POST">
        @csrf
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">title</span>  
            </div>
            <input type="text" class="form-control" name="title" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="{!! isset($product) ? $product->title : "" ; !!}">
    
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">description</span>
            </div>
            <input type="text" class="form-control" name="description" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="{!! isset($product) ? $product->description : "" ; !!}">
    
            <div class="input-group-prepend">   
                <span class="input-group-text" id="inputGroup-sizing-lg">price</span>
            </div>
            <input type="number" class="form-control" name="price" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="{!! isset($product) ? $product->price : "" ; !!}">
    
            <div class="form-group">
                <label for="exampleFormControlSelect1">Select category</label>
                <select class="form-control" id="exampleFormControlSelect1" name="category_id">
    
                @foreach($categories as $category)
                       <option value="{{ $category->id }}" {!! isset($product) ? "selected=".$product->category_id : "" ; !!}>{{ $category->name }} </option>
                @endforeach 
    
                </select>
            </div>
        {{-- <div class="dropzone" id="myDropzone"></div> --}}
        <button type="submit" id="submit-all"> upload </button>
    </form>

</div>
@endsection