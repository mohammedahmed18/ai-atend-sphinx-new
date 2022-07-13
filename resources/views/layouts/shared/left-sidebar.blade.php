<!-- ========== Left Sidebar Start ========== -->
<div class="left-side-menu">

    <div class="h-100" data-simplebar>

        <!-- User box -->
        <div class="text-center user-box">
            <img src="{{ asset('assets/images/users/user-1.jpg') }}" alt="user-img" title="Mat Helme"
                class="rounded-circle avatar-md">
            <div class="dropdown">
                <a href="javascript: void(0);" class="mt-2 mb-1 text-dark dropdown-toggle h5 d-block"
                    data-toggle="dropdown">Geneva Kennedy</a>
                <div class="dropdown-menu user-pro-dropdown">

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mr-1 fe-user"></i>
                        <span>My Account</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mr-1 fe-settings"></i>
                        <span>Settings</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mr-1 fe-lock"></i>
                        <span>Lock Screen</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mr-1 fe-log-out"></i>
                        <span>Logout</span>
                    </a>

                </div>
            </div>
            <p class="text-muted">Admin Head</p>
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">

            <ul id="side-menu">



                <li class="mt-2 menu-title">Apps</li>


                {{-- start of roles --}}
                <li>
                    <a href="#sidebar_roles" data-toggle="collapse">
                        <i data-feather="lock"></i>
                        <span>Users & Roles </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebar_roles">
                        <ul class="nav-second-level">

                            @permission('roles_permissions_view')
                                <li>
                                    <a href="{{ route('roles.index') }}">Roles</a>
                                </li>
                                @endpermission

                                @permission('roles_permissions_add')
                                    <li>
                                        <a href="{{ route('roles.create') }}">Add role</a>
                                    </li>
                                    @endpermission

                                    @permission('users_view')
                                        <li>
                                            <a href="{{ route('users.index') }}">Users</a>
                                        </li>
                                        @endpermission

                                        @permission('users_add')
                                            <li>
                                                <a href="{{ route('users.create') }}">add user</a>
                                            </li>
                                            @endpermission

                                        </ul>
                                    </div>
                                </li>
                                {{-- end of roles --}}

                                <li>
                                    <a href="#sidebaralerts" data-toggle="collapse">
                                        <i class="fe-alert-triangle"></i>
                                        <span> Alerts </span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <div class="collapse" id="sidebaralerts">
                                        <ul class="nav-second-level">
                                            @permission('alerts_view')
                                                <li>
                                                    <a href="{{ route('alerts.index') }}">Alerts</a>
                                                </li>
                                                @endpermission
                                                @permission('alerts_add')
                                                    <li>
                                                        <a href="{{ route('alerts.create') }}">create a new Alerts</a>
                                                    </li>
                                                    @endpermission

                                                    @permission('alerts_add')
                                                        <li>
                                                            <a href="{{ route('alerts_to_companies.create') }}">send alerts</a>
                                                        </li>
                                                        @endpermission

                                                    </ul>
                                                </div>
                                            </li>



                                            <li>
                                                <a href="#sidebarcompany" data-toggle="collapse">
                                                    <i class="far fa-building"></i>
                                                    <span> Companies </span>
                                                    <span class="menu-arrow"></span>
                                                </a>
                                                <div class="collapse" id="sidebarcompany">
                                                    <ul class="nav-second-level">
                                                        @permission('company_view')
                                                            <li>
                                                                <a href="{{ route('companies.index') }}">Companies</a>
                                                            </li>
                                                            @endpermission
                                                            @permission('company_add')
                                                                <li>
                                                                    <a href="{{ route('companies.create') }}">Add new Companies</a>
                                                                </li>
                                                                @endpermission

                                                                @permission('company_add', 'company_edit')
                                                                    <li>
                                                                        <a href="{{ route('companies_requests.index') }}">Companies requests (websites)</a>
                                                                    </li>
                                                                    @endpermission

                                                                </ul>
                                                            </div>
                                                        </li>
                                                        {{-- end of branches --}}
                                                        {{-- start of branches --}}
                                                        <li>
                                                            <a href="#sidebarplan" data-toggle="collapse">
                                                                <i data-feather="package" class="far plus-square"></i>
                                                                <span> Plans </span>
                                                                <span class="menu-arrow"></span>
                                                            </a>
                                                            <div class="collapse" id="sidebarplan">
                                                                <ul class="nav-second-level">
                                                                    @permission('plans_view')
                                                                        <li>
                                                                            <a href="{{ route('plans.index') }}">Plans</a>
                                                                        </li>
                                                                        @endpermission
                                                                        @permission('plans_add')
                                                                            <li>
                                                                                <a href="{{ route('plans.create') }}">Add a new plan</a>
                                                                            </li>
                                                                            @endpermission
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                                {{-- end of branches --}}


                                                                {{-- end of branches --}}
                                                                {{-- start of paymentmethods --}}
                                                                <li>
                                                                    <a href="#sidebarpaymentmethods" data-toggle="collapse">
                                                                        <i class="fa fa-dollar-sign" aria-hidden="true"></i>
                                                                        <span> Payment Methods </span>
                                                                        <span class="menu-arrow"></span>
                                                                    </a>
                                                                    <div class="collapse" id="sidebarpaymentmethods">
                                                                        <ul class="nav-second-level">
                                                                            @permission('payment_method_view')
                                                                                <li>
                                                                                    <a href="{{ route('payment_methods.index') }}">Payment Methods</a>
                                                                                </li>
                                                                                @endpermission
                                                                                @permission('payment_method_edit')
                                                                                    <li>
                                                                                        <a href="{{ route('payment_methods.create') }}">Add new Payment Methods</a>
                                                                                    </li>
                                                                                    @endpermission

                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                        {{-- end of paymentmethods --}}



                                                                        {{-- start of paymentdetails --}}
                                                                        <li>
                                                                            <a href="#sidebarpaymentdetails" data-toggle="collapse">
                                                                                <i class="fa fa-dollar-sign" aria-hidden="true"></i>
                                                                                <span> Payment Details </span>
                                                                                <span class="menu-arrow"></span>
                                                                            </a>
                                                                            <div class="collapse" id="sidebarpaymentdetails">
                                                                                <ul class="nav-second-level">
                                                                                    @permission('payment_details_view')
                                                                                        <li>
                                                                                            <a href="{{ route('payment_details.index') }}">Payment Details</a>
                                                                                        </li>
                                                                                        @endpermission

                                                                                        @permission('payment_details_add')
                                                                                            <li>
                                                                                                <a href="{{ route('payment_details.create') }}">Add new Payment Details</a>
                                                                                            </li>
                                                                                            @endpermission

                                                                                        </ul>
                                                                                    </div>
                                                                                </li>
                                                                                {{-- end of paymentdetails --}}


                                                                            </ul>

                                                                        </div>
                                                                        <!-- End Sidebar -->

                                                                        {{-- End of Assign Appointment --}}

                                                                        <div class="clearfix"></div>

                                                                    </div>
                                                                    <!-- Sidebar -left -->

                                                                </div>
                                                                <!-- Left Sidebar End -->
