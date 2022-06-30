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

                        <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Name (en)</th>
                                    <th>Name (ar)</th>
                                    <th>registration number</th>
                                    <th>Tel 1</th>
                                    <th>Tel 2</th>
                                    <th>Tel 3</th>
                                    <th>email</th>
                                    <th>website</th>
                                    <th>main address</th>
                                    <th>long</th>
                                    <th>lat</th>
                                    <th>commercial record</th>
                                    <th>tax card</th>
                                    <th>active</th>
                                    <th>alerts</th>
                                    <th>current plan</th>
                                    <th>timezone</th>
                                    <th>added/updated manually by</th>
                                    <th>Registration Num</th>
                                    <th>Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($companies as $company)
                                    <tr>
                                        <td>{{ $company->name_en }}</td>
                                        <td>{{ $company->name_ar }}</td>
                                        <td>{{ $company->registration_num }}</td>
                                        <td>{{ $company->Tel_1 }}</td>
                                        <td>{{ $company->Tel_2 }}</td>
                                        <td>{{ $company->Tel_3 }}</td>
                                        <td>{{ $company->email }}</td>
                                        <td>{{ $company->website }}</td>
                                        <td>{{ $company->main_address }}</td>
                                        <td>{{ $company->long }}</td>
                                        <td>{{ $company->lat }}</td>
                                        <td>{{ $company->commercial_record }}</td>
                                        <td>{{ $company->tax_card }}</td>
                                        
                                        @if ($company->isActive)
                                            <td><span class="text-success">Active</span></td>
                                        @else
                                            <td><span class="text-danger">In Active</span></td>
                                        @endif
                                        <td>
                                            <table class="table">
                                                <tbody>
                                                    @foreach ($company->alerts as $alert)
                                                        <tr>
                                                            <td>{{ $alert->message_en }}</td>
                                                        </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>
                                            @if ($company->plan)
                                                {{ $company->plan->name_en }}
                                            @endif
                                        </td>
                                        <td>{{ $company->timezone }}</td>

                                        <td>
                                            @if ($company->user)
                                                {{ $company->user->name_en }}
                                            @endif
                                        </td>
                                        <td>{{ $company->registration_num }}</td>
                                        <td>
                                            <div class="row row-xs wd-xl-4p">
                                                <a href="{{ route('companies.edit', $company->id) }}"
                                                    class="action-icon">
                                                    <i class="mdi mdi-square-edit-outline"></i> </a>
                                                <!-- <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button> -->
                                                <form action="{{ route('companies.destroy', $company->id) }}"
                                                    method="post">
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
