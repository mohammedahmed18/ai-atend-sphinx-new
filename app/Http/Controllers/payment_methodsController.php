<?php

namespace App\Http\Controllers;

use App\payment_details;
use App\payment_methods;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class payment_methodsController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:payment_method_add', ['only' => ['create', 'store']]);
        $this->middleware('permission:payment_method_view', ['only' => ['index']]);
        $this->middleware('permission:payment_method_edit', ['only' => ['edit', 'update']]);
    }


    public function index()
    {
        $payment_methods = payment_methods::all();
        return view("payment_methods.index", compact('payment_methods'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('payment_methods.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make(
            $request->all(),
            [
                'name' => "required",
                'details' => 'required',
                "note" => "required",
                'isActive' => 'required'
            ]
        );
        if ($validator->fails()) {
            $err_msg = $validator->errors()->first();
            return back()->with('error', $err_msg)->withInput();
        }

        $data['update_user_id'] = Auth::id();;
        $payment_methods = payment_methods::create($data);
        return redirect()->route('payment_methods.index')->with(['success' => 'تم الحفظ بنجاح']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\payment_methods  $payment_methods
     * @return \Illuminate\Http\Response
     */
    public function show(payment_methods $payment_methods)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\payment_methods  $payment_methods
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $payment_method = payment_methods::FindOrFail($id);
        return view('payment_methods.update', compact('payment_method'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\payment_methods  $payment_methods
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {

            $data = $request->all();
            $validator = Validator::make(
                $data,
                [
                    'name' => "required",
                    'details' => 'required',
                    "note" => "required",
                    'isActive' => 'required'
                ]
            );
            $payment_method = payment_methods::findOrFail($id);

            if ($validator->fails()) {
                $err_msg = $validator->errors()->first();
                return back()->with('error', $err_msg)->withInput();
            }
            //update in db
            $payment_method->update($data);
            return redirect()->route('payment_methods.index')->with(['success' => 'تم تحديث المستخدم بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('payment_methods.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\payment_methods  $payment_methods
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $payment_method = payment_methods::findOrFail($id);
            $payment_detail  = payment_details::where('paymethod_id', $id)->first();
            if ($payment_detail) {
                return back()->with(['error' => 'هذا طريقة الدفع يوجد عليه موظفين لا يمكن مسحه']);
            } else {
                $payment_method->delete();
                return back()->with(['success' => 'تم حذف طريقة الدفع بنجاح']);
            }
        } catch (\Exception $ex) {
            // return $ex;
            return back()->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }
}
