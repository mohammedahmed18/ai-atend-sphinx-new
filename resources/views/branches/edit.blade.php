@extends('layouts.vertical', ['title' => 'Form Components'])

@section('content')


    <!-- Start Content-->
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Edit Branch</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Edit {{$branch->name}}</h4>
                      
                        <form action="{{ route('branches.update', $branch->id)}}" method="post">
                            {{ csrf_field() }}
							{{ method_field('PATCH') }}
                            <div class="form-group">
                                <label for="name" class="col-form-label">Name</label>
                                <input type="name" value="{{ $branch->name }}" name="name" class="form-control" id="name" placeholder="Name">
                            </div>

                            <div class="form-group">
                                <label for="inputEmail4" class="col-form-label">Phone number</label>
                                <input type="tel" value="{{ $branch->phone }}" name="phone" class="form-control" id="inputEmail4" placeholder="Email">
                            </div>
                          
                            <div class="form-group">
                                <label for="inputAddress" class="col-form-label">Address</label>
                                <input type="text" value="{{ $branch->address }}" name="address" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            
                            <div class="form-group">
                                <label for="inputPhone" class="col-form-label">Notes <span class="text-muted">(optional)</span></label>
                                <input type="text" value="{{ $branch->notes }}" name="notes" class="form-control" id="inputPhone" placeholder="010">
                            </div>

                            <center> <button type="submit" class="btn btn-primary waves-effect waves-light">Update</button> </center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


        
    </div> <!-- container -->
@endsection