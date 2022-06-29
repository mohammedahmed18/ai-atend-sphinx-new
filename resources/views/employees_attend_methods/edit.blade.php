@extends('layouts.vertical', ['title' => 'Datatables'])


@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/multiselect/multiselect.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/select2/select2.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/selectize/selectize.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.css')}}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">{{$emp->name}}'s attend methods</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 

        
        

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <form action="/dashboard/employees-attend-methods/{{$emp->id}}" method="POST">
                            @csrf
                            @method('PATCH')

                            <div class="form-group">
                                <label>attend methods <span class="text-danger mx-2">(press backspace
                                    <i class="mdi mdi-backspace"></i>
                                    for deleting an attend method)</span></label>
                                <select  multiple name="attend_methods[]" id="selectize-maximum">
                                    {{-- <option value="{{$attend_method->id}}">{{$attend_method->name}}</option> --}}
                                        @foreach ($attend_methods as $attend_method)
                                            <option selected value="{{$attend_method->id}}">{{$attend_method->name}}</option>
                                        @endforeach
                                        @foreach ($allattendmethod as $a )
                                        <option  value="{{$a->id}}">{{$a->name}}</option>
                                            
                                        @endforeach
                                    </select>
                                    {{-- <input type="hidden" name="empid" value="{{$emp->id}}"> --}}
                            </div>

                           
                            <button class="btn btn-primary" type="submit">Update</button>
                        </form>
                        
                    </div> <!-- end card body-->
                </div> <!-- end card -->
            </div><!-- end col-->
        </div>
        <!-- end row-->





        
    </div> <!-- container -->
@endsection

@section('script')
    <!-- Plugins js-->
    <script>
       $(document).ready(function() {

        $("#selectize-maximum").select2('id', '2');

    });
    </script>
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