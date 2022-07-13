@extends('layouts.vertical', ['title' => 'Companies'])

@section('css')
    <!-- Plugins css -->
    <link href="{{ asset('assets/libs/datatables/datatables.min.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">


        <div class="row align-items-center pt-2">
            <div class="col-4">
                <h4 class="page-title">Companies</h4>
            </div>
            <div class="col-4">
                <a href="{{ route('companies.create') }}" class="btn btn-primary">Create a new company</a>
            </div>
            <div class="page-title-box col-4">
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                        <li class="breadcrumb-item active">Companies</li>
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
                                    <th>Name (en)</th>
                                    <th>registration number</th>
                                    <th>Tel 1</th>
                                    <th>email</th>
                                    <th>active</th>
                                    <th>current plan</th>
                                    <th>added/updated manually by</th>
                                </tr>
                            </thead>


                            <tbody>
                                @foreach ($companies as $company)
                                    <tr>
                                        <td class="px-5 py-0">
                                            <div class="d-flex" style="align-items: center;justify-content: center">
                                                <i class="fa fa-eye mr-1 my-0"
                                                    onclick="show_company({{ $company->id }})"></i>

                                                @permission('company_edit')

                                                    <a href="{{ route('companies.edit', $company->id) }}" class="action-icon">
                                                        <i class="mdi mdi-square-edit-outline"></i> </a>
                                                    <!-- <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button> -->
                                                    @endpermission

                                                    {{-- <form action="{{ route('companies.destroy', $company->id) }}" method="post">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button style="border-color:white; color:red; font-size: 0.8rem;"
                                                        class="action-icon delete" type="submit"> <i
                                                            class="mdi mdi-delete"></i></button>
                                                </form> --}}
                                                </div>
                                            </td>
                                            <td>{{ $company->name_en }}</td>
                                            <td>{{ $company->registration_num }}</td>
                                            <td>{{ $company->Tel_1 }}</td>

                                            <td>{{ $company->email }}</td>

                                            @if ($company->isActive)
                                                <td><span class="text-success">Active</span></td>
                                            @else
                                                <td><span class="text-danger">In Active</span></td>
                                            @endif
                                            {{-- <td>
                                                <table class="table">
                                                    <tbody>
                                                        @foreach ($company->alerts as $alert)
                                                            <tr>
                                                                <td>{{ $alert->message_en }}</td>
                                                            </tr>
                                                        @endforeach
                                                    </tbody>
                                                </table>
                                            </td> --}}
                                            <td>
                                                @if ($company->plan)
                                                    {{ $company->plan->name_en }}
                                                @endif
                                            </td>

                                            <td>
                                                @if ($company->user)
                                                    {{ $company->user->name_en }}
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



        {{-- company modal --}}
        <div class="modal fade" id="company-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myLargeModalLabel">company title</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div id="company-data" class="modal-body w-100">



                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
    @endsection

@section('script')
    <!-- Plugins js-->
    <script src="{{ asset('assets/libs/datatables/datatables.min.js') }}"></script>
    <script src="{{ asset('assets/libs/pdfmake/pdfmake.min.js') }}"></script>

    <!-- Page js-->
    <script src="{{ asset('assets/js/pages/datatables.init.js') }}"></script>
    <script>
        const display_company_modal = (company) => {
            $('#company-modal').modal('show')
            console.log(company);
            const data_html =
                `
                                                                                                                                                                    <h3 class="d-inile">${company.name_en} (${company.name_ar})</h3> <span
                                                                                                                                                                                    class="badge ${company.isActive ? 'badge-success' : 'badge-danger'} d-inline">${company.isActive ? 'active' : 'not active'} </span>
                                                                                                                                                                                <hr />

                                                                                                                                                                                <div class="row">
                                                                                                                                                                                    <div class="col-md-5 font-weight-bold text-primary">regestration number</div>
                                                                                                                                                                                    <div class="col-md-6">${company.registration_num}</div>
                                                                                                                                                                                </div>
                                                                                                                                                                                <hr />

                                                                                                                                                                        ${company.plan ? `
                                                                                                                                                                            <div class="rounded-md mb-4"
                                                                                                                                                                                    style="width: 100%;border-radius: 10px;height : 7rem;display: flex;justify-content: center;align-items: center;color : white;background-image: linear-gradient(to right , rgb(16, 156, 208) , rgb(97, 46, 186))">
                                                                                                                                                                                    ${company.plan.name_en}
                                                                                                                                                                                </div>
                                                                                                                                                                        `:'<h4 class="my-2">there is no plan for this company yet</h4>'}
                                                                                                                                      


                                                                                                                                                                                <div class="row my-2">
                                                                                                                                                                                    <div class="col-md-4 font-weight-bold text-primary text-lg">phones</div>
                                                                                                                                                                                    <div class="col-md-5">
                                                                                                                                                                                        <div>
                                                                                                                                                                                            <span class="badge badge-info mx-1">phone 1</span> ${company.Tel_1}
                                                                                                                                                                                        </div>


                                                                                                                                                                                        <div>
                                                                                                                                                                                            <span class="badge badge-info mx-1">phone 2</span> ${company.Tel_2}
                                                                                                                                                                                        </div>


                                                                                                                                                                                        <div>
                                                                                                                                                                                            <span class="badge badge-info mx-1">phone 3</span> ${company.Tel_3}
                                                                                                                                                                                        </div>

                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>

                                                                                                                                                                                <hr />
                                                                                                                                                                                <div class="row">
                                                                                                                                                                                    <div class="col-md-6 my-1">
                                                                                                                                                                                        <div class="col-md-6 font-weight-bold text-primary text-lg">email</div>
                                                                                                                                                                                        <div class="col-md-5">
                                                                                                                                                                                            <a href="mailto:${company.email}">${company.email}</a>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>

                                                                                                                                                                                    <div class="col-md-6 my-1">
                                                                                                                                                                                        <div class="col-md-6 font-weight-bold text-primary text-lg">website</div>
                                                                                                                                                                                        <div class="col-md-5"0>
                                                                                                                                                                                            <a href="${company.website}">${company.website}</a>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>


                                                                                                                                                                                <hr />

                                                                                                                                                                                <div class="row">
                                                                                                                                                                                    <div class="col-md-6 my-1">

                                                                                                                                                                                        <div class="col-md-6 font-weight-bold text-primary text-lg">commercial record</div>
                                                                                                                                                                                        <div class="col-md-5">
                                                                                                                                                                                            <div>${company.commercial_record}</div>
                                                                                                                                                                                            <div> <a href="${company.commercial_record_file}" target="_blank">file</a></div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>

                                                                                                                                                                                    <div class="col-md-6 my-1">

                                                                                                                                                                                        <div class="col-md-6 font-weight-bold text-primary text-lg">tax card</div>
                                                                                                                                                                                        <div class="col-md-5">
                                                                                                                                                                                            <div>${company.tax_card}</div>
                                                                                                                                                                                            <div> <a href="${company.tax_card_file}" target="_blank">file</a></div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>

                                                                                                                                                                                <hr />
                                                                                                                                                                    `
            $('#company-data').html(data_html)
        }
        const show_company = (id) => {
            $.ajax({
                url: "{{ route('get_company_data') }}",
                method: 'GET',
                data: {
                    id,
                },
                success: function(result) {
                    display_company_modal(result)
                }
            });

        }

    </script>
@endsection
