<?php

namespace App\Http\Controllers\api;

use App\company;
use App\Http\Controllers\Controller;
use App\payment_details;
use Illuminate\Http\Request;
use Jerry\JWT\JWT;

class AlertsController extends Controller
{

    public function send_to_comapany(Request $request)
    {
        $token = $request->header('access_token');
        if (!$token) {
            return response()->json([
                "msg" => "no token provided"
            ], 403);
        }
        try {
            $payload = JWT::basic_decode($token , env('JWT_SECRET'));
        } catch (\Exception $e) {
            return response()->json([
                "msg" => "invalid access"
            ], 403);
        }
        $company_id = $payload['company_id'];
        if (!$company_id) {
            return response()->json([
                "msg" => "invalid access"
            ], 403);
        }
        $company = company::find($company_id);
        if (!$company) {
            return response()->json([
                "msg" => "invalid access"
            ], 403);
        }
        $alerts = $company->alerts()->where('is_activate', 1)
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
