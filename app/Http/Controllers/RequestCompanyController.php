<?php

namespace App\Http\Controllers;

use App\CompaniesRegistrationRequest;
use App\company;
use App\CompanyRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RequestCompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Company_request.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {

        $validator = Validator::make($req->all(), [
            'g-recaptcha-response' => 'required|captcha',
            'name_en' => 'required',
            'email' => 'required|unique:companies',
            'Tel_1' => 'required'
        ], [
            'email.unique' => 'this email is already registered',
            'g-recaptcha-response.required' => 'You must check the reCAPTCHA.',
            'g-recaptcha-response.captcha' => 'Captcha error! try again later or contact site admin.'
        ]);

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return back()->withInput()->with('error', $error);
        }


        $data = $req->except(['notes']);
        $company = company::create($data);
        $company_request      = [];
        $company_request['company_id']      = $company->id;
        $company_request['user_id']      = Auth::id();
        $company_request['notes']      = $req->notes;
        CompanyRequest::create($company_request);
        return redirect('/')->with("msg_successRegister", "success");
    }
}
