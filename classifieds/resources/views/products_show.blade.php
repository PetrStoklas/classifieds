@extends('index')

@section('content')

    <h1> ALL PRODUCTS </h1>
    @foreach($products as $product)

        <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
            @foreach($product->images as $image)
            <div class="card">
                <img class="img-responsive" src="{{ asset('uploads/' . $image->filename) }}" class="card-img-top" alt="...">
            </div>
            @endforeach

            <div class="card-body">
              <h5 class="card-title"> Title: {{ $product->title }}</h5>
              <p class="card-text"> Description: {{ $product->description }}</p>
              <p class="card-text"> Price: {{ $product->price }}</p>
              <p class="card-text"> Seller id: {{ $product->seller_id }}</p>
              <p class="card-text"> Product id: {{ $product->id }}</p>
            </div>
        </div>
    @endforeach

@endsection