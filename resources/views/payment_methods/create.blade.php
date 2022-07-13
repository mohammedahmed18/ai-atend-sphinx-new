@extends('layouts.vertical', ['title' => 'Form Components'])
@section('textArea')
    <style>
        .shadow-textarea textarea.form-control::placeholder {
            font-weight: 300;
        }

        .shadow-textarea textarea.form-control {
            padding-left: 0.8rem;
        }

    </style>
@endsection
@section('content')

    @if (session()->has('message'))
        {{ dd('vbnm') }}
        <div class="alert alert-success">
            {{ session()->get('message') }}
        </div>
    @endif

    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="{{url('/dashboard')}}">Dashboard</a></li>
                            <li class="breadcrumb-item"><a href="{{route('payment_methods.index')}}">Payment Methods</a></li>
                            <li class="breadcrumb-item active">Create New Payment Methods</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Payment Methods</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <form action="{{ route('payment_methods.store') }}" method="post" class="needs-validation" novalidate>
                            @csrf
                            <div class="form-group">
                                <label for="name" class="col-form-label">Name(*)</label>
                                <input type="name" name="name" class="form-control" id="name" placeholder="Name " required>
                            </div>

                            <div class="form-group">
                                <label for="name" class="col-form-label">Details</label>
                                <input type="name" name="details" class="form-control" id="name_ar" placeholder="Details">
                            </div>



                            <div class="form-group">
                                <label for="name" class="col-form-label">Action</label>
                                <select name="isActive" id="" class="form-control" required>
                                    <option value="">Select Action</option>
                                    <option value="1">Active</option>
                                    <option value="0">Not Active</option>
                                </select>
                            </div>



                            <div class="form-group shadow-textarea">
                                <label for="exampleFormControlTextarea6">Note</label>
                                <textarea class="form-control z-depth-1" name="note" id="exampleFormControlTextarea6"
                                    rows="3" placeholder="Write note Here ..."></textarea>
                            </div>


                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Add</button>
                            </center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->



    </div> <!-- container -->
@endsection
