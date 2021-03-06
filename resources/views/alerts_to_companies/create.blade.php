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
@section('textArea')
    <style>
        .shadow-textarea textarea.form-control::placeholder {
            font-weight: 300;
        }

        .shadow-textarea textarea.form-control {
            padding-left: 0.8rem;
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
                            <li class="breadcrumb-item"><a href="{{url('/dashboard')}}">Dashboard</a></li>
                            <li class="breadcrumb-item"><a href="{{route('alerts.index')}}">ALerts</a></li>
                            <li class="breadcrumb-item active">Send Alert to Company</li>
                        </ol>
                    </div>
                    <h4 class="page-title">send alerts to companies</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <form
                            onsubmit="return confirm('Are you sure you want to send the alert to the selected companies ?');"
                            id="send-form" action="{{ route('alerts_to_companies.store') }}" method="post" class="needs-validation" novalidate>
                            @csrf

                            <div class="form-group">
                                <label for="inputBranch" class="col-form-label">Alert *</label>
                                <select name="alert_id" id="inputBranch" class="selectize-drop-header"
                                    placeholder="Select an alert..." required>
                                    @foreach ($alerts as $alert)
                                        <option value="{{ $alert->id }}">{{ $alert->message_en }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name" class="col-form-label">start date <span
                                            class="text-danger">*</span></label>
                                    <input type="date" name="start_date" 
                                        class="form-control" id="name" placeholder="start date..." required>
                                </div>


                                <div class="form-group col-md-6">
                                    <label for="name" class="col-form-label">end date <span
                                            class="text-danger">*</span></label>
                                    <input type="date" name="end_date" 
                                        class="form-control" id="name" placeholder="start date..." required>
                                </div>

                            </div>


                            <div class="form-group">
                                <label>Companies</label>
                                <select id="selectize-maximum" name="companies[]" required>
                                    <option disabled>select companies you want to send alert to</option>
                                    @foreach ($companies as $company)
                                        <option value="{{ $company->id }}">{{ $company->name_en }}</option>
                                    @endforeach
                                </select>
                                <div class="clearfix"></div>
                            </div>


                            <center><button type="submit" class="btn btn-success waves-effect waves-light">send
                                </button>
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
