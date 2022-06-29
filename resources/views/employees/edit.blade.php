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
                    <h4 class="page-title">Edit Employee</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                      
                        <form action="{{ route('employees.update' , $emp->id)}}" method="post" autocomplete="off" class="needs-validation" novalidate>
                            @csrf
                            @method('PATCH')
                            <div class="form-group">
                                <label for="name" class="col-form-label">Name *</label>
                                <input type="name" name="name" class="form-control" id="name" placeholder="Name" value="{{$emp->name}}" required>
                            </div>

                            <div class="form-group">
                                <label for="inputEmail4" class="col-form-label">Email <span class="text-muted font-weight-light">(optional)</span></label>
                                <input type="email" name="email" class="form-control" id="inputEmail4" placeholder="Email" value="{{$emp->email}}">
                            </div>

                            <div class="form-group">
                                <label for="inputPhone" class="col-form-label">Phone *</label>
                                <input type="text" name="phone" class="form-control" id="inputPhone" placeholder="phone number" value="{{$emp->phone}}" required>
                            </div>
                          
                            <div class="form-group">
                                <label for="inputAddress" class="col-form-label">Address <span class="text-muted font-weight-light">(optional)</span></label>
                                <input type="text" name="address" class="form-control" id="inputAddress" placeholder="1234 Main St" value="{{$emp->address}}">
                            </div>
 

                            <div class="form-group">
                                <label>Gender *</label>
                                <div class="d-flex">
                                    <div class="radio mx-1">
                                        <input type="radio" name="gender" id="genderM" value="male" required="" {{$emp->gender=='male'?'checked':""}}>
                                        <label for="genderM">
                                            Male
                                        </label>
                                    </div>
                                    <div class="radio mx-1">
                                        <input type="radio" name="gender" id="genderF" value="female" {{$emp->gender=='female'?'checked':""}}>
                                        <label for="genderF">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="form-group">
                                <label for="inputBranch" class="col-form-label">Branch *</label>
                                <select name="branch_id" id="inputBranch" class="selectize-drop-header" placeholder="Select a branch..." required>
                                    @foreach ($branches as $branch)
                                        <option {{$emp->branch_id == $branch->id?'selected':''}} value="{{$branch->id}}">{{$branch->name}}</option>
                                    @endforeach
                                </select>

                            </div>

                            <div class="form-group">
                                <label for="inputJob" class="col-form-label">Job *</label>
                                <select name="job_id" id="inputJob" class="selectize-drop-header" placeholder="Select a job..." required>
                                    @foreach ($jobs as $job)
                                        <option {{$emp->job_id == $job->id?'selected':''}} value="{{$job->id}}">{{$job->name}}</option>
                                    @endforeach
                                </select>
                            </div>


                        
                            <div class="form-group">
                                <label for="input-age" class="col-form-label">Age <span class="text-muted font-weight-light">(optional)</span></label>
                                <input type="number" name="age" class="form-control" id="input-age" placeholder="age"  value="{{$emp->age}}">
                            </div>

                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Update</button></center>

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