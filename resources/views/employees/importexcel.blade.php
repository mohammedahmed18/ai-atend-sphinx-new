@extends('layouts.vertical', ['title' => 'Form Components'])

@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/multiselect/multiselect.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/select2/select2.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/selectize/selectize.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/dropify/dropify.min.css')}}" rel="stylesheet" type="text/css" />
   
   <style>
        .selectize-dropdown-header{
            display : none !important
        }
        @media (min-width: 768px){
        .timeline .timeline-desk {
            width: 80vw !important;
        }
        }
    </style>
@endsection

@section('content')
@if(session()->has('message'))
{{dd('vbnm')}}
    <div class="alert alert-success">
        {{ session()->get('message') }}
    </div>
@endif


<div class="timeline" dir="ltr">

    <article class="timeline-item">
        <div class="timeline-desk">
            <div class="panel">
                <div class="timeline-box">
                    <span class="arrow"></span>
                    <span class="timeline-icon"><i class="mdi mdi-adjust"></i></span>
                    <h4 class="mt-0 font-16">1- download the excel file</h4>
                    <a href="{{ route('downloadExcelEmps') }}" target="_blank"
                    class="my-2 btn btn-primary ">Download
                    excel file</a>
                </div>
            </div>
        </div>
    </article>


    <article class="timeline-item">
        <div class="timeline-desk">
            <div class="panel">
                <div class="timeline-box">
                    <span class="arrow"></span>
                    <span class="timeline-icon"><i class="mdi mdi-adjust"></i></span>
                    <h4 class="mt-0 font-16">2- fill the excel file with employees data</h4>
                </div>
            </div>
        </div>
    </article>

    <article class="timeline-item">
        <div class="timeline-desk">
            <div class="panel">
                <div class="timeline-box">
                    <span class="arrow"></span>
                    <span class="timeline-icon"><i class="mdi mdi-adjust"></i></span>
                    <h4 class="mt-0 font-16">3- upload the excel file</h4>
                    <div class="p-2">
                        <form action="{{ route('import_emp_post') }}" method="POST" class="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center h-100" enctype="multipart/form-data">
                            @csrf
                            
                            
                            <div class="form-group w-100">
                                <label for="inputBranch" class="col-form-label">Branch *</label>
                                <select name="branch_id" id="inputBranch" class="selectize-drop-header" placeholder="Select a branch..." required>
                                    @foreach ($branches as $branch)
                                        <option value="{{$branch->id}}">{{$branch->name}}</option>
                                    @endforeach
                                </select>
                            
                            </div>
                            
                            <div class="form-group w-100">
                                <label for="inputJob" class="col-form-label">Job *</label>
                                <select name="job_id" id="inputJob" class="selectize-drop-header" placeholder="Select a job..." required>
                                    @foreach ($jobs as $job)
                                        <option value="{{$job->id}}">{{$job->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            
                            
                            
                            <input type="file" name="file" class="dropify" data-plugins="dropify" data-height="300" />
                            
                            {{-- <div class="dz-preview dz-file-preview" id="preview-template">
                                <div class="dz-message needsclick">
                                    <i class="h4 text-muted dripicons-cloud-upload"></i>
                                    <h5>Click or Drag and Drop the excel file here to upload.</h5>
                                </div>
                            </div> --}}
                            
                            
                            
                            <button type="submit" class="my-2 btn btn-success">Upload</button>
                            
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </article>


</div>
<!-- end timeline -->



    




@endsection
@section('script')
    <!-- Plugins js-->
    <script src="{{asset('assets/libs/selectize/selectize.min.js')}}"></script>
    <script src="{{asset('assets/libs/select2/select2.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js')}}"></script>
    <script src="{{asset('assets/libs/devbridge-autocomplete/devbridge-autocomplete.min.js')}}"></script>
    <script src="{{asset('assets/libs/jquery-mockjax/jquery-mockjax.min.js')}}"></script>
    <script src="{{asset('assets/libs/dropify/dropify.min.js')}}"></script>

    <!-- Page js-->
    <script src="{{asset('assets/js/pages/form-fileuploads.init.js')}}"></script>

    <script src="{{asset('assets/js/pages/form-advanced.init.js')}}"></script>
    <script>
        $('.dropify').dropify();
    </script>
    {{-- <script>
        Dropzone.options.myGreatDropzone = { // camelized version of the `id`
            paramName: "file", // The name that will be used to transfer the file
            //   maxFilesize: 2, // MB
             maxFiles:1,
             required:true,
             acceptedFiles: ".xlsx,.xls",
             addRemoveLinks: false,
             headers: { 'X-CSRF-TOKEN': '{{csrf_token()}}' },
             init: function() {
            var myDropzone = this;

            this.on("maxfilesexceeded", function(file) {
                this.removeAllFiles();
                this.addFile(file);
            });
            this.element.querySelector("button[type=submit]").addEventListener("click", function(e) {
            // Make sure that the form isn't actually being sent.
            e.preventDefault();
            e.stopPropagation();
            myDropzone.processQueue();
            });


            this.on("successmultiple", function(files, response) {
            // Gets triggered when the files have successfully been sent.
            // Redirect user or notify of success.
            console.log(response);

            });
            this.on("error", function(files, response) {
            // Gets triggered when there was an error sending the files.
            // Maybe show form again, and notify user of error
            console.log(response);
            });
        },
        uploadMultiple : false,
        disablePreviews : true,
        autoProcessQueue: false,
        };
      </script> --}}
@endsection