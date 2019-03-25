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
        
        // return view('products_show', compact('products', 'categories'));
        return $products;
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
        // dd($product);
        $product->save();

        foreach ($request->uploadedFiles as $file)
        {
            $image = $file;
            $extension = $image->getClientOriginalExtension(); // NEEDS PARAMETERS???
            Storage::disk('public')->put($image->getFilename().'.'.$extension,  File::get($image));
    
            //creating and inserting image into DB('images')
            $new_image = new Image;
            $new_image->product_id = 1;
            $new_image->filename = $image->getFilename().'.'.$extension;
            $new_image->original_filename = $image->getClientOriginalName();
            $new_image->mime = $image->getClientMimeType();
            $new_image->save();
        }


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
        return Product::where('category_id', $id)->get();
    }

    public function get_products_by_parent_id($id)
    {

        $category = Category::findOrFail($id);

        $leaveIDs = $this->getChildrenIDs($category, []);

        return Product::whereIn('category_id', $leaveIDs)->get();
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
