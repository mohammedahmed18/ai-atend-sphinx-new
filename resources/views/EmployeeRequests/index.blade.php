@extends('layouts.vertical', ['title' => 'Datatables'])

@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/datatables/datatables.min.css')}}" rel="stylesheet" type="text/css" />    
@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Employees</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <h4 class="header-title">Employees table</h4>
                        <table id="scroll-horizontal-datatable" class="table table-striped nowrap w-100">
                                
                            <div class="dt-buttons"></div>
                            
                            {!! Form::select($name, $list, $selected, [$options]) !!}
                            
                            <select name="request_select">
                                <option>Select Request</option>
                                <option value="1">New Request</option>
                                <option value="2">Accept Request</option>
                                <option value="3">Reject Request</option>
                            </select>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date Send Request</th>
                                    <th>Request</th>
                                    <th>Attachment</th>
                                    <th>Date Accept Request</th>
                                    <th>Accept</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        
                        
                            <tbody>
                                @foreach($employee_requests as $emp)
                                <tr>
                                    @php
                                        $name = $emp->employee($emp->employee_id);
                                    @endphp
                                    <td>{{ $name }}</td>
                                    <td>{{ $emp->date }}</td>
                                    <td>{{ $emp->request }}</td>
                                    <td>{{ $emp->attachment }}</td>
                                    <td>{{ $emp->accept_date }}</td>
                                    <td>
                                        <a href="{{ route('employee_requests.edit', $emp->id) }}" class="action-icon">
                                            <i class="mdi mdi-square-edit-outline"></i> </a>
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
    <script src="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.js')}}"></script>

    <script src="{{asset('assets/libs/datatables/datatables.min.js')}}"></script>
    <script src="{{asset('assets/libs/pdfmake/pdfmake.min.js')}}"></script>
    <!-- Page js-->
    <script src="{{asset('assets/js/pages/datatables.init.js')}}"></script>
    <script>
        var elem = document.querySelectorAll('.js-switch');
        elem.forEach(element => {
            new Switchery(element , {
                size : 'small',
                color : '#64b0f2'
            });
        });

        // toggle active with ajax
        const toggleActivationAccept = (e, id , type) => {
        
            (async () => {
                    try {
                        let checked = e.target.checked;
                        const rawResponse = await fetch('{{ route('toggleActiveReqEmp') }}', {
                            method: 'PATCH',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': '{{ csrf_token() }}'
                            },
                            body: JSON.stringify({
                                id,
                                checked,
                                type
                            })
                        });
                        const content = await rawResponse.json();
                        console.log(content);

                        if (content.error) {
                            // notify error
                        } else {
                            // notify success

                        }
                    } catch (err) {
                        console.log(err);
                    }
                })
                ();

            }
   
    </script>
@endsection