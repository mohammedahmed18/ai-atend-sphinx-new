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
        $companies_requests = CompanyRequest::orderBy('id' , 'desc')->orderBy('status')->get();
        return view('companies_requests.index' , compact('companies_requests'));
    }

 
    public function create()
    {
        //
    }


    public function store(Request $request)
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
            if($status == 2){
            // generate رقم وظيفي
                $company->registration_num = time().mt_rand(300,700);
            }
            $company->save(); 
            $company_request->status = $status;
            $company_request->user_id = auth()->id();
            $company_request->save();

            $msg = $status == 2 ? "company '".$company->name_en."' is activated" : "تم التعديل بنجاح";
            return redirect()->route('companies_requests.index')->with('success' , $msg);
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
