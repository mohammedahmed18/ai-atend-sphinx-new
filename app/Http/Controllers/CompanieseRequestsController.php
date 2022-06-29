<?php

namespace App\Http\Controllers;

use App\CompanyRequest;
use App\Company;
use Illuminate\Http\Request;

// status

// 1 ---> pending

// 2 ---> accepted

// 3 ---> refuesed


class CompanieseRequestsController extends Controller
{
 

    
    public function index()
    {
        $companies_requests = CompanyRequest::orderBy('status')->get();
        return view('companies_requests.index' , compact('companies_requests'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        // handle activate activate company

        $status = $request->status;
        $company_request = CompanyRequest::find($id);
        if($company_request && $status){
            $status = (int) $status;
            $company = Company::find($company_request->company_id);
            $company->isActive = $status == 2 ? 1 : 0;
            $company->save(); 
            $company_request->status = $status;
            $company_request->user_id = auth()->id();
            $company_request->save();

            return redirect()->route('companies_requests.index');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
