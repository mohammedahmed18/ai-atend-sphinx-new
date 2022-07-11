<?php

namespace App\Http\Controllers\api;

use App\AlertToCompany;
use App\company;
use App\Http\Controllers\Controller;
use App\payment_details;
use Illuminate\Http\Request;

class AlertsController extends Controller
{
    //
    public function try()
    {
        return "hii";
    }
    // public function get_company_id()
    // {
    // }
    public function send_to_comapany(Request $request)
    {
        $company_id = $request->company_id;

        $alerts = company::find($company_id)->alerts()->where('is_activate', 1)
            ->whereDate('start_date', '<=', date("Y-m-d"))
            ->whereDate('end_date', '>=', date("Y-m-d"))
            ->get();

        $payment = payment_details::where('company_id', $company_id)->with(['company', 'plan'])->latest()->first();

        return response()->json([
            'alerts' => $alerts,
            'payment_detail' => $payment
        ]);
    }
}
