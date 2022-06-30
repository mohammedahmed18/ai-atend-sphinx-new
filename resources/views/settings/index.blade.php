@extends('layouts.vertical', ['title' => 'Datatables'])

@section('css')
    <link href="{{ asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css') }}" rel="stylesheet"
        type="text/css" />
    <link href="{{ asset('assets/libs/cropper/cropper.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.css') }}" rel="stylesheet"
        type="text/css" />


    <style>
        .nav-link.active {
            background-color: rgba(247, 247, 247, 0.933) !important
        }

        .bg-banner {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height: 100%;
            min-height: 400px;
            max-height: 600px;
            min-width: 350px;
        }

        input:disabled {
            background: rgba(223, 223, 223, 0.933) !important
        }

        .logo-container {
            position: relative;
            top: -40px;
            display: flex;
            justify-content: center
        }

        #logo {
            height: 230px;
            width: 230px;
            object-fit: cover;
            border-radius: 100%
        }

        @media only screen and (max-width: 600px) {
            #logo {
                height: 140px;
                width: 140px;
            }
        }

        .custom-input {
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 100%;
            padding: 6px 12px;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: 0.5s ease-in-out all;
        }

        .custom-input:hover {
            opacity: 1;
        }

        .custom-input::before {
            content: "change logo";
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
        }

    </style>
@endsection

@section('content')
    <div class="bg-white container-fluid">
        <h3 class="my-4">Account info</h3>
        @include('settings.account-settings')

    </div>
@endsection

@section('script')
    <!-- Plugins js-->
    <script src="{{ asset('assets/libs/mohithg-switchery/mohithg-switchery.min.js') }}"></script>
    <script src="{{ asset('assets/libs/cropper/cropper.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.js') }}"></script>


    <script>
        // init touch-spin
        $('[data-toggle="touchspin"]').each(function(idx, obj) {
            var objOptions = $.extend({}, {}, $(obj).data());
            $(obj).TouchSpin(objOptions);
        });
        // initialize switchary
        var elem = document.querySelectorAll('.js-switch');
        elem.forEach(element => {
            new Switchery(element, {
                color: '#64b0f2'
            });
        });


        const enableEditing = () => {
            $("#c_name_en").removeAttr('disabled');
            $("#c_name_ar").removeAttr('disabled');
            $("#c_email").removeAttr('disabled');
            $("#c_address").removeAttr('disabled');
            $("#c_tel_1").removeAttr('disabled');
            $("#c_tel_2").removeAttr('disabled');
            $("#c_tel_3").removeAttr('disabled');
            $('#edit-info-btn').removeClass('d-none')
        }

        // toggle attendence settings 

    </script>


@endsection
