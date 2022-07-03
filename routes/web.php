<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


// company login
Route::post('/companies/login' , 'CompanyController@login')->name('company_login');



Route::resource('companies_registre', 'RequestCompanyController');
Auth::routes();
// Dashboard Routes


Route::group(['middleware' => 'auth', 'prefix' => 'dashboard'], function () {

    Route::resource('alerts', 'AlertController');
    Route::resource('alerts_to_companies' , 'AlertsToCompaniesController')->except(['index' , 'show']);


    Route::patch('/auth/changepass' , 'AccountSettingsController@changePassword')->name('change_auth_user_password');
    Route::put('settings/updateAll', 'AccountSettingsController@updateAll')->name('updateAccountSettings');
    Route::resource('/settings', 'AccountSettingsController', [
        'only' => ['index', 'update']
    ]);


    
    Route::get('/companies/data','CompanyController@getComanyData')->name('get_company_data');
    Route::resource('companies', 'CompanyController');
    
    Route::resource('plans', 'PlanController');
    Route::resource('payment_methods', 'payment_methodsController');
    Route::resource('payment_details', 'Payment_detailsController');

    // roles routes
    Route::resource('roles', 'RolesController');
    Route::resource('users' , 'UsersController');

    // comapnies requests
    Route::resource('companies_requests' , 'CompanieseRequestsController');
    
});

Route::group(['middleware' => 'auth', 'prefix' => '/'], function () {
    Route::get('{first}/{second}/{third}', 'RoutingController@thirdLevel')->name('third');
    Route::get('{first}/{second}', 'RoutingController@secondLevel')->name('second');
    Route::get('{any}', 'RoutingController@root')->name('any');
});

// landing
Route::get('', 'RoutingController@index')->name('index');
