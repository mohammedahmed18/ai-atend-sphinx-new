<?php

namespace App\Http\Controllers;

use App\Alert;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        return view("Alerts.index",compact('alerts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Alerts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $data = $req->all();
        $data['user_id'] = $user_id = Auth::id();
        $alert = Alert::create($data);
        return redirect()->route('alters.index')->with(['success' => 'تم الحفظ بنجاح']);
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
        $alerts = Alert::FindOrFail($id);
        return view('alerts.update', compact('alerts'));
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
            $alerts   = Alert::findOrFail($id);
            $user_id  = Auth::id();
            $request['user_id'] = $user_id;
            $alerts->update($request->all());
            return redirect()->route('alters.index')->with(['success' => 'تم تحديث المستخدم بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('alters.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
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
            return redirect()->route('alters.index')->with(['success' => 'Delete this Alert Success']);

        }catch(\Exception $ex){
            return redirect()->route('alters.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);

        }
    }
}
