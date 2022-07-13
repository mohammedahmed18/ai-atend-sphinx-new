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
                            <li class="breadcrumb-item"><a href="{{url('/dashboard')}}">Dashoard</a></li>
                            <li class="breadcrumb-item"><a href="{{route('plans.index')}}">Plans</a></li>
                            <li class="breadcrumb-item active">Create New Plans</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Add Plan</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <form action="{{ route('plans.store') }}" method="post" class="needs-validation" novalidate>
                            @csrf
                            <div class="row">
                            <div class="form-group col-6">
                                <label for="name" class="col-form-label">Name en (*)</label>
                                <input type="name" name="name_en" class="form-control" id="name_en" placeholder="Name en" required>
                            </div>

                            <div class="form-group col-6">
                                <label for="name" class="col-form-label">Name ar (*)</label>
                                <input type="name" name="name_ar" class="form-control" id="name_ar" placeholder="Name ar" required>
                            </div>

                            <div class="form-group col-6">
                                <label for="name" class="col-form-label">max employee(*)</label>
                                <input type="name" name="max_emp" class="form-control" id="max_emp" placeholder="max emp" required>
                            </div>

                            <div class="form-group col-6">
                                <label for="name" class="col-form-label">cost(*)</label>
                                <input type="name" name="cost" class="form-control" id="coast" placeholder="cost" required>
                            </div>

                            <div class="form-group col-12">
                                <label for="name" class="col-form-label">duration in days(*)</label>
                                <input type="name" name="duration_days" class="form-control" id="duration_days"
                                    placeholder="Duration Days"  required>
                            </div>



                            <div class="form-group col-12">
                                <label for="name" class="col-form-label">Action</label>
                                <select class="form-control" name="activate" id="">
                                    <option disabled value="">Select Action</option>
                                    <option value="1">Active</option>
                                    <option value="0">Not Active</option>
                                </select>
                            </div>



                            <div class="form-group shadow-textarea col-12">
                                <label for="exampleFormControlTextarea6">Note</label>
                                <textarea class="form-control z-depth-1" name="note" id="exampleFormControlTextarea6"
                                    rows="3" placeholder="Write note Here ..."></textarea>
                            </div>
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
