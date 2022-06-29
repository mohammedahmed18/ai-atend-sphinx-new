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
                    <h4 class="page-title">Edit attend_methods</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Assign Appointment</h4>
                      
                        <form action="{{route('assign_appointment.update',$assign->id)}}" method="post">
                            @csrf
							{{ method_field('PATCH') }}
                            <div class="form-group">
                                {{-- <input type="text" value="{{$assign->id}}" name="" id=""> --}}
                                <label for="location">Employees *</label>
                                <select name="employee_id" class="form-control" data-toggle="select2"  aria-hidden="true">
                                    <option value="{{$assign->employees->id}}" disabled >{{$assign->employees->name}}</option>
                                      @foreach ($employees as $a)
                                        <option value="{{$a->id}}">{{$a->name}}</option>
                                    @endforeach                              
                                </select>
                            </div>


                            <div class="form-group">
                                <label for="branch">Branch *</label>
                                <select name="branch_id" class="form-control " data-toggle="select2" >
                                    <option  value="{{$assign->branch->id}}" disabled >{{$assign->branch->name}}</option>
                                    @foreach ( $branchs as $b )
                                    <option value="{{$b->id}}" >{{$b->name}}</option>
                                    @endforeach                                    
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="location">Job Name *</label>
                                <select name="job_id" class="form-control " data-toggle="select2">
                                    <option disabled value="{{$assign->job->id}}">{{$assign->job->name}}</option>
                                    @foreach (  $jobs as $j )
                                    <option value="{{$j->id}}" >{{$j->name}}</option>                                    
                                    @endforeach                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="location">Location *</label>
                                <select name="location_id" class="form-control " data-toggle="select2" >
                                    <option disabled {{$assign->location->id}} >{{$assign->location->name}}</option>
                                    @foreach ($locations as $l )
                                    <option value="{{$l->id}}" >{{$l->name}}</option>
                                    @endforeach
                                       
                                    
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="location">Appointments *</label>
                                <select name="work_appointment_id" class="form-control" data-toggle="select2"  aria-hidden="true">
                                    <option disabled value="{{$assign->work_appointment_id}}">{{$assign->work_appointment_id}}</option>
                                      @foreach ($appointments as $a)
                                        <option value="{{$a->id}}">{{$a->id}}</option>
                                    @endforeach                              
                                </select>
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