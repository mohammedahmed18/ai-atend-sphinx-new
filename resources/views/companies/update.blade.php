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
                            <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                            <li class="breadcrumb-item"><a href="/dashboard/companies">Companies</a></li>
                            <li class="breadcrumb-item active">edit company "{{ $company->name_en }}"</li>
                        </ol>

                    </div>
                    <h4 class="page-title">edit company"{{ $company->name_en }}"</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <form action="{{ route('companies.update', $company->id) }}" method="post"
                            enctype="multipart/form-data" class="needs-validation" novalidate>

                            {{ csrf_field() }}
                            {{ method_field('PATCH') }}
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name" class="col-form-label">Name En (*)</label>
                                    <input type="name" value="{{ $company->name_en }}" name="name_en" class="form-control"
                                        id="name" placeholder="Name en" required>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="name" class="col-form-label">Name ar (*)</label>
                                    <input type="name" value="{{ $company->name_ar }}" name="name_ar" class="form-control"
                                        required id="name" placeholder="Name ar">
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label for="name" class="col-form-label">Tel 1 (*)</label>
                                    <input type="name" value="{{ $company->Tel_1 }}" name="Tel_1" class="form-control"
                                        id="name" placeholder="tel 1 ..." required>
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="name" class="col-form-label">Tel 2 </label>
                                    <input type="name" value="{{ $company->Tel_2 }}" name="Tel_2" class="form-control"
                                        id="name" placeholder="tel 2 ...">
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="name" class="col-form-label">Tel 3 </label>
                                    <input type="name" value="{{ $company->Tel_3 }}" name="Tel_3" class="form-control"
                                        id="name" placeholder="tel 3 ...">
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label for="name" class="col-form-label">email (*)</label>
                                    <input type="name" value="{{ $company->email }}" name="email" class="form-control"
                                        id="name" placeholder="email ..." required>
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="name" class="col-form-label">website</label>
                                    <input type="name" value="{{ $company->website }}" name="website"
                                        class="form-control" id="name" placeholder="website ...">
                                </div>


                                <div class="form-group col-md-4">
                                    <label for="name" class="col-form-label">Main Address</label>
                                    <input type="name" value="{{ $company->main_address }}" name="main_address"
                                        class="form-control" id="name" placeholder="mai ddress ...">
                                </div>
                            </div>


                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name" class="col-form-label">Commercial Record</label>
                                    <input type="name" value="{{ $company->commercial_record }}" name="commercial_record"
                                        class="form-control" id="name" placeholder="Commercial Record ...">
                                </div>


                                <div class="form-group col-md-6">

                                    <label for="commercial_file_input" class="col-form-label">Commercial Record file</label>
                                    @if ($company->commercial_record_file)
                                        <span class="text-info my-1">there is already a file for this field , choosing a new
                                            file will delete the previous one and upload the new one</span>
                                    @endif
                                    <input type="file" name="commercial_record_file" class="form-control"
                                        id="commercial_file_input">
                                </div>
                            </div>


                            <div class="row">
                                <div class="form-group col-md-6">

                                    <label for="name" class="col-form-label">tax_card</label>
                                    <input type="name" value="{{ $company->tax_card }}" name="tax_card"
                                        class="form-control" id="name" placeholder="tax_card ...">
                                </div>


                                <div class="form-group col-md-6">

                                    <label for="tax_card_input" class="col-form-label">Tax card file</label>
                                    @if ($company->tax_card_file)
                                        <span class="text-info my-1">there is already a file for this field , choosing a new
                                            file will delete the previous one and upload the new one</span>
                                    @endif
                                    <input type="file" name="tax_card_file" class="form-control" id="tax_card_input">
                                </div>
                            </div>



                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name" class="col-form-label">Time-Zone</label>
                                    <input type="text" value="{{ $company->timezone }}" name="timezone" id="input"
                                        class="form-control" id="name" placeholder="timezone ...">
                                    {{-- <input type="text" id="input" class="w-full input bg-base-300/50"  /> --}}
                                    <ul id="suggestions" style="max-height: 200px!important;"
                                        class="absolute block w-full px-4 overflow-auto bg-white shadow-lg rounded-box">
                                    </ul>
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Action</label>
                                    <select name="isActive" id="" class="form-control" style="width: 100%" required>
                                        <option @if ($company->isActive) selected @endif value="1">Active</option>
                                        <option @if (!$company->isActive) selected @endif value="0">inactive</option>
                                    </select>
                                </div>
                            </div>

                            <input hidden type="text" value="{{ $company->lat }}" name="lat" class="form-control"
                                id="lat" placeholder="Latitude">

                            <input hidden type="text" value="{{ $company->long }}" name="long" class="form-control"
                                id="long" placeholder="Longituide">


                            <div class="my-1">
                                <div id="map" style="height: 500px"></div>
                            </div>

                            <div class="form-group">
                                <label for="note" class="col-form-label">Note</label>
                                <textarea name="note" class="form-control" id="note" cols="30"
                                    rows="10">{{ $company->note }}</textarea>
                            </div>


                            <div class="form-group">
                                <label for="domain_url_i" class="col-form-label">domain url</label>
                                <input name="domain_url" id="domain_url_i" class="form-control"
                                    placeholder="http://www.domain.com" />
                            </div>


                            <center><button type="submit" class="btn btn-success waves-effect waves-light">update</button>
                            </center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


    @endsection
    @section('script')

        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDn1ZmThbXMe-8C-boHXrWFupCBpT8LmnU">
        </script>
        <script>
            window.onload = function() {

                x = document.getElementById('lat').value;
                y = document.getElementById('long').value;
                var latlng = new google.maps.LatLng(x, y);
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
                    $('#long').val(lng)

                });
            };

        </script>
        <script>
            (function() {
                "use strict";
                let inputField = document.getElementById('input');
                let ulField = document.getElementById('suggestions');
                inputField.addEventListener('input', changeAutoComplete);
                ulField.addEventListener('click', selectItem);

                function changeAutoComplete({
                    target
                }) {
                    let data = target.value;
                    ulField.innerHTML = ``;
                    if (data.length) {
                        let autoCompleteValues = autoComplete(data);
                        autoCompleteValues.forEach(value => {
                            addItem(value);
                        });
                    }
                }


                function autoComplete(inputValue) {
                    let destination = [
                        'Europe/Andorra',
                        'Asia/Dubai',
                        'Asia/Kabul',
                        'Europe/Tirane',
                        'Asia/Yerevan',
                        'Antarctica/Casey',
                        'Antarctica/Davis',
                        'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
                        'Antarctica/Mawson',
                        'Antarctica/Palmer',
                        'Antarctica/Rothera',
                        'Antarctica/Syowa',
                        'Antarctica/Troll',
                        'Antarctica/Vostok',
                        'America/Argentina/Buenos_Aires',
                        'America/Argentina/Cordoba',
                        'America/Argentina/Salta',
                        'America/Argentina/Jujuy',
                        'America/Argentina/Tucuman',
                        'America/Argentina/Catamarca',
                        'America/Argentina/La_Rioja',
                        'America/Argentina/San_Juan',
                        'America/Argentina/Mendoza',
                        'America/Argentina/San_Luis',
                        'America/Argentina/Rio_Gallegos',
                        'America/Argentina/Ushuaia',
                        'Pacific/Pago_Pago',
                        'Europe/Vienna',
                        'Australia/Lord_Howe',
                        'Antarctica/Macquarie',
                        'Australia/Hobart',
                        'Australia/Currie',
                        'Australia/Melbourne',
                        'Australia/Sydney',
                        'Australia/Broken_Hill',
                        'Australia/Brisbane',
                        'Australia/Lindeman',
                        'Australia/Adelaide',
                        'Australia/Darwin',
                        'Australia/Perth',
                        'Australia/Eucla',
                        'Asia/Baku',
                        'America/Barbados',
                        'Asia/Dhaka',
                        'Europe/Brussels',
                        'Europe/Sofia',
                        'Atlantic/Bermuda',
                        'Asia/Brunei',
                        'America/La_Paz',
                        'America/Noronha',
                        'America/Belem',
                        'America/Fortaleza',
                        'America/Recife',
                        'America/Araguaina',
                        'America/Maceio',
                        'America/Bahia',
                        'America/Sao_Paulo',
                        'America/Campo_Grande',
                        'America/Cuiaba',
                        'America/Santarem',
                        'America/Porto_Velho',
                        'America/Boa_Vista',
                        'America/Manaus',
                        'America/Eirunepe',
                        'America/Rio_Branco',
                        'America/Nassau',
                        'Asia/Thimphu',
                        'Europe/Minsk',
                        'America/Belize',
                        'America/St_Johns',
                        'America/Halifax',
                        'America/Glace_Bay',
                        'America/Moncton',
                        'America/Goose_Bay',
                        'America/Blanc-Sablon',
                        'America/Toronto',
                        'America/Nipigon',
                        'America/Thunder_Bay',
                        'America/Iqaluit',
                        'America/Pangnirtung',
                        'America/Atikokan',
                        'America/Winnipeg',
                        'America/Rainy_River',
                        'America/Resolute',
                        'America/Rankin_Inlet',
                        'America/Regina',
                        'America/Swift_Current',
                        'America/Edmonton',
                        'America/Cambridge_Bay',
                        'America/Yellowknife',
                        'America/Inuvik',
                        'America/Creston',
                        'America/Dawson_Creek',
                        'America/Fort_Nelson',
                        'America/Vancouver',
                        'America/Whitehorse',
                        'America/Dawson',
                        'Indian/Cocos',
                        'Europe/Zurich',
                        'Africa/Abidjan',
                        'Pacific/Rarotonga',
                        'America/Santiago',
                        'America/Punta_Arenas',
                        'Pacific/Easter',
                        'Asia/Shanghai',
                        'Asia/Urumqi',
                        'America/Bogota',
                        'America/Costa_Rica',
                        'America/Havana',
                        'Atlantic/Cape_Verde',
                        'America/Curacao',
                        'Indian/Christmas',
                        'Asia/Nicosia',
                        'Asia/Famagusta',
                        'Europe/Prague',
                        'Europe/Berlin',
                        'Europe/Copenhagen',
                        'America/Santo_Domingo',
                        'Africa/Algiers',
                        'America/Guayaquil',
                        'Pacific/Galapagos',
                        'Europe/Tallinn',
                        'Africa/Cairo',
                        'Africa/El_Aaiun',
                        'Europe/Madrid',
                        'Africa/Ceuta',
                        'Atlantic/Canary',
                        'Europe/Helsinki',
                        'Pacific/Fiji',
                        'Atlantic/Stanley',
                        'Pacific/Chuuk',
                        'Pacific/Pohnpei',
                        'Pacific/Kosrae',
                        'Atlantic/Faroe',
                        'Europe/Paris',
                        'Europe/London',
                        'Asia/Tbilisi',
                        'America/Cayenne',
                        'Africa/Accra',
                        'Europe/Gibraltar',
                        'America/Godthab',
                        'America/Danmarkshavn',
                        'America/Scoresbysund',
                        'America/Thule',
                        'Europe/Athens',
                        'Atlantic/South_Georgia',
                        'America/Guatemala',
                        'Pacific/Guam',
                        'Africa/Bissau',
                        'America/Guyana',
                        'Asia/Hong_Kong',
                        'America/Tegucigalpa',
                        'America/Port-au-Prince',
                        'Europe/Budapest',
                        'Asia/Jakarta',
                        'Asia/Pontianak',
                        'Asia/Makassar',
                        'Asia/Jayapura',
                        'Europe/Dublin',
                        'Asia/Jerusalem',
                        'Asia/Kolkata',
                        'Indian/Chagos',
                        'Asia/Baghdad',
                        'Asia/Tehran',
                        'Atlantic/Reykjavik',
                        'Europe/Rome',
                        'America/Jamaica',
                        'Asia/Amman',
                        'Asia/Tokyo',
                        'Africa/Nairobi',
                        'Asia/Bishkek',
                        'Pacific/Tarawa',
                        'Pacific/Enderbury',
                        'Pacific/Kiritimati',
                        'Asia/Pyongyang',
                        'Asia/Seoul',
                        'Asia/Almaty',
                        'Asia/Qyzylorda',
                        'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
                        'Asia/Aqtobe',
                        'Asia/Aqtau',
                        'Asia/Atyrau',
                        'Asia/Oral',
                        'Asia/Beirut',
                        'Asia/Colombo',
                        'Africa/Monrovia',
                        'Europe/Vilnius',
                        'Europe/Luxembourg',
                        'Europe/Riga',
                        'Africa/Tripoli',
                        'Africa/Casablanca',
                        'Europe/Monaco',
                        'Europe/Chisinau',
                        'Pacific/Majuro',
                        'Pacific/Kwajalein',
                        'Asia/Yangon',
                        'Asia/Ulaanbaatar',
                        'Asia/Hovd',
                        'Asia/Choibalsan',
                        'Asia/Macau',
                        'America/Martinique',
                        'Europe/Malta',
                        'Indian/Mauritius',
                        'Indian/Maldives',
                        'America/Mexico_City',
                        'America/Cancun',
                        'America/Merida',
                        'America/Monterrey',
                        'America/Matamoros',
                        'America/Mazatlan',
                        'America/Chihuahua',
                        'America/Ojinaga',
                        'America/Hermosillo',
                        'America/Tijuana',
                        'America/Bahia_Banderas',
                        'Asia/Kuala_Lumpur',
                        'Asia/Kuching',
                        'Africa/Maputo',
                        'Africa/Windhoek',
                        'Pacific/Noumea',
                        'Pacific/Norfolk',
                        'Africa/Lagos',
                        'America/Managua',
                        'Europe/Amsterdam',
                        'Europe/Oslo',
                        'Asia/Kathmandu',
                        'Pacific/Nauru',
                        'Pacific/Niue',
                        'Pacific/Auckland',
                        'Pacific/Chatham',
                        'America/Panama',
                        'America/Lima',
                        'Pacific/Tahiti',
                        'Pacific/Marquesas',
                        'Pacific/Gambier',
                        'Pacific/Port_Moresby',
                        'Pacific/Bougainville',
                        'Asia/Manila',
                        'Asia/Karachi',
                        'Europe/Warsaw',
                        'America/Miquelon',
                        'Pacific/Pitcairn',
                        'America/Puerto_Rico',
                        'Asia/Gaza',
                        'Asia/Hebron',
                        'Europe/Lisbon',
                        'Atlantic/Madeira',
                        'Atlantic/Azores',
                        'Pacific/Palau',
                        'America/Asuncion',
                        'Asia/Qatar',
                        'Indian/Reunion',
                        'Europe/Bucharest',
                        'Europe/Belgrade',
                        'Europe/Kaliningrad',
                        'Europe/Moscow',
                        'Europe/Simferopol',
                        'Europe/Kirov',
                        'Europe/Astrakhan',
                        'Europe/Volgograd',
                        'Europe/Saratov',
                        'Europe/Ulyanovsk',
                        'Europe/Samara',
                        'Asia/Yekaterinburg',
                        'Asia/Omsk',
                        'Asia/Novosibirsk',
                        'Asia/Barnaul',
                        'Asia/Tomsk',
                        'Asia/Novokuznetsk',
                        'Asia/Krasnoyarsk',
                        'Asia/Irkutsk',
                        'Asia/Chita',
                        'Asia/Yakutsk',
                        'Asia/Khandyga',
                        'Asia/Vladivostok',
                        'Asia/Ust-Nera',
                        'Asia/Magadan',
                        'Asia/Sakhalin',
                        'Asia/Srednekolymsk',
                        'Asia/Kamchatka',
                        'Asia/Anadyr',
                        'Asia/Riyadh',
                        'Pacific/Guadalcanal',
                        'Indian/Mahe',
                        'Africa/Khartoum',
                        'Europe/Stockholm',
                        'Asia/Singapore',
                        'America/Paramaribo',
                        'Africa/Juba',
                        'Africa/Sao_Tome',
                        'America/El_Salvador',
                        'Asia/Damascus',
                        'America/Grand_Turk',
                        'Africa/Ndjamena',
                        'Indian/Kerguelen',
                        'Asia/Bangkok',
                        'Asia/Dushanbe',
                        'Pacific/Fakaofo',
                        'Asia/Dili',
                        'Asia/Ashgabat',
                        'Africa/Tunis',
                        'Pacific/Tongatapu',
                        'Europe/Istanbul',
                        'America/Port_of_Spain',
                        'Pacific/Funafuti',
                        'Asia/Taipei',
                        'Europe/Kiev',
                        'Europe/Uzhgorod',
                        'Europe/Zaporozhye',
                        'Pacific/Wake',
                        'America/New_York',
                        'America/Detroit',
                        'America/Kentucky/Louisville',
                        'America/Kentucky/Monticello',
                        'America/Indiana/Indianapolis',
                        'America/Indiana/Vincennes',
                        'America/Indiana/Winamac',
                        'America/Indiana/Marengo',
                        'America/Indiana/Petersburg',
                        'America/Indiana/Vevay',
                        'America/Chicago',
                        'America/Indiana/Tell_City',
                        'America/Indiana/Knox',
                        'America/Menominee',
                        'America/North_Dakota/Center',
                        'America/North_Dakota/New_Salem',
                        'America/North_Dakota/Beulah',
                        'America/Denver',
                        'America/Boise',
                        'America/Phoenix',
                        'America/Los_Angeles',
                        'America/Anchorage',
                        'America/Juneau',
                        'America/Sitka',
                        'America/Metlakatla',
                        'America/Yakutat',
                        'America/Nome',
                        'America/Adak',
                        'Pacific/Honolulu',
                        'America/Montevideo',
                        'Asia/Samarkand',
                        'Asia/Tashkent',
                        'America/Caracas',
                        'Asia/Ho_Chi_Minh',
                        'Pacific/Efate',
                        'Pacific/Wallis',
                        'Pacific/Apia',
                        'Africa/Johannesburg'
                    ];

                    return destination.filter(
                        (value) => value.toLowerCase().includes(inputValue.toLowerCase())
                    );
                }

                function addItem(value) {
                    ulField.innerHTML = ulField.innerHTML + `<li>${value}</li>`;
                }

                function selectItem({
                    target
                }) {
                    if (target.tagName === 'LI') {
                        inputField.value = target.textContent;
                        ulField.innerHTML = ``;
                    }
                }
            })();

        </script>
    @endsection
