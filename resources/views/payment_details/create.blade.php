@extends('layouts.vertical', ['title' => 'Form Components'])
@section('css')
    <!-- Plugins css -->
    <link href="{{ asset('assets/libs/multiselect/multiselect.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/selectize/selectize.min.css') }}" rel="stylesheet" type="text/css" />
    <style>
        .selectize-dropdown-header {
            display: none !important
        }

    </style>
@endsection
@section('content')

    @if (session()->has('message'))
        {{ dd('vbnm') }}
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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Payment Details</a></li>
                            <li class="breadcrumb-item active">Create New Payments Details</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Payment Methods</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <form action="{{ route('payment_details.store') }}" method="post"  class="needs-validation" novalidate>
                            @csrf
                            <div class="row">
                            <div class="form-group col-12">
                                <label for="companyInput" class="col-form-label">company</label>
                                <select name="company_id" id="companyInput" class="selectize-drop-header"
                                    placeholder="Select a company..." required>
                                    @foreach ($companies as $company)
                                        <option value="{{ $company->id }}">{{ $company->name_en }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group col-12">
                                <label for="name" class="col-form-label">plan</label>
                                <select name="plan_id" class="form-control" required>
                                    @foreach ($plans as $plan)
                                        @if ($plan->activate)
                                            <option value="{{ $plan->id }}">{{ $plan->name_en }}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group col-12">
                                <label for="name" class="col-form-label">payment method</label>
                                <select name="paymethod_id" class="form-control" required>
                                    @foreach ($payment_methods as $payment_method)
                                        @if ($payment_method->isActive)
                                            <option value="{{ $payment_method->id }}">{{ $payment_method->name }}
                                            </option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group col-6">
                                <label for="name" class="col-form-label">pay date</label>
                                <input type="date" value="" name="pay_date" class="form-control" id="name"
                                    placeholder="pay_date" required>
                            </div>
                            <div class="form-group col-6">
                                <label for="name" class="col-form-label">start date</label>
                                <input type="date" name="start_date" class="form-control" id="name"
                                    placeholder="start_date" required>
                            </div>
                        </div>

                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Add</button>
                            </center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->



    </div> <!-- container -->
@endsection

@section('script')
    <!-- Plugins js-->
    <script src="{{ asset('assets/libs/selectize/selectize.min.js') }}"></script>
    <script src="{{ asset('assets/libs/select2/select2.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js') }}"></script>
    <script src="{{ asset('assets/libs/devbridge-autocomplete/devbridge-autocomplete.min.js') }}"></script>

    <!-- Page js-->
    <script src="{{ asset('assets/js/pages/form-advanced.init.js') }}"></script>
    <script>
        $('#selectize-maximum').selectize({
            items: [''],
            maxItems: 10
        });

    </script>
@endsection
