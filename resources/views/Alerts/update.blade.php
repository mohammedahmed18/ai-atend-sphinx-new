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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                            <li class="breadcrumb-item active">Elements</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Edit Alert</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">alerts</h4>

                        <form action="{{ route('alerts.update', $alert->id) }}" method="post">
                            {{ csrf_field() }}
                            {{ method_field('PATCH') }}


                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name" class="col-form-label">message en <span
                                            class="text-danger">*</span></label>
                                    <input type="name" name="message_en" value="{{ $alert->message_en }}"
                                        class="form-control" id="name" placeholder="message en...">
                                </div>


                                <div class="form-group col-md-6">
                                    <label for="name" class="col-form-label">message ar <span
                                            class="text-danger">*</span></label>
                                    <input type="name" name="message_ar" value="{{ $alert->message_ar }}"
                                        class="form-control" id="name" placeholder="message ar...">
                                </div>
                            </div>

                      
                            <div class="form-group">
                                <label>alert type <span class="text-danger">*</span></label>
                                <select name="type" class="form-control">
                                    <option @if ($alert->type == 'info') selected @endif value="1">info</option>
                                    <option @if ($alert->type == 'success') selected @endif value="2">success</option>
                                    <option @if ($alert->type == 'warning') selected @endif value="3">warning</option>
                                    <option @if ($alert->type == 'danger') selected @endif value="4">danger</option>
                                </select>
                            </div>



                            <div class="form-group shadow-textarea">
                                <label for="exampleFormControlTextarea6">Note</label>
                                <textarea class="form-control z-depth-1" name="notes" id="exampleFormControlTextarea6"
                                    rows="3" placeholder="Write note Here ...">{{ $alert->note }}</textarea>
                            </div>


                            <div class="form-group">
                                <label>Companies</label>
                                <select id="selectize-maximum" name="companies[]">
                                    <option disabled>select companies you want to send alert to</option>
                                    @foreach ($companies as $company)
                                        <option value="{{ $company->id }}">{{ $company->name_en }}
                                        </option>
                                    @endforeach
                                </select>
                                <div class="clearfix"></div>
                            </div>


                            <center> <button type="submit" class="btn btn-primary waves-effect waves-light">Update</button>
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


    <script>
        var alerts_companies = @json($alert->companies);
        const items = []
        alerts_companies.forEach(c => {
            items.push(c.id)
        });

        $('#selectize-maximum').selectize({
            items,
            maxItems: 10
        });

    </script>
@endsection
