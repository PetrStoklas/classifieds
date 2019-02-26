<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Category;
use App\Product;
use App\User;
use App\Image;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Product::all();
        
        
        return view('products_show', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $categories = Category::all();        

        return view('home.homepage', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        //creating and inserting product into DB('products')
        $new_product = new Product;
        $new_product->title = $request->title;
        $new_product->description = $request->description;
        $new_product->category_id = $request->category_id;
        $new_product->price = $request->price;
        $new_product->seller_id = \Auth::user()->id;
        $new_product->save();

        //preparing data of the image
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension(); // NEEDS PARAMETERS???
        Storage::disk('public')->put($image->getFilename().'.'.$extension,  File::get($image));

        //creating and inserting image into DB('images')
        $new_image = new Image;
        $new_image->product_id = $new_product->id;
        $new_image->filename = $image->getFilename().'.'.$extension;
        $new_image->original_filename = $image->getClientOriginalName();
        $new_image->mime = $image->getClientMimeType();
        $new_image->save();

        session()->flash('success_message', 'Success!');

        return redirect('/products');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
