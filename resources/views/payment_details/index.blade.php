@extends('layouts.vertical', ['title' => 'Datatables'])

@section('css')
    <!-- Plugins css -->
    <link href="{{ asset('assets/libs/datatables/datatables.min.css') }}" rel="stylesheet" type="text/css" />

@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row align-items-center pt-2">
            <div class="col-4">
                <h4 class="page-title">Payment Details</h4>
            </div>
            <div class="col-4">
                <a href="{{route('payment_details.create')}}" class="btn btn-primary">Create New Payments Details</a>
            </div>
                <div class="page-title-box col-4">
                    <div class="page-title-right">
                        <ol class="m-0 breadcrumb">
                            <li class="breadcrumb-item"><a href="{{url('/dashboard')}}">Dashboard</a></li>
                            <li class="breadcrumb-item active">Payment Details</li>
                        </ol>
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
                                    <th>Comapny</th>
                                    <th>Plan</th>
                                    <th>Payment Method</th>
                                    <th>Pay Date</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>update/create by</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($payment_details as $payment_detail)
                                    <tr>
                                        <td class="px-5 py-0">
                                            <div class="row row-xs wd-xl-4p">
                                                @permission('payment_details_edit')
                                                    <a href="{{ route('payment_details.edit', $payment_detail->id) }}"
                                                        class="action-icon">
                                                        <i class="mdi mdi-square-edit-outline"></i> </a>
                                                @endpermission
                                            </div>
                                        </td>
                                        <td>{{ $payment_detail->company->name_en }}</td>
                                        <td>{{ $payment_detail->plan->name_en }}</td>
                                        <td>{{ $payment_detail->payment_method->name }}</td>
                                        <td>{{ $payment_detail->pay_date }}</td>
                                        <td>{{ $payment_detail->start_date }}</td>
                                        <td>{{ $payment_detail->end_date }}</td>
                                        <td>{{ $payment_detail->user->name_en }}</td>                                        
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
