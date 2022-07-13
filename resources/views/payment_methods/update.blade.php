@extends('layouts.vertical', ['title' => 'Form Components'])

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

                            <li class="breadcrumb-item active">Update Payment Methods/li>
                        </ol>
                    </div>
                    <h4 class="page-title">Edit payment_method</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <form action="{{ route('payment_methods.update', $payment_method->id) }}" method="post" class="needs-validation" novalidate>
                            {{ csrf_field() }}
                            {{ method_field('PATCH') }}

                            <div class="form-group">
                                <label for="name" class="col-form-label">Name</label>
                                <input type="name" value="{{ $payment_method->name }}" name="name" class="form-control"
                                    id="name" placeholder="Name" required>
                            </div>

                            <div class="form-group shadow-textarea">
                                <label for="exampleFormControlTextarea6">Note</label>
                                <textarea class="form-control z-depth-1" name="note" id="exampleFormControlTextarea6"
                                    rows="3" placeholder="Write note Here ...">{{ $payment_method->note }}</textarea>
                            </div>
                            <div class="form-group shadow-textarea">
                                <label for="exampleFormControlTextarea6">details</label>
                                <textarea class="form-control z-depth-1" name="details" id="exampleFormControlTextarea6"
                                    rows="3"
                                    placeholder="Write details Here ...">{{ $payment_method->details }}</textarea>
                            </div>

                            <div class="form-group">
                                <select name="isActive" id="" class="form-control" style="width: 100%" required>
                                     <option @if ($payment_method->isActive) selected @endif value="1">Active</option>
                                    <option @if (!$payment_method->isActive) selected @endif value="0">inactive</option>
                                </select>
                            </div>

                            <center> <button type="submit" class="btn btn-primary waves-effect waves-light">Update</button>
                            </center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->



    </div> <!-- container -->
@endsection
