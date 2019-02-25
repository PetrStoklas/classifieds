<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    public function categories()
    {
        return $this->belongsTo('App\Category', 'id');
    }

    public function images()
    {
        return $this->hasMany('App\Image');
    }
}
