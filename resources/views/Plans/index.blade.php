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

                        <h4 class="header-title">plans</h4>

                        <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Name en</th>
                                    <th>Name ar</th>
                                    <th>max employee</th>
                                    <th>Duration Days</th>
                                    <th>coast</th>
                                    <th>create by</th>
                                    <th>Last Update by</th>
                                    <th>Active</th>
                                    <th>edit</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($plans as $plan)
                                    <tr>
                                        <td>{{ $plan->name_en }}</td>
                                        <td>{{ $plan->name_ar }}</td>
                                        <td>{{ $plan->max_emp }}</td>
                                        <td>{{ $plan->duration_days }}</td>
                                        <td>{{ $plan->coast }}</td>
                                        <td>{{ $plan->user_create->name_en }}</td>
                                        <td>{{ $plan->user_update->name_en }}</td>
                                        <td>
                                            @if ($plan->activate === 1)
                                                <span class="badge badge-success">Active</span>
                                            @else
                                                <span class="badge badge-danger">Not Active</span>
                                            @endif
                                        </td>
                                        <td>
                                            @permission('plans_edit')
                                                <div class="row row-xs wd-xl-4p">
                                                    <a href="{{ route('plans.edit', $plan->id) }}" class="action-icon">
                                                        <i class="mdi mdi-square-edit-outline"></i> </a>
                                                </div>
                                                @endpermission
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
