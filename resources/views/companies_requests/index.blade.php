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
                                    <th>company email</th>
                                    <th>company phone</th>
                                    <th>additional information</th>
                                    <th>last edit by</th>
                                    <th>Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($companies_requests as $c_request)
                                    <tr>
                                        <td>{{ $c_request->company->name_en }}</td>
                                        <td>
                                            @switch($c_request->status)
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
                                        <td><a
                                                href="mailto:{{ $c_request->company->email }}">{{ $c_request->company->email }}</a>
                                        </td>
                                        <td>{{ $c_request->company->Tel_1 }}</td>
                                        <td>{{ $c_request->notes }}</td>
                                        <td>
                                            @if ($c_request->user)
                                                {{ $c_request->user->name_en }}
                                            @endif
                                        </td>

                                        <td>
                                            <form action="{{ route('companies_requests.update', $c_request->id) }}"
                                                method="POST">
                                                @csrf
                                                @method('PATCH')
                                                @if ($c_request->status == 1 || $c_request->status == 3)
                                                    <input hidden name="status" value="2" />
                                                    <button type="submit" class="btn btn-primary">Activate</button>

                                                @elseif($c_request->status == 2)
                                                    <input hidden name="status" value="3" />
                                                    <button type="submit" class="btn btn-danger">DeActivate</button>
                                                @endif
                                            </form>

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
