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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                            <li class="breadcrumb-item active">Elements</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Add Alerts</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Alerts</h4>

                        <form action="{{ route('alerts.store') }}" method="post">
                            @csrf
                            <div class="form-group">
                                <label class="col-form-label">message en (*)</label>
                                <input type="name" name="message_en" class="form-control" id="name"
                                    placeholder="message en...">
                            </div>


                            <div class="form-group">
                                <label class="col-form-label">message ar (*)</label>
                                <input type="name" name="message_ar" class="form-control" id="name"
                                    placeholder="message ar...">
                            </div>

                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label class="col-form-label">start date (*)</label>
                                    <input type="date" name="start_date" class="form-control" id="name"
                                        placeholder="start date...">
                                </div>


                                <div class="form-group col-md-6">
                                    <label class="col-form-label">end date (*)</label>
                                    <input type="date" name="end_date" class="form-control" id="name"
                                        placeholder="start date...">
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="col-form-label">message type</label>
                                <select name="type" class="form-control">
                                    <option value="" disabled>select type messaes</option>
                                    <option value="1">info</option>
                                    <option value="2">success</option>
                                    <option value="3">warning</option>
                                    <option value="4">error</option>
                                </select>
                            </div>


                            <div class="form-group">
                                <label class="col-form-label">status</label>
                                <select name="is_activate" id="" class="form-control">
                                    <option value="" disabled>select Action</option>
                                    <option value="1" selected>Active</option>
                                    <option value="0">inactive</option>
                                </select>
                            </div>

                            <div class="form-group shadow-textarea">
                                <label for="exampleFormControlTextarea6">Note</label>
                                <textarea class="form-control z-depth-1" name="notes" id="exampleFormControlTextarea6"
                                    rows="3" placeholder="Write note Here ..."></textarea>
                            </div>



                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Create
                                    alert</button>
                            </center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->



    </div> <!-- container -->
@endsection
