@extends('index')

@section('content')

    <h1> All products</h1>
    <div id="products" class="container-fluid d-flex flex-row flex-wrap justify-content-around ">
        
        
        
        @foreach($products as $product)
        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                {{-- product images --}}
                @foreach($product->images as $image)
                <div class="card">
                    <img class="img-responsive" src="{{ asset('uploads/' . $image->filename) }}" class="card-img-top" alt="...">
                </div>
                @endforeach
                {{-- product information --}}
                <div class="card-body">
                <h5 class="card-title"> Title: {{ $product->title }}</h5>
                <p class="card-text"> Description: {{ $product->description }}</p>
                <p class="card-text"> Price: {{ $product->price }}</p>
                <p class="card-text"> Seller id: {{ $product->seller_id }}</p>
                <p class="card-text"> Product id: {{ $product->id }}</p>
                {{-- <p class="card-text"> Product id: {{ $product->categories->name->get() }}</p> --}}
                </div>
                {{-- edit delete buttons --}}
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="{{ action('ProductsController@edit', $product->id) }}">Edit</a>
                    </li>


                    <li class="nav-item">

                        <form method="POST" action="{{ action('ProductsController@destroy', $product->id) }}">
                            {{ method_field('delete') }}
                            @csrf
                        <input type="submit" value="Delete">
                        </form>
                    </li>



                </ul>
            </div>
        @endforeach

    </div>
@endsection