<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/products', 'ProductsController@index');
// Route::get('/products/edit/{id}', 'ProductsController@edit');
// Route::get('/products/delete/{id}', 'ProductsController@destroy');

Route::resource('/products','ProductsController');

Route::get('/home', 'ProductsController@create');
Route::post('/home', 'ProductsController@store');

Auth::routes();

// Route::get('/admin', )
Route::get('admin/home', 'HomeController@index')->name('home');
