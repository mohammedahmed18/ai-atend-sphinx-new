<?php

namespace App\Http\Controllers;

use App\company;
use App\payment_details;
use App\payment_methods;
use App\plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Payment_detailsController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:payment_details_add' , ['only' => ['create' , 'store']]);
        $this->middleware('permission:payment_details_view' , ['only' => ['index']]);
        $this->middleware('permission:payment_details_edit' , ['only' => ['edit' , 'update']]);
    }
    public function index()
    {
        $payment_details = payment_details::all();
        return view('payment_details.index', compact('payment_details'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\payment_details  $payment_details
     * @return \Illuminate\Http\Response
     */
    public function show(payment_details $payment_details)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\payment_details  $payment_details
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // echo $id;
        $payment_details = payment_details::FindOrFail($id);
        // dd($payment_details->payment_method->name);
        $plans   = plan::all(); 
        $companies   = company::all(); 
        $payment_methods   = payment_methods::all(); 
        return view('payment_details.update', compact('companies', 'plans', 'payment_methods', 'payment_details'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\payment_details  $payment_details
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $payment_details   = payment_details::findOrFail($id);
            $user_id  = Auth::id();
            $request['user_id'] = $user_id;
            $payment_details->update($request->all());
            return redirect()->route('payment_details.index')->with(['success' => 'تم تحديث  بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('payment_details.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\payment_details  $payment_details
     * @return \Illuminate\Http\Response
     */
    public function destroy(payment_details $payment_details)
    {
        //
    }
}
