@extends('layouts.vertical', ['title' => 'Form Components'])
@section('css')
    <!-- Plugins css -->
    <link href="{{ asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/multiselect/multiselect.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/select2/select2.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/selectize/selectize.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/bootstrap-select/bootstrap-select.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.css') }}" rel="stylesheet"
        type="text/css" />
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
                    <h4 class="page-title">Edit "{{ $role->name }}" role</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <form action="{{ route('roles.update', $role->id) }}" method="post" autocomplete="off"
                            class="needs-validation" novalidate>
                            @csrf
                            @method('PATCH')
                            <div class="form-group">
                                <label for="name-input" class="col-form-label">Name *</label>
                                <input type="text" name="name" class="form-control" id="name-input" placeholder="Name"
                                    value="{{ $role->name }}" required>
                            </div>

                            <div class="form-group">
                                <label for="inputnotes" class="col-form-label">Notes <span
                                        class="text-muted font-weight-light">(optional)</span></label>
                                <textarea class="form-control" id="inputnotes" name="note">{{ $role->note }}</textarea>
                            </div>
                            <div class="form-group">

                                <label class="col-form-label">Permissions</label>


                                <div class="mt-4 row gx-2">
                                    @foreach ($permissions as $collection)
                                        <div class="mb-4 bg-white col-md-6">
                                            @foreach ($collection as $p)
                                                <div class="">
                                                    <div class="mb-2 checkbox checkbox-primary">
                                                        <input id="{{ $p->id }}" type="checkbox"
                                                            {{ $role->hasPermission($p->name) ? 'checked' : '' }}
                                                            value="{{ $p->id }}" name="permissions[]">
                                                        <label for="{{ $p->id }}">{{ $p->name }}</label>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div> <!-- end col-->


                                    @endforeach

                                </div>
                                <!-- end row-->

                            </div>

                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Update</button>
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
    <script src="{{ asset('assets/libs/mohithg-switchery/mohithg-switchery.min.js') }}"></script>
    <script src="{{ asset('assets/libs/select2/select2.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap-select/bootstrap-select.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js') }}"></script>
    <script src="{{ asset('assets/libs/devbridge-autocomplete/devbridge-autocomplete.min.js') }}"></script>
    <script src="{{ asset('assets/libs/jquery-mockjax/jquery-mockjax.min.js') }}"></script>

    <!-- Page js-->
    <script src="{{ asset('assets/js/pages/form-advanced.init.js') }}"></script>
@endsection
