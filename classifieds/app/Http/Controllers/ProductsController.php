<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Arr;
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
        // it should be possible to use "toJson() for the returned data?"
        // https://laravel.com/docs/5.8/eloquent-serialization

        $products = Product::all();
        $data_to_return = [];
        foreach($products as $product)
        {
            // here I am attaching images to its product -> sending them to frontend as "$data_to_return"
            $images = Image::where('product_id', $product->id)->get();    
            array_push($data_to_return, ['product' => $product, 'images' => $images]);
        }

        $categories = Category::all();     
        
        // return view('products_show', compact('products', 'categories'));
        return $data_to_return;
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
        $product = new Product;
        $product->title = $request->title;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->category_id = $request->category_id;
        $product->seller_id = 1;
        //engine info
        $product->gearbox = $request->gearbox;
        $product->fuel = $request->fuel;
        $product->cubic_capacity = $request->cubic_capacity;
        $product->cylinder = $request->cylinder;
        $product->power = $request->power;
        $product->mileage = $request->mileage;
        $product->emission_class = $request->emission_class;
        // general info
        $product->color = $request->color;        
        $product->interior = $request->interior;
        $product->door_count = $request->door_count;
        $product->registered = $request->registered;
        $product->year = $request->year;
        // dd($product);
        $product->save();

        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension(); // NEEDS PARAMETERS???
        Storage::disk('public')->put($image->getFilename().'.'.$extension,  File::get($image));




        //creating and inserting image into DB('images')
        $new_image = new Image;
        $new_image->product_id = $product->id;
        $new_image->filename = $image->getFilename().'.'.$extension;
        $new_image->original_filename = $image->getClientOriginalName();
        $new_image->mime = $image->getClientMimeType();
        $new_image->save();

        // session()->flash('success_message', 'Success!');

        // return redirect('/products');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::where('category_id', $id)->get();
        $data_to_return = [];
        foreach($product as $product)
        {
            // here I am attaching images to its product -> sending them to frontend as "$data_to_return"
            $images = Image::where('product_id', $product->id)->get();    
            array_push($data_to_return, ['product' => $product, 'images' => $images]);
        }

        $categories = Category::all();     
        
        return $data_to_return;
    }

    
    public function single_product_view ($id)
    {
        $product = Product::where('id', $id)->get();
        $data_to_return = [];
        foreach($product as $product)
        {
            // here I am attaching images to its product -> sending them to frontend as "$data_to_return"
            $images = Image::where('product_id', $product->id)->get();    
            array_push($data_to_return, ['product' => $product, 'images' => $images]);
        }
        
        return $data_to_return;
    }

    public function get_products_by_seller_id($id)
    {
        return Product::where('seller_id', $id)->get();
    }



    public function get_products_by_parent_id($id)
    {

        $category = Category::findOrFail($id);

        $leaveIDs = $this->getChildrenIDs($category, []);

        $data_to_return = [];
        $products = Product::whereIn('category_id', $leaveIDs)->get();
        foreach($products as $product)
        {
            // here I am attaching images to its product -> sending them to frontend as "$data_to_return"
            $images = Image::where('product_id', $product->id)->get();    
            array_push($data_to_return, ['product' => $product, 'images' => $images]); 
        }
        return $data_to_return;
    }



    
    private function getChildrenIDs($category, $IDs){
        if($category->children->count() == 0){
            return [$category->id];
        }

        foreach($category->children as $category){
            $IDs = array_merge($IDs, $this->getChildrenIDs($category, $IDs));
        }

        return $IDs;
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
