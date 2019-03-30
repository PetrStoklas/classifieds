<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCarInfoColumnsToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            //
            $table->integer('mileage')->default(0);
            $table->integer('cubic_capacity')->default(0);
            $table->integer('door_count')->default(0);
            $table->integer('year')->default(0);
            $table->integer('cylinder')->default(0);
            $table->integer('registered')->default(0);
            $table->integer('power')->default(0);
            $table->integer('emission_class')->default(0);
            $table->string('color')->default(0);
            $table->string('interior')->default(0);
            $table->string('gearbox')->default(0);
            $table->string('fuel')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            //
            $table->dropColumn('mileage');
            $table->dropColumn('cubic_capacity');
            $table->dropColumn('door_count');
            $table->dropColumn('year');
            $table->dropColumn('cylinder');
            $table->dropColumn('registered');
            $table->dropColumn('power');
            $table->dropColumn('emission_class');
            $table->dropColumn('color');
            $table->dropColumn('interior');
            $table->dropColumn('gearbox');
            $table->dropColumn('fuel');
        });
    }
}
