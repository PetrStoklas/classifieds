<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    //
    protected $fillable = ['product_id', 'filename', 'original_filename', 'mime'];
    public function products()
    {
        return $this->belongsTo('App\Product');
    }
}
