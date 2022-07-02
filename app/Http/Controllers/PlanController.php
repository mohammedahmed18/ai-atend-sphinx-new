<?php

namespace App\Http\Controllers;

use App\payment_details;
use App\plan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PlanController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:plans_add', ['only' => ['create', 'store']]);
        $this->middleware('permission:plans_view', ['only' => ['index']]);
        $this->middleware('permission:plans_edit', ['only' => ['edit', 'update']]);
    }


    public function index()
    {
        $plans = Plan::all();
        return view("Plans.index", compact('plans'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Plans.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make(
            $data,
            [
                "name_en" => "required",
                "name_ar" => "required",
                "cost" => "integer|required",
                "max_emp" => "integer|required",
                "duration_days" => "integer|required",
            ]
        );
        if ($validator->fails()) {
            $err_msg = $validator->errors()->first();
            return back()->with('error', $err_msg)->withInput();
        }


        // dd($data);
        $data['create_user_id'] = Auth::id();
        $data['update_user_id'] = Auth::id();
        $Plan = Plan::create($data);
        return redirect()->route('plans.index')->with(['success' => 'تم الحفظ بنجاح']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\plan  $plan
     * @return \Illuminate\Http\Response
     */
    public function show(plan $plan)
    {
        //
    }

    public function edit($id)
    {
        $plan = plan::FindOrFail($id);
        return view('plans.update', compact('plan'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\plan  $plan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, plan $plan)
    {
        $data = $request->all();

        $validator = Validator::make(
            $data,
            [
                "name_en" => "required",
                "name_ar" => "required",
                "cost" => "integer|required",
                "max_emp" => "integer|required",
                "duration_days" => "integer|required",
            ]
        );
        if ($validator->fails()) {
            $err_msg = $validator->errors()->first();
            return back()->with('error', $err_msg)->withInput();
        }

        // check if there is companies use this plan
        if ($data['activate'] == '0') {
            $company = payment_details::where('plan_id', $plan->id)->whereDate('end_date', '>=', Carbon::now())->first();
            if ($company) {
                return back()->with('error', 'there is company/companies that use/uses this plan');
            }
        }
        $data['update_user_id'] = Auth::id();
        $plan->update($data);
        $plan->save();
        return redirect()->route('plans.index')->with('success', 'The plane "' . $plan->name_en . '" is updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\plan  $plan
     * @return \Illuminate\Http\Response
     */
    public function destroy(plan $plan)
    {
        //
    }
}
