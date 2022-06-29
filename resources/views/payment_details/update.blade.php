@extends('layouts.vertical', ['title' => 'Form Components'])

@section('content')

        @if(session()->has('message'))
        {{dd('vbnm')}}
            <div class="alert alert-success">
                {{ session()->get('message') }}
            </div>
        @endif

    <!-- Start Content-->
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                            <li class="breadcrumb-item active">Elements</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Edit Payment Details</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Payment Details</h4>
                      
                        <form action="{{ route('payment_details.update', $payment_details->id)}}" method="post">
                            {{ csrf_field() }}
							{{ method_field('PATCH') }}

                            
                            
                            <div class="form-group">
                                <label for="name" class="col-form-label">companies</label>
                                <select name="company_id" id="" style="width: 100%">
                                    <option value="{{ $payment_details->company_id }}">{{ $payment_details->company->name_en }}</option>
                                    @foreach ($companies as $company )
                                        <option value="{{ $company->id }}">{{ $company->name_en }}</option>
                                    @endforeach
                                    
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="col-form-label">Plans</label>
                                <select name="plan_id" id="" style="width: 100%">
                                    <option value="{{ $payment_details->paymethod_id }}">{{ $payment_details->plan->name_en }}</option>
                                    @foreach ($plans as $plan )
                                        <option value="{{ $plan->id }}">{{ $plan->name_en }}</option>
                                    @endforeach
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="col-form-label">payment_methods</label>
                                <select name="paymethod_id" id="" style="width: 100%">
                                    <option value="{{ $payment_details->paymethod_id }}">{{ $payment_details->payment_method->name }}</option>
                                    @foreach ($payment_methods as $payment_method )
                                        <option value="{{ $payment_method->id }}">{{ $payment_method->name }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="name" class="col-form-label">pay_date</label>
                                <input type="date" value="{{ $payment_details->pay_date }}" name="pay_date" class="form-control" id="name" placeholder="pay_date">
                            </div>
                            <div class="form-group">
                                <label for="name" class="col-form-label">start_date</label>
                                <input type="date" value="{{ $payment_details->start_date }}" name="start_date" class="form-control" id="name" placeholder="start_date">
                            </div>
                            <div class="form-group">
                                <label for="name" class="col-form-label">end_date</label>
                                <input type="date" value="{{ $payment_details->end_date }}" name="end_date" class="form-control" id="name" placeholder="end_date">
                            </div>
                            
                            
                            <center> <button type="submit" class="btn btn-primary waves-effect waves-light">Update</button> </center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


        
    </div> <!-- container -->
@endsection 