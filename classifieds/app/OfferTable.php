<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OfferTable extends Model
{
    public function poduct()
    {
        return $this->belongsTo('App\Product');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
