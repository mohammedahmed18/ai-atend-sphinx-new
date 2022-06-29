@extends('layouts.vertical', ['title' => 'Datatables'])

@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/datatables/datatables.min.css')}}" rel="stylesheet" type="text/css" />

@endsection

@section('content')
<div class="container-fluid">
            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                                <li class="breadcrumb-item active">Datatables</li>
                            </ol>
                        </div>
                        <h4 class="page-title">Appointments</h4>
                    </div>
                </div>
            </div>     
            <!-- end page title --> 

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">Appointments</h4>
                            <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Device Name</th>
                                        <th>Location Address</th>
                                        <th>Distance</th>
                                        <th>Location Latitude</th>
                                        <th>Location Longituide</th>
                                        <th>Note</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Actions</th>

                                    </tr>
                                </thead>
                            
                            
                                <tbody>
                                    @foreach($locations  as $l)
                                    <tr>
                                        <td>{{ $l->name }}</td>
                                        <td>{{ $l->device->name}}</td>
                                        <td>{{ $l->location_address }}</td>
                                        <td>{{ $l->distance }}</td>
                                        <td>{{ $l->location_latitude }}</td>
                                        <td>{{ $l->location_longituide }}</td>
                                        <td>{{ $l->notes }}</td>
                                        <td>{{ $l->created_at }}</td>
                                        <td>{{ $l->updated_at }}</td>
                                        <td> 
                                            <div class="row row-xs wd-xl-4p">
                                                <a href="{{ route('locations.edit',$l->id) }}" class="action-icon">
                                                <i class="mdi mdi-square-edit-outline"></i> </a>
                                                {{-- <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button>  --}}
                                                <form action="{{ route('locations.destroy', $l->id)}}" method="post">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button style ="border-color:white; color:red; font-size: 0.8rem;" class="action-icon delete" type="submit"> <i class="mdi mdi-delete"></i></button>
                                                </form>
                                            </div>
                                        </td>	
                                    </tr>
                                   
                                    @endforeach
                              
               
                                </tbody>
                            </table>
                            
                        </div> <!-- end card body-->
                    </div> <!-- end card -->
                </div><!-- end col-->
            </div>
</div>


@endsection

@section('script')
    <!-- Plugins js-->
    <script src="{{asset('assets/libs/datatables/datatables.min.js')}}"></script>
    <script src="{{asset('assets/libs/pdfmake/pdfmake.min.js')}}"></script>

    <!-- Page js-->
    <script src="{{asset('assets/js/pages/datatables.init.js')}}"></script>


@endsection