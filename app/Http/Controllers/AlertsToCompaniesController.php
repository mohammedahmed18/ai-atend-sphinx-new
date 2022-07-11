<?php

namespace App\Http\Controllers;

use App\Alert;
use App\AlertToCompany;
use App\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AlertsToCompaniesController extends Controller
{

    public function create()
    {
        $companies = Company::where('isActive', 1)->get();
        $alerts = Alert::all();

        return view('alerts_to_companies.create', compact('companies', 'alerts'));
    }


    public function store(Request $request)
    {
        //
        $request->validate([
            'alert_id' => 'required',
            'companies' => 'required',
            'start_date' => 'required',
            'end_date' => 'required'
        ]);


        $companies = $request->companies;
        $alert_id = $request->alert_id;
        $data  = [];

        foreach ($companies as $comapny_id) {

            array_push($data, [
                'alert_id' => $alert_id,
                'company_id' => $comapny_id,
                'user_id' => Auth::id(),
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
            ]);
        }

        AlertToCompany::insert($data);
        return redirect()->route('alerts.index')->with('success', 'تم ارسال الانذار بنجاح');
    }

    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
