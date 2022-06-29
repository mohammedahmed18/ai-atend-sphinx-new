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
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Branch</th>
                                    <th>Job</th>
                                    <th>Active</th>
                                    <th>Locked</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        
                        
                            <tbody>
                                @foreach($employees as $emp)
                                <tr>
                                    <td>{{ $emp->name }}</td>
                                    <td>{{ $emp->email }}</td>
                                    <td>{{ $emp->phone }}</td>
                                    <td>{{ $emp->address }}</td>
                                    <td>{{ $emp->branch->name }}</td>
                                    <td>{{ $emp->job->name }}</td>
                                    <td>
                                        <input type="checkbox" onchange="toggleActivationAndLocked(event,'{{ $emp->id }}' , 'active')" class="js-switch" {{$emp->active?'checked':''}} data-plugin="switchery" />
                                    </td>
                                    <td>
                                        <input type="checkbox" onchange="toggleActivationAndLocked(event,'{{ $emp->id }}' , 'locked')" class="js-switch" {{$emp->locked?'checked':''}} data-plugin="switchery" />
                                    </td>
                                    <td> 
                                        <div class="row row-xs wd-xl-4p">
                                            <a href="{{ route('employees.edit', $emp->id) }}" class="action-icon">
                                            <i class="mdi mdi-square-edit-outline"></i> </a>
                                            <!-- <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button> -->
                                            <form action="{{ route('employees.destroy', $emp->id)}}" method="post">
                                                @csrf
                                                @method('DELETE')
                                                <button style ="border-color:white; color:red; font-size: 0.8rem;" class="action-icon delete" type="submit"> <i class="mdi mdi-delete"></i></button>
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
        const toggleActivationAndLocked = (e, id , type) => {
        
            (async () => {
                    try {
                        let checked = e.target.checked;
                        const rawResponse = await fetch('{{ route('toggleActiveEmp') }}', {
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