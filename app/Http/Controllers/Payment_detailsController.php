<?php

namespace App\Http\Controllers;

use App\company;
use App\payment_details;
use App\payment_methods;
use App\plan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class Payment_detailsController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:payment_details_add', ['only' => ['create', 'store']]);
        $this->middleware('permission:payment_details_view', ['only' => ['index']]);
        $this->middleware('permission:payment_details_edit', ['only' => ['edit', 'update']]);
    }
    public function index()
    {
        $payment_details = payment_details::all();
        return view('payment_details.index', compact('payment_details'));
    }

    public function create()
    {
        $payment_methods = payment_methods::all();
        $companies       = company::all();
        $plans           = plan::all();
        return view("payment_details.create", compact('payment_methods', 'companies', 'plans'));
    }


    public function store(Request $req)
    {
        $validator = Validator::make(
            $req->all(),
            [
                "company_id" => "required",
                "plan_id" => "required",
                "paymethod_id" => "required",
                "pay_date" => "required",
                "start_date" => "required",
            ]
        );

        if ($validator->fails()) {
            $err_msg = $validator->errors()->first();
            return back()->with('error', $err_msg)->withInput();
        }

        $pay = new payment_details();
        $pay->plan_id = $req->plan_id;
        $pay->company_id = $req->company_id;
        $pay->paymethod_id = $req->paymethod_id;
        $pay->pay_date = $req->pay_date;
        $pay->start_date = $req->start_date;


        $company = company::find($req->company_id);
        $company->update(['current_plan_id' => $req->plan_id]);

        $date = Carbon::createFromFormat("Y-m-d", $req->start_date);
        $daysToAdd = Plan::find($req->plan_id)->duration_days;
        $pay->end_date = $date->addDays($daysToAdd);

        $pay->user_id = Auth::id();
        $pay->save();

        return redirect()->route('payment_details.index')->with(['success' => 'تم الحفظ بنجاح']);
    }


    public function show(payment_details $payment_details)
    {
        //
    }


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


    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                "company_id" => "required",
                "paymethod_id" => "required",
                "pay_date" => "required",
            ]);
            $pay = payment_details::find($id);
            $pay->company_id = $request->company_id;
            $pay->paymethod_id = $request->paymethod_id;
            $pay->pay_date = $request->pay_date;
            $pay->user_id = Auth::id();

            $pay->save();
            return redirect()->route('payment_details.index')->with(['success' => 'تم تحديث  بنجاح']);
        } catch (\Exception $e) {
            return redirect()->route('payment_details.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }

    public function destroy(payment_details $payment_details)
    {
        //
    }
}
