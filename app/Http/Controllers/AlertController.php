<?php

namespace App\Http\Controllers;

use App\Alert;
use App\company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AlertController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('permission:alerts_add' , ['only' => ['create' , 'store']]);
        $this->middleware('permission:alerts_view' , ['only' => ['index']]);
        $this->middleware('permission:alerts_edit' , ['only' => ['edit' , 'update']]);
        $this->middleware('permission:alerts_delete' , ['only' => ['destroy']]);
    }

    public function index()
    {
        //
        $alerts = Alert::all();
        return view("alerts.index",compact('alerts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('alerts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {

        $validator = Validator::make(
            $req->all(),
            [
                'message_en' => 'required',
                "message_ar" => 'required',
                'type' => 'required',
                'is_activate' => 'required'
            ]
        );
        if ($validator->fails()) {
            $err_msg = $validator->errors()->first();
            return back()->with('error', $err_msg)->withInput();
        }

        $data = $req->all();
        $data['user_id'] = $user_id = Auth::id();
        $alert = Alert::create($data);
        return redirect()->route('alerts.index')->with(['success' => 'تم الحفظ بنجاح']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Alert  $alert
     * @return \Illuminate\Http\Response
     */
    public function show(Alert $alert)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Alert  $alert
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $alert = Alert::FindOrFail($id);
        $companies = Company::where('isActive' , 1)->get();

        return view('alerts.update', compact('alert' , 'companies'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Alert  $alert
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $alert   = Alert::findOrFail($id);

            $validator = Validator::make(
                $request->all(),
                [
                    'message_en' => 'required',
                    "message_ar" => 'required',
                    'type' => 'required',
                    'is_activate' => 'required'
                ]
            );
            if ($validator->fails()) {
                $err_msg = $validator->errors()->first();
                return back()->with('error', $err_msg)->withInput();
            }
            $user_id  = Auth::id();
            $request['user_id'] = $user_id;
            $alert->update($request->all());
            $alert->companies()->sync($request->companies);
            return redirect()->route('alerts.index')->with(['success' => 'تم تحديث المستخدم بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('alerts.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Alert  $alert
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $alerts = Alert::findOrFail($id);
            $alerts->delete();
            return redirect()->route('alerts.index')->with(['success' => 'Delete this Alert Success']);

        }catch(\Exception $ex){
            return redirect()->route('alerts.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);

        }
    }
}
