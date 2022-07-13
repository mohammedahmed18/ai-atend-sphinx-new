@extends('layouts.vertical', ['title' => 'Datatables'])

@section('css')
    <!-- Plugins css -->
    <link href="{{ asset('assets/libs/datatables/datatables.min.css') }}" rel="stylesheet" type="text/css" />

@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row align-item-center pt-3">
            <div class="col-4">
                <h4 class="page-title">Alerts</h4>
            </div>
            <div class="col-4">
                
                <a href="{{ route('alerts.create') }}" class="btn btn-primary mb-3">
                    <i class="fa fa-plus mx-1"></i>
                    <span>Create a new alert</span>
                </a>
            </div>
            <div class="col-4">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="{{url('/dashboard')}}">Dashboard</a></li>
                            <li class="breadcrumb-item active"><a href="{{route('alerts.index')}}">Alerts</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <div class="row">

            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        

                        <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Message English</th>
                                    <th>Message Arabic</th>
                                    <th>Created Date</th>
                                    <th>Modify Data</th>
                                    <th>Message Type</th>
                                    <th>last update By</th>
                                    <th>Companies</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($alerts as $alert)
                                    <tr>
                                        <td class="px-5 py-0">
                                            <div class="row row-xs wd-xl-4p">
                                                @permission('alerts_edit')
                                                <a href="{{ route('alerts.edit', $alert->id) }}" class="action-icon">
                                                    <i class="mdi mdi-square-edit-outline"></i> </a>
                                                <!-- <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button> -->
                                                @endpermission

                                                @permission('alerts_delete')
                                                <form action="{{ route('alerts.destroy', $alert->id) }}" method="post">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button style="border-color:white; color:red; font-size: 0.8rem;"
                                                        class="action-icon delete" type="submit"> <i
                                                            class="mdi mdi-delete"></i></button>
                                                </form>
                                                @endpermission
                                            </div>
                                        </td>
                                        <td>{{ $alert->message_en }}</td>
                                        <td>{{ $alert->message_ar }}</td>
                                        <td>{{ $alert->created_at }}</td>
                                        <td>{{ $alert->updated_at }}</td>
                                        <td>{{ $alert->type }}</td>

                                        <td>
                                            @if ($alert->user)
                                                {{ $alert->user->name_en }}
                                            @endif
                                        </td>
                                    
                                        <td>
                                            <table class="table">
                                                <tbody>
                                                    @foreach ($alert->companies as $company)
                                                        <tr>
                                                            <td>{{ $company->name_en }}</td>
                                                        </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
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
            <script src="{{ asset('assets/libs/datatables/datatables.min.js') }}"></script>
            <script src="{{ asset('assets/libs/pdfmake/pdfmake.min.js') }}"></script>

            <!-- Page js-->
            <script src="{{ asset('assets/js/pages/datatables.init.js') }}"></script>
        @endsection
