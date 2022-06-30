<?php

namespace App\Http\Controllers;

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
