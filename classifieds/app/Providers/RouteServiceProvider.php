<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::group([
            'middleware' => ['api', 'cors'],
            'namespace' => $this->namespace,
            'prefix' => 'api',
        ], function ($router) {
             //Add you routes here, for example:
            Route::apiResource('/products','ProductsController');
            Route::apiResource('/categories','CategoriesController');
            Route::get('/products/bybrand/{id}', 'ProductsController@get_products_by_parent_id');
            Route::get('/products/byseller/{id}', 'ProductsController@get_products_by_seller_id');
            Route::post('register', 'UserController@register');
            Route::post('login', 'UserController@authenticate');
            Route::get('open', 'DataController@open');
            Route::post('/create_new_product', 'ProductsController@store');
            Route::get('/product/single/{id}', 'ProductsController@single_product_view');

            Route::group(['middleware' => ['jwt.verify']], function() {
                Route::get('user', 'UserController@getAuthenticatedUser');
                Route::get('closed', 'DataController@closed');
            });
        });
        
    }
}
