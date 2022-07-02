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
                            <a href="{{ route('index') }}" class="logo logo-dark text-center">
                                <span class="logo-lg">
                                    <img src="{{ asset('assets/images/logo.png') }}" alt="" class="rounded"
                                        height="55">

                                </span>
                            </a>

                            <a href="{{ route('index') }}" class="logo logo-light text-center">
                                <span class="logo-lg">
                                    <img src="{{ asset('assets/images/logo.png') }}" alt="" class="rounded"
                                        height="55">
                                </span>
                            </a>
                        </div>
                    </div>

                    <!-- title-->
                    <p class="text-muted mb-4">Registration Company</p>

                    {!! NoCaptcha::renderJs() !!}
                    <!-- form -->
                    <form action="{{ route('companies_registre.store') }}" method="POST">
                        @csrf


                        @if (Session::get('error'))
                            <div class="text-danger font-weight-bold"> {{ Session::get('error') }}</div>
                        @endif
                        <div class="form-group">
                            <label for="fullname">Comapny Name</label>
                            <input class="form-control" type="text" name="name_en" id="fullname"
                                placeholder="Enter your Comapny Name" required>
                        </div>
                        <div class="form-group">
                            <label for="emailaddress">Comapny Email</label>
                            <input class="form-control" type="email" name="email" id="emailaddress" required
                                placeholder="Enter your Comapny Email">
                        </div>
                        <div class="form-group">
                            <label for="password">Comapny phone number</label>
                            <div class="input-group input-group-merge">
                                <input type="test" name="Tel_1" id="password" class="form-control"
                                    placeholder="Enter your Comapny Tel" required>

                            </div>
                        </div>

                        <div class="form-group">
                            <label for="info">additional information</label>
                            <div class="input-group input-group-merge">
                                <textarea name="notes" id="info" cols="30" rows="5" style="resize: none"
                                    class="form-control"></textarea>
                            </div>
                        </div>

                        <div class="my-3">
                            {!! NoCaptcha::display() !!}
                            @if ($errors->has('g-recaptcha-response'))
                                <div class="alert alert-danger mt-2">
                                    <strong>{{ $errors->first('g-recaptcha-response') }}</strong>
                                </div>
                            @endif
                        </div>
                        <div class="form-group mb-0 text-center">
                            <button class="btn btn-primary waves-effect waves-light btn-block" type="submit"> Sign Up
                            </button>
                        </div>
                        <!-- social-->

                    </form>
                    <!-- end form-->



                </div> <!-- end .card-body -->
            </div> <!-- end .align-items-center.d-flex.h-100-->
        </div>
        <!-- end auth-fluid-form-box-->

        <!-- Auth fluid right content -->
        <div class="auth-fluid-right text-center">
            <div class="auth-user-testimonial">
                <h2 class="mb-3 text-white">I love the color!</h2>
                <p class="lead"><i class="mdi mdi-format-quote-open"></i> I've been using your theme from the previous
                    developer for our web app, once I knew new version is out, I immediately bought with no hesitation.
                    Great themes, good documentation with lots of customization available and sample app that really fit
                    our need. <i class="mdi mdi-format-quote-close"></i>
                </p>

            </div> <!-- end auth-user-testimonial-->
        </div>
        <!-- end Auth fluid right content -->
    </div>
    <!-- end auth-fluid-->

    @include('layouts.shared.footer-script')

</body>

</html>
