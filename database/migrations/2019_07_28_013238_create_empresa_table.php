<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmpresaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresa', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('rut')->unique();
            $table->string('nombre');
            $table->string('email')->unique();
            $table->string('telefono');
            $table->string('celular');
            $table->text('direccion');
            $table->boolean('gran_contib')->comment('Tipo de contribuyente para determinar las obligaciones gran contribuyente u ordinario');
            $table->string('giro_empresa');
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('region')->unsigned();
            $table->bigInteger('comuna')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('region')->references('id')->on('regiones');
            $table->foreign('comuna')->references('id')->on('comunas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresa');
    }
}
