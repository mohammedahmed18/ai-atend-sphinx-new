<?php

namespace App\Http\Controllers;

use App\Alert;
use App\company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AlertController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:alerts_add', ['only' => ['create', 'store']]);
        $this->middleware('permission:alerts_view', ['only' => ['index']]);
        $this->middleware('permission:alerts_edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:alerts_delete', ['only' => ['destroy']]);
    }

    public function index()
    {
        $alerts = Alert::all();
        return view("alerts.index", compact('alerts'));
    }

   
    public function create()
    {
        return view('alerts.create');
    }

 
    public function store(Request $req)
    {
        $validator = Validator::make(
            $req->all(),
            [
                'message_en' => 'required',
                "message_ar" => 'required',
                'type' => 'required',
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


    public function show(Alert $alert)
    {
        //
    }

    public function edit($id)
    {
        $alert = Alert::FindOrFail($id);
        $companies = Company::where('isActive', 1)->get();

        return view('alerts.update', compact('alert', 'companies'));
    }

  
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

    public function destroy($id)
    {
        try {
            $alerts = Alert::findOrFail($id);
            $alerts->companies()->detach();
            $alerts->delete();
            return redirect()->route('alerts.index')->with(['success' => 'تم مسح الانذار بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('alerts.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }
}
