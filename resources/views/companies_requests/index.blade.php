@extends('layouts.vertical', ['title' => 'companies requests'])

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

                        <h4 class="header-title">Companies registration requests</h4>

                        <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>status</th>
                                    <th>last edit by</th>
                                    <th>Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($companies_requests as $request)
                                    <tr>
                                        <td>{{ $request->company->name_en }}</td>
                                        <td>
                                            @switch($request->status)
                                                @case(1)
                                                    <span class="badge badge-warning">pending</span>
                                                @break
                                                @case(2)
                                                    <span class="badge badge-success">accepted</span>
                                                @break
                                                @case(3)
                                                    <span class="badge badge-danger">refused</span>
                                                @break
                                            @endswitch
                                        </td>
                                        <td>
                                            @if ($request->user)
                                                {{ $request->user->name_en }}
                                            @endif
                                        </td>

                                        <td>
                                            <form action="{{ route('companies_requests.update', $request->id) }}"
                                                method="POST">
                                                @csrf
                                                @method('PATCH')
                                                @if ($request->status == 1 || $request->status == 3)
                                                    <input hidden name="status" value="2" />
                                                    <button type="submit" class="btn btn-primary">Activate</button>

                                                @elseif($request->status == 2)
                                                    <input hidden name="status" value="3" />
                                                    <button type="submit" class="btn btn-danger">DeActivate</button>
                                                @endif

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
