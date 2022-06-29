<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>report info student</title>
    <link rel="stylesheet" href="{{ asset('profile/style.css')}}" >
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="print.css" media="print" />
</head>
<body>
    <div class="container">
        <div class="main-body">
              <!-- Breadcrumb -->
              {{--  <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="{{ route('dashboard.reports.student_debts_all.index') }}">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Employee</a></li>
                </ol>
              </nav>  --}}
              <!-- /Breadcrumb -->
        
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                        <div class="mt-3">
                          <h4>{{ $employees -> name }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card mt-3">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">Total request</h6>
                        <span class="text-secondary">{{ $count_request  }}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">Total request reject</h6>
                        <span class="text-secondary">{{ $count_reject  }}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">Total request accept</h6>
                        <span class="text-secondary">{{ $count_accepted  }}</span>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{ $employees -> name }}
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            @if ($employees -> email == NULL)
                              {{ "-" }}
                            @else
                              {{ $employees -> email }}
                            @endif
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          @if ($employees->phone == NULL)
                            {{ "-" }}
                          @else
                            {{ $employees->phone }}
                          @endif
                        </div>
                      </div>
                      
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          @if ($employees->address == NULL)
                            {{ "-" }}
                          @else
                            {{ $employees->address }}
                          @endif
                        </div>
                      </div>
                      <hr>
                      
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">branch</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{ $employees->branch->name }}
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-12">
                          <button class="btn btn-info dis" id="print_btn" onclick="display()">Click to Print</button>                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row gutters-sm">
                    <div class="col-sm-6 mb-3">
                      <div class="card h-100">
                        <div class="card-body">
                          <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Requests Accept</i></h6>
                          @if (count($employee_request_accepted) == 0)
                          @php
                            $i = 0;  
                          @endphp
                            {{ "No Request Reject" }}
                            @else
                            @foreach ($employee_request_accepted as $accepted)  
                            <small>Request  : </small> 
                             <small>Request : </small>{{ $accepted -> request }} <br>
                             <small>Date Send :  </small>{{ $accepted -> date }}    <br>
                             <hr>
                            <hr>
                            @endforeach
                          @endif
                          
                          
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="card h-100">
                        <div class="card-body">
                          <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Requests reject</i></h6>
                          @if (count($employee_request_reject) == 0)
                          @php
                            $i = 0;  
                          @endphp
                            {{ "No Request Reject" }}
                            @else
                            @foreach ($employee_request_reject as $reject)  
                            <small>no. ( {{ $i ++ }} ) : </small> 
                             <small>Request : </small>{{ $reject -> request }} <br>
                             <small>Date Send </small>{{ $reject -> data }}    <br>
                             <hr>
                            <hr>
                            @endforeach
                          @endif
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      <script>
         function display() {
            window.print();
            
         }
      </script>
</body>
</html>