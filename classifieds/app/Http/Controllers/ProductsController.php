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
        // $the = Product::find(20);
        $categories = Category::all();     
        
        return view('products_show', compact('products', 'categories'));
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
        //preparing data of the image
        dd($request);
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension(); 
        $allowed_extensions = ['jpg', 'jpeg', 'png'];

        if(in_array($extension, $allowed_extensions)) {
            
            //saves image into public folder in this project
            Storage::disk('public')->put($image->getFilename().'.'.$extension,  File::get($image));
             
            //stores product info into database
            // $product_data = $request->all();
            // $product_data['seller_id'] = \Auth::user()->id;
            // $new_product = Product::create($product_data);
            
            
            //stores image info into database
            // $new_image = new Image;
            // $new_image->product_id = $new_product->id;
            // $new_image->filename = $image->getFilename().'.'.$extension;
            // $new_image->original_filename = $image->getClientOriginalName();
            // $new_image->mime = $image->getClientMimeType();
            // $new_image->save();
    
            session()->flash('success_message', 'Success!');

        }

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
    public function edit(Product $product)
    {
        $categories = Category::all();
        return view('home.homepage', compact('product', 'categories'));
        // view('home.homepage', compact('id'))
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
        //Only admin should be able to do this 
        Product::find($id)->delete();
        return redirect()->action('ProductsController@index');
    }
}
