<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TeamController;


Route::get('/',[HomeController::class,'home']);

Route::get('make_it_solutions', function () {
    return view('home.make_it_solutions');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// Admin Dashboard Route
Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware('auth','admin');

// Manager Dashboard Route
Route::get('manager/dashboard', [HomeController::class, 'manager'])->name('manager.dashboard')->middleware('auth','manager');

//Other Web Pages
Route::get('/aboutus', [HomeController::class, 'aboutus'])->name('aboutus');
Route::get('/classes_page', [HomeController::class, 'classes'])->name('classes');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/event_management', [HomeController::class, 'event_management'])->name('event_management');
Route::get('/training', [HomeController::class, 'training'])->name('training');
Route::get('/learning_coaching', [HomeController::class, 'learning_coaching'])->name('learning_coaching');
Route::get('/testimonials', [HomeController::class, 'testimonials'])->name('testimonials');
Route::get('/classes_page', [HomeController::class, 'languages'])->name('languages');

//Admin Pages
Route::get('/users', [AdminController::class, 'users'])->name('admin.users')->middleware('auth', 'admin');
Route::get('/users/{id}/delete', [AdminController::class, 'destroy'])->name('users.destroy')->middleware('auth', 'admin');
Route::delete('/users/{id}/delete', [AdminController::class, 'destroy'])->name('admin.users.destroy')->middleware('auth', 'admin');
Route::get('/users/{id}/edit', [AdminController::class, 'editUser'])
    ->name('users.edit')
    ->middleware('auth', 'admin');
Route::get('admin/index', [AdminController::class, 'index'])->name('admin.index');
Route::get('/message', [AdminController::class, 'message'])->name('admin.message')->middleware('auth', 'admin');


Route::post('/users/store', [AdminController::class, 'storeUser'])->name('users.store')->middleware('auth', 'admin');
Route::post('/message', [AdminController::class, 'store'])->name('message.store');


// Messages
Route::post('/send-message', [AdminController::class, 'storeMessage'])->name('send.message');
Route::get('/admin/messages', [AdminController::class, 'showMessages'])->name('admin.messages');
Route::patch('/admin/message/{id}/mark-as-read', [AdminController::class, 'markAsRead'])->name('admin.messages.markAsRead');
Route::delete('/admin/message/{id}', [AdminController::class, 'delete'])->name('admin.messages.destroy');
Route::delete('/admin/message/{id}', [AdminController::class, 'destroy'])->name('admin.destroyMessage');
// Route for sending a reply to a message
Route::post('/admin/messages/reply/{id}', [AdminController::class, 'replyMessage'])->name('admin.replyMessage');
Route::post('/admin/messages/reply', [AdminController::class, 'reply'])->name('admin.replyMessage');
Route::get('/admin/message/{id}', [AdminController::class, 'showMessage'])->name('admin.message.show');

//Team
Route::get('/team', [TeamController::class, 'index'])->name('team.index');
Route::resource('team', TeamController::class);