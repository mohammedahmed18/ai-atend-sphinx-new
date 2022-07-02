<?php

namespace App\Http\Controllers;

use App\company;
use App\plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('permission:company_add', ['only' => ['create', 'store']]);
        $this->middleware('permission:company_view', ['only' => ['index']]);
        $this->middleware('permission:company_edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:company_delete', ['only' => ['destroy']]);
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


    public function store(Request $req)
    {

        $validator = Validator::make($req->all(),  [
            "name_en" => "required|unique:companies",
            "name_ar" => "required|unique:companies",
            "email" => "required|email|unique:companies",
            "tel1" => "required",
            "tel2" => "",
            "tel3" => "",
            "website" => "",
            "address" => "required",
            "long" => "required",
            "lat" => "required",
            "commercial_record" => "required|url",
            "tax_card" => "required|url",
            "timezone" => "required",
            "note" => "",
            "plan_id" => "required",
            "pay_method" => "required",
            "pay_date" => "required",
            "start_date" => "required",
        ]);

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return back()->withInput()->with('error', $error);
        }

        
        $data = $req->all();
        $data['user_id'] = Auth::id();
        $data['registration_num'] = time() . mt_rand(300, 700);
        $data['isActive'] = true;

        // upload files
        if ($file = $req->hasFile('commercial_record_file')) {
            $file = $req->file('commercial_record_file');
            $fileName = time() . '-' . $file->getClientOriginalName();
            $destinationPath = public_path() . '/files';
            $file->move($destinationPath, $fileName);
            $data['commercial_record_file'] = '/files/' . $fileName;
        }

            // upload files
            if ($file = $req->hasFile('tax_card_file')) {
                $file = $req->file('tax_card_file');
                $fileName = time() . '-' . $file->getClientOriginalName();
                $destinationPath = public_path() . '/files';
                $file->move($destinationPath, $fileName);
                $data['tax_card_file'] = '/files/' . $fileName;
            }
        company::create($data);

        return redirect()->route('companies.index')->with(['success' => 'تم الحفظ بنجاح']);
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



            $data = $request->all();
            $company   = company::findOrFail($id);
            
            
            $validator = Validator::make($data,  [
                "name_en" => "required|unique:companies,name_en,".$company->id,
                "name_ar" => "required|unique:companies,name_ar,".$company->id,
                "email" => "required|email|unique:companies,email,".$company->id,
                "tel1" => "required",
                "tel2" => "",
                "tel3" => "",
                "website" => "",
                "address" => "required",
                "long" => "required",
                "lat" => "required",
                "commercial_record" => "required|url",
                "tax_card" => "required|url",
                "timezone" => "required",
                "note" => "",
                "plan_id" => "required",
                "pay_method" => "required",
                "pay_date" => "required",
                "start_date" => "required",
            ]);
    
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return back()->withInput()->with('error', $error);
            }
            
            
            $user_id  = Auth::id();
            $data['user_id'] = $user_id;
            
        // upload files
        if ($file = $request->hasFile('commercial_record_file')) {
            $file = $request->file('commercial_record_file');
            $fileName = time() . '-' . $file->getClientOriginalName();
            $destinationPath = public_path() . '/files';
            $file->move($destinationPath, $fileName);
            $data['commercial_record_file'] = '/files/' . $fileName;
        }

        // upload files
        if ($file = $request->hasFile('tax_card_file')) {
            $file = $request->file('tax_card_file');
            $fileName = time() . '-' . $file->getClientOriginalName();
            $destinationPath = public_path() . '/files';
            $file->move($destinationPath, $fileName);
            $data['tax_card_file'] = '/files/' . $fileName;
        }
            
            $company->update($data);
            
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
        try {
            $company = company::findOrFail($id);
            $company->delete();
            return redirect()->route('companies.index')->with(['success' => 'Delete this Alert Success']);
        } catch (\Exception $ex) {
            return redirect()->route('companies.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }

    public function login(Request $req){
        $validator = Validator::make($req->all(), [
            // 'g-recaptcha-response' => 'required|captcha',
            'email' => 'required',
            'password' => 'required'
        ], [
            'g-recaptcha-response.required' => 'You must check the reCAPTCHA.',
            'g-recaptcha-response.captcha' => 'Captcha error! try again later or contact site admin.'
        ]);

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return back()->withInput()->with('error', $error);
        }
        $company = company::where('email' , $req->email )->first();
        if(!$company){
            return back()->withInput()->with('error', 'invalid email');
        }
        if($req->password != $company->registration_num){
            return back()->withInput()->with('error', 'invalid email or password');
        }
        // comapny has valid cradentials
        Auth::guard('company')->login($company);
        return redirect('/company/home');

    }   
}
