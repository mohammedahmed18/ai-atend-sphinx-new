@extends('layouts.vertical', ['title' => 'Form Components'])
@section('css')
<link href="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{asset('assets/libs/multiselect/multiselect.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{asset('assets/libs/select2/select2.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{asset('assets/libs/selectize/selectize.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.css')}}" rel="stylesheet" type="text/css" />
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
                    <h4 class="page-title">Add Assign Appointment</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Assign Appointment</h4>
                      
                        <form action="{{ route('assign_appointment.store')}}" method="post">
                            @csrf
                            <div class="form-group">
                                <label for="location">Location *</label>
                                <select name="location_id" class="form-control " data-toggle="select2" >
                                    {{-- <option data-select2-id="1">Select Location</option> --}}
                                    @foreach ($locations as $l )
                                    <option value="{{$l->id}}" >{{$l->name}}</option>
                                    @endforeach
                                       
                                    
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="location">Job Name *</label>
                                <select name="job_id" class="form-control " data-toggle="select2">
                                    {{-- <option data-select2-id="2">Select Job Name</option> --}}
                                    @foreach (  $jobs as $j )
                                    <option value="{{$j->id}}" >{{$j->name}}</option>                                    
                                    @endforeach                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="branch">Branch *</label>
                                <select name="branch_id" class="form-control " data-toggle="select2" >
                                    <option >Select Branch</option>
                                    @foreach ( $branchs as $b )
                                    <option value="{{$b->id}}" >{{$b->name}}</option>
                                    @endforeach                                    
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="location">Appointments *</label>
                                <select name="work_appointment_id" class="form-control" data-toggle="select2"  aria-hidden="true">
                                    <option >Select Appointmants</option>
                                      @foreach ($appointments as $a)
                                        <option value="{{$a->id}}">{{$a->id}}</option>
                                    @endforeach                              
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="location">Employees *</label>
                                <select name="employee_id[]" id="select2-multiple" class="form-control select2-multiple select2-hidden-accessible" data-toggle="select2" multiple="multiple" data-placeholder="Choose ..." data-select2-id="4" tabindex="-1" aria-hidden="true">    
                                    @foreach ( $employees as $e )
                                    <option value="{{$e->id}}">{{$e->name}}</option>
                                    @endforeach    
                                    </select>
                                </div>
                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Add</button></center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


        
    </div> <!-- container -->
@endsection


@section('script')
<script>
    $(document).ready(function() {
      $("#select2-multiple").select2({
        closeOnSelect: false
      });
    });
    </script>
    <!-- Plugins js-->
    <script src="{{asset('assets/libs/selectize/selectize.min.js')}}"></script>
    <script src="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.js')}}"></script>
    <script src="{{asset('assets/libs/multiselect/multiselect.min.js')}}"></script>
    <script src="{{asset('assets/libs/select2/select2.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js')}}"></script>
    <script src="{{asset('assets/libs/devbridge-autocomplete/devbridge-autocomplete.min.js')}}"></script>
    <script src="{{asset('assets/libs/jquery-mockjax/jquery-mockjax.min.js')}}"></script>

    <!-- Page js-->
    <script src="{{asset('assets/js/pages/form-advanced.init.js')}}"></script>
 
@endsection