@extends('layouts.vertical', ['title' => 'Datatables'])

@section('css')
    <!-- Plugins css -->
    <link href="{{ asset('assets/libs/datatables/datatables.min.css') }}" rel="stylesheet" type="text/css" />

@endsection

@section('content')
    <!-- Start Content-->
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
                    <h4 class="page-title">Datatables</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <div class="row">

            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <h4 class="header-title">Alerts</h4>

                        <a href="{{ route('alerts.create') }}" class="btn btn-primary mb-3">
                            <i class="fa fa-plus mx-1"></i>
                            <span>Create a new alert</span>
                        </a>

                        <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Message English</th>
                                    <th>Message Arabic</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Created Date</th>
                                    <th>Modify Data</th>
                                    <th>Message Type</th>
                                    <th>last update By</th>
                                    <th>IS Active</th>
                                    <th>Companies</th>
                                    <th>Action</th>

                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($alerts as $alert)
                                    <tr>
                                        <td>{{ $alert->message_en }}</td>
                                        <td>{{ $alert->message_ar }}</td>
                                        <td>{{ $alert->start_date }}</td>
                                        <td>{{ $alert->end_date }}</td>
                                        <td>{{ $alert->created_at }}</td>
                                        <td>{{ $alert->updated_at }}</td>
                                        <td>{{ $alert->type }}</td>

                                        <td>
                                            @if ($alert->user)
                                                {{ $alert->user->name_en }}
                                            @endif
                                        </td>
                                        @if ($alert->is_activate)
                                            <td>Active</td>
                                        @else
                                            <td>Inactive</td>
                                        @endif
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
                                        <td>
                                            <div class="row row-xs wd-xl-4p">
                                                <a href="{{ route('alerts.edit', $alert->id) }}" class="action-icon">
                                                    <i class="mdi mdi-square-edit-outline"></i> </a>
                                                <!-- <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button> -->
                                                <form action="{{ route('alerts.destroy', $alert->id) }}" method="post">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button style="border-color:white; color:red; font-size: 0.8rem;"
                                                        class="action-icon delete" type="submit"> <i
                                                            class="mdi mdi-delete"></i></button>
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
