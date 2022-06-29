<?php

namespace App\Http\Controllers;

use App\company;
use App\Permission;
use App\plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('permission:company_add' , ['only' => ['create' , 'store']]);
        $this->middleware('permission:company_view' , ['only' => ['index']]);
        $this->middleware('permission:company_edit' , ['only' => ['edit' , 'update']]);
        $this->middleware('permission:company_delete' , ['only' => ['destroy']]);
    }



    public function index()
    {
        $companies = company::all();
        return view('companies.index', compact('companies'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $plans = plan::all();
        return view("companies.create", compact('plans'));
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
        $data['registration_num'] = $this->generateRandomString(11);
        $company = company::create($data);
        return redirect()->route('companies.create')->with(['success' => 'تم الحفظ بنجاح']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // echo $id;
        $company = company::FindOrFail($id);
        // return $company;
        $plans   = Plan::all(); 
        return view('companies.update', compact('company', 'plans'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $company   = company::findOrFail($id);
            $user_id  = Auth::id();
            $request['user_id'] = $user_id;
            $company->update($request->all());
            return redirect()->route('companies.index')->with(['success' => 'تم تحديث المستخدم بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('companies.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $company = company::findOrFail($id);
            $company->delete();
            return redirect()->route('companies.index')->with(['success' => 'Delete this Alert Success']);

        }catch(\Exception $ex){
            return redirect()->route('companies.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);

        }
    }
    private function generateRandomString($length)
    {
        $characters = "0123456789";
        $charactersLength = strlen($characters);
        $randomString = "";
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
