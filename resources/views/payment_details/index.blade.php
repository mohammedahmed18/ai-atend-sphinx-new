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
                        <ol class="m-0 breadcrumb">
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
                                    <th>Comapny</th>
                                    <th>Plan</th>
                                    <th>Payment Method</th>
                                    <th>Pay Date</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>update/create by</th>
                                    <th>Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($payment_details as $payment_detail)
                                    <tr>
                                        <td>{{ $payment_detail->company->name_en }}</td>
                                        <td>{{ $payment_detail->plan->name_en }}</td>
                                        <td>{{ $payment_detail->payment_method->name }}</td>
                                        <td>{{ $payment_detail->pay_date }}</td>
                                        <td>{{ $payment_detail->start_date }}</td>
                                        <td>{{ $payment_detail->end_date }}</td>
                                        <td>{{ $payment_detail->user->name_en }}</td>
                                        <td>
                                            <div class="row row-xs wd-xl-4p">

                                                @permission('payment_details_edit')
                                                    <a href="{{ route('payment_details.edit', $payment_detail->id) }}"
                                                        class="action-icon">
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
