<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persona', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('rut')->unique();
            $table->string('tipo');
            $table->string('razon_social');
            $table->string('giro');
            $table->string('direccion');
            $table->bigInteger('region')->unsigned();
            $table->bigInteger('comuna')->unsigned();
            $table->foreign('region')->references('id')->on('regiones');
            $table->foreign('comuna')->references('id')->on('comunas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persona');
    }
}
