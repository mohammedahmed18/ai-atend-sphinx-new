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
                    <h4 class="page-title">Add Locations</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 

         <!-- Form row -->
         <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Locations</h4>
                      
                        <form action="{{ route('locations.store')}}" method="post">
                            @csrf
                            <div class="form-group">
                                <label for="name" class="col-form-label">Name</label>
                                <input type="name" name="name" class="form-control" id="name" placeholder="Name">
                            </div>

                            <div class="form-group">
                                <label for="inputEmail4" class="col-form-label">Device Name</label>
                                <select name="device_id" class="form-control" id="">
                                    @foreach ( $devices as $dev )
                                        <option value="{{$dev->id}}">{{$dev->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                          
                            <div class="form-group">
                                <label for="inputAddress" class="col-form-label">Locations Address</label>
                                <input type="text" name="location_address" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            
                            <div class="form-group">
                                <label for="distance" class="col-form-label">Distance</label>
                                <input type="text" name="distance" class="form-control" id="distance" placeholder="Distance">
                            </div>

                            
                            <input hidden type="text" name="location_latitude" class="form-control" id="lat" placeholder="Latitude">

                            <input hidden type="text" name="location_longituide" class="form-control" id="lng" placeholder="Longituide">

                            <div class="my-4">
                                <div id="map" style="height: 500px"></div>
                            </div>

                            <div class="form-group">
                                <label for="note" class="col-form-label">Note</label>
                                {{-- <input type="text" name="lon" class="form-control" id="locationlatitude" placeholder="Password"> --}}
                                <textarea name="notes"  class="form-control" id="note" cols="30" rows="10"></textarea>
                            </div>
                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Add</button></center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


@endsection
@section('script')

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDn1ZmThbXMe-8C-boHXrWFupCBpT8LmnU"></script>
<script>
window.onload = function() {
    $('#lat').val(30.0444)
    $('#lng').val(31.2357)
    var latlng = new google.maps.LatLng(30.0444, 31.2357);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Set lat/lon values for this property',
        draggable: true
    });
    google.maps.event.addListener(marker, 'dragend', function(a) {
        var lat = a.latLng.lat();
        var lng = a.latLng.lng();
        $('#lat').val(lat)
        $('#lng').val(lng)

    });
};

</script>
@endsection