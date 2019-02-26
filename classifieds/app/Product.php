<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    protected $fillable = ['title','description', 'price','category_id', 'seller_id'];


    public function categories()
    {
        return $this->belongsTo('App\Category', 'id');
    }

    public function images()
    {
        return $this->hasMany('App\Image');
    }
}
