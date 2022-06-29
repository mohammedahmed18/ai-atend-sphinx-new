@extends('layouts.vertical', ['title' => 'Form Components'])
@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/multiselect/multiselect.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/select2/select2.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/selectize/selectize.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.css')}}" rel="stylesheet" type="text/css" />
    <style>
        .selectize-dropdown-header{
            display : none !important
        }
    </style>
@endsection

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
                    <h4 class="page-title">Action Request employee Name ( {{ $emp->name }} ) Date ({{ $request_emp->date }} )</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                      
                        <form action="{{ route('employee_requests.update' , $request_emp->id)}}" method="post" autocomplete="off" class="needs-validation" novalidate>
                            @csrf
                            @method('PATCH')
                            
                            <div class="form-group">
                                <label for="name" class="col-form-label">Date Send request : </label>
                                <input type="date"  class="form-control" id="name" placeholder="Name" value="{{ $request_emp->date }}" disabled>
                            </div>

                            <div class="form-group shadow-textarea">
                                <label for="exampleFormControlTextarea6">Description</label>
                                <textarea class="form-control z-depth-1"  id="exampleFormControlTextarea6" rows="3" placeholder="Write note Here ...">{{ $request_emp->request  }}</textarea>
                            </div>

                            
                            <div class="form-group shadow-textarea">
                                <label for="exampleFormControlTextarea6">Attachment</label>
                                <textarea class="form-control z-depth-1"  id="exampleFormControlTextarea6" rows="3" placeholder="Write note Here ...">{{ $request_emp->attachment  }}</textarea>
                            </div>

                            

                            

                            
                            <div class="form-group">
                                <label for="inputBranch" class="col-form-label">Action *</label>
                                <select name="accept" id="inputBranch" class="selectize-drop-header" placeholder="Select a branch..." required>
                                    <option value="0">Reject</option>
                                    <option value="1">Acceptance</option>
                                </select>

                            </div>


                       
                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Save</button></center>

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
    <script src="{{asset('assets/libs/selectize/selectize.min.js')}}"></script>
    <script src="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.js')}}"></script>
    <script src="{{asset('assets/libs/select2/select2.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js')}}"></script>
    <script src="{{asset('assets/libs/devbridge-autocomplete/devbridge-autocomplete.min.js')}}"></script>
    <script src="{{asset('assets/libs/jquery-mockjax/jquery-mockjax.min.js')}}"></script>

    <!-- Page js-->
    <script src="{{asset('assets/js/pages/form-advanced.init.js')}}"></script>
@endsection