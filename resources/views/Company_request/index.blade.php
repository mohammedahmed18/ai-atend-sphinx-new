<!DOCTYPE html>
<html lang="en">
    <head>
        @include('layouts.shared.title-meta', ['title' => "Register & Signup"])

        @include('layouts.shared.head-css')
    </head>

    <body class="auth-fluid-pages pb-0">

        <div class="auth-fluid">
            <!--Auth fluid left content -->
            <div class="auth-fluid-form-box">
                <div class="align-items-center d-flex h-100">
                    <div class="card-body">

                        <!-- Logo -->
                        <div class="auth-brand text-center text-lg-left">
                            <div class="auth-logo">
                                <a href="{{route('index')}}" class="logo logo-dark text-center">
                                    <span class="logo-lg">
                                        <img src="{{asset('assets/images/logo-dark.png')}}" alt="" height="22">
                                    </span>
                                </a>
            
                                <a href="{{route('index')}}" class="logo logo-light text-center">
                                    <span class="logo-lg">
                                        <img src="{{asset('assets/images/logo-light.png')}}" alt="" height="22">
                                    </span>
                                </a>
                            </div>
                        </div>

                        <!-- title-->
                        <h4 class="mt-0">Sign Up</h4>
                        <p class="text-muted mb-4">Registration Company</p>

                        <!-- form -->
                        <form action="{{ route('companies_registre.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="fullname">Comapny Name</label>
                                <input class="form-control" type="text" name="name_en" id="fullname" placeholder="Enter your Comapny Name" required>
                            </div>
                            <div class="form-group">
                                <label for="emailaddress">Comapny Email</label>
                                <input class="form-control" type="email" name="email" id="emailaddress" required placeholder="Enter your Comapny Email">
                            </div>
                            <div class="form-group">
                                <label for="password">Comapny Tel</label>
                                <div class="input-group input-group-merge">
                                    <input type="test" name="Tel_1" id="password" class="form-control" placeholder="Enter your Comapny Tel">
                                    
                                </div>
                            </div>
                            
                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-primary waves-effect waves-light btn-block" type="submit"> Sign Up </button>
                            </div>
                            <!-- social-->
                            
                        </form>
                        <!-- end form-->

                        <!-- Footer-->
                        <footer class="footer footer-alt">
                            <p class="text-muted">Already have account? <a href="{{route('second', ['auth', 'login-2'])}}" class="text-muted ml-1"><b>Log In</b></a></p>
                        </footer>

                    </div> <!-- end .card-body -->
                </div> <!-- end .align-items-center.d-flex.h-100-->
            </div>
            <!-- end auth-fluid-form-box-->

            <!-- Auth fluid right content -->
            <div class="auth-fluid-right text-center">
                <div class="auth-user-testimonial">
                    <h2 class="mb-3 text-white">I love the color!</h2>
                    <p class="lead"><i class="mdi mdi-format-quote-open"></i> I've been using your theme from the previous developer for our web app, once I knew new version is out, I immediately bought with no hesitation. Great themes, good documentation with lots of customization available and sample app that really fit our need. <i class="mdi mdi-format-quote-close"></i>
                    </p>
                    <h5 class="text-white">
                        - Fadlisaad (Ubold Admin User)
                    </h5>
                </div> <!-- end auth-user-testimonial-->
            </div>
            <!-- end Auth fluid right content -->
        </div>
        <!-- end auth-fluid-->

        @include('layouts.shared.footer-script')
        
    </body>
</html>