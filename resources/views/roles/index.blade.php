@extends('layouts.vertical', ['title' => 'roles'])

@section('css')
    <!-- Plugins css -->
    <link href="{{ asset('assets/libs/datatables/datatables.min.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Roles</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Roles table</h4>
                        <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($roles as $role)
                                    <tr>
                                        <td>{{ $role->name }}</td>
                                        <td>
                                            <div class="row row-xs wd-xl-4p">
                                                @permission('roles_permissions_update')
                                                    <a href="{{ route('roles.edit', $role->id) }}" class="action-icon">
                                                        <i class="mdi mdi-square-edit-outline"></i> </a>
                                                    @endpermission
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
    <script src="{{ asset('assets/libs/datatables/datatables.min.js') }}"></script>
    <script src="{{ asset('assets/libs/pdfmake/pdfmake.min.js') }}"></script>
    <!-- Page js-->
    <script src="{{ asset('assets/js/pages/datatables.init.js') }}"></script>

@endsection
