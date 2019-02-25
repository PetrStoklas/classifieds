<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\OfferTable;


class ProductsController extends Controller
{
    public function index ()
    {
        $product = Product::find(1);
        $offerTable = OfferTable::find(1);
        dd($offerTable->user);
    }
}
