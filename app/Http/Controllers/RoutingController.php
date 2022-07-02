<?php

namespace App\Http\Controllers;

use App\company;
use App\CompanyRequest;
use App\plan;
use App\User;
use Exception;
use Illuminate\Http\Request;

class RoutingController extends Controller
{


    public function index()
    {
        return view('index');
    }

    /**
     * Display a view based on first route param
     *
     * @return \Illuminate\Http\Response
     */
    public function root($first)
    {
        try {
            if($first == 'dashboard'){
                $users_count = User::count();
                $active_companies_count = company::where('isActive' , 1)->count();

                $pending_companies_requests_count = CompanyRequest::where('status' , 1)->count();
                $active_plans_count = plan::where("activate" , 1)->count();
                return view($first , compact('users_count' , 'active_companies_count' , 'pending_companies_requests_count' , 'active_plans_count'));
            }
            if ($first != 'assets')
                return view($first);
            return view('index');
        } catch (Exception $e) {
            abort(404);
        }
    }

    /**
     * second level route
     */
    public function secondLevel($first, $second)
    {
        try {
            if ($first != 'assets')
                return view($first . '.' . $second);
            return view('index');
        } catch (Exception $e) {
            abort(404);
        }
    }

    /**
     * third level route
     */
    public function thirdLevel($first, $second, $third)
    {
        try {

            if ($first != 'assets')
                return view($first . '.' . $second . '.' . $third);
            return view('index');
        } catch (Exception $e) {
            abort(404);
        }
    }
}
