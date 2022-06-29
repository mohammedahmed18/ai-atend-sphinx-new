@extends('layouts.vertical', ['title' => 'Form Components'])

@section('content')

        @if(session()->has('message'))
        {{dd('vbnm')}}
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
                    <h4 class="page-title">Edit job</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">alerts</h4>
                      
                        <form action="{{ route('alters.update', $alerts->id)}}" method="post">
                            {{ csrf_field() }}
							{{ method_field('PATCH') }}

                            <div class="form-group">
                                <label for="name" class="col-form-label">message en </label>
                                <input type="name" name="message_en" value="{{ $alerts->message_en }}" class="form-control" id="name" placeholder="message en...">
                            </div>

                            
                            <div class="form-group">
                                <label for="name" class="col-form-label">message ar </label>
                                <input type="name" name="message_ar" value="{{ $alerts->message_ar }}" class="form-control" id="name" placeholder="message ar...">
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="col-form-label">start date </label>
                                <input type="date" name="start_date" value="{{ $alerts->start_date }}" class="form-control" id="name" placeholder="start date...">
                            </div>
                            
                            
                            <div class="form-group">
                                <label for="name" class="col-form-label">start date </label>
                                <input type="date" name="end_date" value="{{ $alerts->end_date }}" class="form-control" id="name" placeholder="start date...">
                            </div>
                            
                            <div class="form-group">
                                <select name="type" id="" style="width: 200px">
                                    {{--  <option value="">{{ $alerts->type }}</option>  --}}
                                    @if ($alerts->type == "info")
                                        <option value="1">info</option>
                                    @elseif ($alerts->type == "success")
                                        <option value="2">success</option>
                                    @elseif ($alerts->type == "warning")
                                        <option value="3">warning</option>
                                    @elseif ($alerts->type == "error")
                                        <option value="4">error</option>
                                    @endif
                                    <option value="1">info</option>
                                    <option value="2">success</option>
                                    <option value="3">warning</option>
                                    <option value="4">error</option>
                                </select>
                            </div>

                            
                            <div class="form-group">
                                <select name="is_activate" id="" style="width: 200px">
                                    {{--  <option value="">select Action</option>  --}}
                                    @if ($alerts->is_activate)
                                        <option value="1">Active</option>
                                    @else
                                        <option value="0">inactive</option>
                                    @endif
                                    <option value="1">Active</option>
                                    <option value="0">inactive</option>
                                </select>
                            </div>
                            
                            <div class="form-group shadow-textarea">
                                <label for="exampleFormControlTextarea6">Note</label>
                                <textarea class="form-control z-depth-1" name="notes" id="exampleFormControlTextarea6" rows="3" placeholder="Write note Here ...">{{ $alerts->note }}</textarea>
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