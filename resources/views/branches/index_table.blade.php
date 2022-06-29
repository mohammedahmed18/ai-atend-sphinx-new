@extends('layouts.vertical', ['title' => 'Datatables'])

@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/datatables/datatables.min.css')}}" rel="stylesheet" type="text/css" />

@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Branches</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 

        
        <a href="/dashboard/branches" class="btn btn-lg btn-info my-2">Show as a tree</a>
        <button onclick="showAddFormRoot(event)" class="btn btn-lg btn-primary">
            <i class="fa fa-plus"></i>
            Add to root</button>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Branches table</h4>
        <p class="font-weight-bold text-danger my-2">Important : Deleting a branch will also delete its children , be aware of that</p>
                      
                        <table id="datatable-buttons" class="table table-striped dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>sub branches</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        
                        
                            <tbody>
                                @foreach($branches as $branch)
                                <tr>
                                    <td>{{ $branch->name }}</td>
                                    <td>{{ $branch->phone }}</td>
                                    <td>{{ $branch->address }}</td>
                                    <td>
                                        <ul>
                                        @foreach ($branch->children()->get() as $item)
                                        <li>{{$item->name}}</li>    
                                        @endforeach
                                        </ul>
                                    </td>
                                    <td> 
                                        <div class="row row-xs wd-xl-4p">
                                            <a href="#" onclick="showAddForm('{{$branch->id}}')" class="action-icon">
                                                <i class="fa fa-plus"></i>
                                            </a>
                                            <a href="{{ route('branches.edit', $branch->id) }}" class="action-icon">
                                            <i class="mdi mdi-square-edit-outline"></i> </a>
                                            <!-- <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button> -->
                                            <form action="{{ route('branches.destroy', $branch->id)}}" method="post">
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

        <div class="modal fade" id="branch-modal" tabindex="-1" role="dialog" aria-labelledby="branch-modalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="branch-modalLabel">Add a new branch</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="{{ route('branches.store') }}" method="POST">
                        @csrf
                        <input id="parent_id" name="parent_id" hidden />

                        <div class="pl-lg-4">
                            <div class="row">
                                <div class="form-group col-lg-6">
                                    <label class="form-control-label" for="input-name">{{ __('Name') }}</label>
                                    <input type="text" name="name" id="input-name"
                                        class="form-control form-control-alternative" required />
                                </div>

                                <div class="form-group col-lg-6">
                                    <label class="form-control-label" for="input-name">{{ __('Phone number') }}</label>
                                    <input type="tel" name="phone" id="input-name"
                                        class="form-control form-control-alternative" required />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-control-label" for="input-name">{{ __('Address') }}</label>
                                <input type="tel" name="address" id="input-name"
                                    class="form-control form-control-alternative" required />
                            </div>


                            <div class="form-group mt-2">
                                <label class="form-control-label" for="input-name">{{ __('Notes') }} <span
                                        class="text-muted">(optional)</span></label>
                                <input type="tel" name="notes" id="input-name"
                                    class="form-control form-control-alternative" />
                            </div>
                

                            <div class="d-flex justify-content-between">
                                <button type=" submit" class="btn btn-success mt-4">{{ __('insert') }}</button>

                                <button class="btn btn-light mt-4" data-dismiss="modal">{{ __('cancel') }}</button>
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    </div>



        
    </div> <!-- container -->
@endsection

@section('script')
    <!-- Plugins js-->
    <script src="{{asset('assets/libs/datatables/datatables.min.js')}}"></script>
    <script src="{{asset('assets/libs/pdfmake/pdfmake.min.js')}}"></script>

    <!-- Page js-->
    <script src="{{asset('assets/js/pages/datatables.init.js')}}"></script>
    <script>
        const showAddForm = (branch_id) => {
            // var branch_id = $(event.target).data().branch_id;
            if(!branch_id) return alert("برجاء النتظار قليلا");
            $('#parent_id').val(branch_id)
            $('#branch-modal').modal('show');
        }

        const showAddFormRoot = (event) => {
            var branch_id = $(event.target).data().branch_id;
            $('#parent_id').val('')
            $('#branch-modal').modal('show');

        }

    </script>
@endsection
