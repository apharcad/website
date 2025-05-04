<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Main Website Routes
Route::get('/', function () {
    return Inertia::render('Welcome');
});

// About Page
Route::get('/about', function () {
    return Inertia::render('About/Index');
});

// Services Pages
Route::get('/services', function () {
    return Inertia::render('Services/Index');
});

// Individual Service Pages (dynamic route)
Route::get('/services/{id}', function ($id) {
    return Inertia::render('Services/Show', [
        'serviceId' => $id
    ]);
});

// Pages Section
Route::get('/pages', function () {
    return Inertia::render('SubPages/Index');
});

// Blog Pages
Route::get('/blog', function () {
    return Inertia::render('Blog/Index');
});

Route::get('/blog/{id}', function ($id) {
    return Inertia::render('Blog/Show', [
        'postId' => $id
    ]);
});

Route::get('/blog/category/{category}', function ($category) {
    return Inertia::render('Blog/Category', [
        'category' => $category
    ]);
});

// Contact Page
Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
