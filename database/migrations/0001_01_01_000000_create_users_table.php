<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // id: bigint, unsigned, auto-increment
            $table->string('full_name');
            $table->string('email')->unique(); // Index
            $table->string('phone')->nullable();
            $table->text('address')->nullable();
            $table->string('role')->default('client');
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken(); // varchar(100), nullable
            $table->timestamps(); // created_at and updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
