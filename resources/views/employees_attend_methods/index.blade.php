@extends('layouts.vertical', ['title' => 'Datatables'])

@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/datatables/datatables.min.css')}}" rel="stylesheet" type="text/css" />

@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Employees attend methods</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 

        
        

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                      
                        <table id="datatable-buttons" class="table table-striped dt-responsive w-100">
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Employee Branch</th>
                                    <th>Employee Job</th>
                                    <th>Attend Methods</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        
                        
                            <tbody>

                                @foreach ($emps as $emp)
                                <tr>
                                <td>{{$emp->name}}</td>
                                    <td>{{$emp->branch->name}}</td>
                                    <td>{{$emp->job->name}}</td>
                                    <td>
                                        <ul class="list">
                                            @foreach ($emp->attend_methods as $attend_method)
                                                    <li>{{$attend_method->name}}</li>
                                            @endforeach
                                        </ul>
                                    </td>
                                    <td>
                                        <a href="/dashboard/employees-attend-methods/{{$emp->id}}/edit" type="button" class="btn btn-blue waves-effect waves-light"><i class="fa fa-pen"></i></a>
                                    </td>
                                </tr>
                                @endforeach 
                            </tbody>
                        </table>
                        
                    </div> <!-- end card body-->
                </div> <!-- end card -->
            </div><!-- end col-->
        </div>
        <!-- end row-->





        
    </div> <!-- container -->
@endsection

@section('script')
    <!-- Plugins js-->
    <script src="{{asset('assets/libs/datatables/datatables.min.js')}}"></script>
    <script src="{{asset('assets/libs/pdfmake/pdfmake.min.js')}}"></script>

    <!-- Page js-->
    <script src="{{asset('assets/js/pages/datatables.init.js')}}"></script>

@endsection