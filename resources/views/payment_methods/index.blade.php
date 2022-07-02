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

                        <h4 class="header-title">Payment Methods</h4>

                        <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>details</th>
                                    <th>update/create by</th>
                                    <th>Action</th>
                                    <th>note</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($payment_methods as $payment_method)
                                    <tr>
                                        <td>{{ $payment_method->name }}</td>
                                        <td>{{ $payment_method->details }}</td>
                                        <td>{{ $payment_method->user->name_en }}</td>
                                        <td>
                                            @if ($payment_method->isActive === 1)
                                                <span class="badge badge-success">Active</span>
                                            @else
                                                <span class="badge badge-danger">Not Active</span>
                                            @endif
                                        </td>
                                        <td>{{ $payment_method->note }}</td>
                                        <td>
                                            @permission('payment_method_edit')
                                                <div class="row row-xs wd-xl-4p">
                                                    <a href="{{ route('payment_methods.edit', $payment_method->id) }}"
                                                        class="action-icon">
                                                        <i class="mdi mdi-square-edit-outline"></i> </a>
                                                    <!-- <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button> -->
                                                    <form action="{{ route('payment_methods.destroy', $payment_method->id) }}"
                                                        method="post">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button style="border-color:white; color:red; font-size: 0.8rem;"
                                                            class="action-icon delete" type="submit"> <i
                                                                class="mdi mdi-delete"></i></button>
                                                    </form>
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
