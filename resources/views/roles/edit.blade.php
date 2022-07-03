@extends('layouts.vertical', ['title' => 'Form Components'])
@section('css')
    <!-- Plugins css -->
    <link href="{{ asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css') }}" rel="stylesheet"
        type="text/css" />
    <link href="{{ asset('assets/libs/multiselect/multiselect.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/select2/select2.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/selectize/selectize.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/bootstrap-select/bootstrap-select.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.css') }}" rel="stylesheet"
        type="text/css" />
    <style>
        .selectize-dropdown-header {
            display: none !important
        }

    </style>
@endsection
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
                    <h4 class="page-title">Edit "{{ $role->name }}" role</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        @if ($role->name == 'super_admin')
                            <span class="mb-2 text-info font-weight-bold">you can't update the super admin</span>
                        @endif
                        <form action="{{ route('roles.update', $role->id) }}" method="post" autocomplete="off"
                            class="needs-validation" novalidate>
                            @csrf
                            @method('PATCH')
                            <div class="form-group">
                                <label for="name-input" class="col-form-label">Name *</label>
                                <input type="text" name="name" class="form-control" id="name-input" placeholder="Name"
                                    value="{{ $role->name }}" {{ $role->name == 'super_admin' ? 'disabled' : '' }}
                                    required>
                            </div>

                            <div class="form-group">
                                <label for="inputnotes" class="col-form-label">Notes <span
                                        class="text-muted font-weight-light">(optional)</span></label>
                                <textarea class="form-control" id="inputnotes" name="note">{{ $role->note }}</textarea>
                            </div>
                            <div class="form-group">

                                <label class="col-form-label">Permissions</label>



                                @if ($role->name != 'super_admin')

                                    <div class="ml-auto p-4">
                                        <div class="mb-2 checkbox checkbox-primary">
                                            <input type="checkbox" id="{{ $permission_collections }}-selectall"
                                                onchange="toggleSelectAll(event, JSON.stringify('{{ $permission_collections }}') )">
                                            <label for="{{ $permission_collections }}-selectall">select
                                                all</label>
                                        </div>
                                    </div>

                                @endif
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($permission_collections as $collection)
                                            <tr>
                                                <td>
                                                    <span
                                                        class="font-weight-bold mr-4 col-md-2 text-primary">{{ $collection->label }}</span>

                                                </td>
                                                <td>
                                                    @foreach ($collection->permissions as $p)
                                                        <div class="mx-1">

                                                            <div class="mx-1">
                                                                <div class="mb-2 checkbox checkbox-primary">
                                                                    <input
                                                                        {{ $role->name == 'super_admin' ? 'disabled' : '' }}
                                                                        id="p-{{ $p->id }}" type="checkbox"
                                                                        {{ $role->hasPermission($p->name) ? 'checked' : '' }}
                                                                        value="{{ $p->id }}" name="permissions[]">
                                                                    <label
                                                                        for="p-{{ $p->id }}">{{ $p->name }}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    @endforeach
                                                </td>

                                                <td>
                                                    @if ($role->name != 'super_admin')
                                                        <div class="ml-1">
                                                            <div class="mb-2 checkbox checkbox-primary">
                                                                <input id="{{ $collection->id }}-selectall"
                                                                    type="checkbox" name="permissions[]"
                                                                    onchange="toggleSelectCollection( JSON.stringify('{{ $collection }}') )">
                                                                <label for="{{ $collection->id }}-selectall">select
                                                                    all</label>
                                                            </div>
                                                        </div>
                                                    @endif

                                                </td>


                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>


                            </div>

                            <center><button type="submit" class="btn btn-success waves-effect waves-light">Update</button>
                            </center>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->



    </div> <!-- container -->
@endsection


@section('script')
    <!-- Plugins js-->
    <script src="{{ asset('assets/libs/selectize/selectize.min.js') }}"></script>
    <script src="{{ asset('assets/libs/mohithg-switchery/mohithg-switchery.min.js') }}"></script>
    <script src="{{ asset('assets/libs/select2/select2.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap-select/bootstrap-select.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js') }}"></script>
    <script src="{{ asset('assets/libs/devbridge-autocomplete/devbridge-autocomplete.min.js') }}"></script>
    <script src="{{ asset('assets/libs/jquery-mockjax/jquery-mockjax.min.js') }}"></script>

    <!-- Page js-->
    <script src="{{ asset('assets/js/pages/form-advanced.init.js') }}"></script>
    <script>
        const toggleSelectCollection = (collection) => {
            const collection_json = JSON.parse(JSON.parse(collection))
            collection_json.permissions.forEach(p => {
                const permission_ckeckbox = $('#p-' + p.id)
                permission_ckeckbox.attr('checked', !permission_ckeckbox.attr("checked"))
            });
        }
        const toggleSelectAll = (event, collections) => {
            const collections_json = JSON.parse(JSON.parse(collections))
            collections_json.forEach(c => {
                c.permissions.forEach(p => {
                    const permission_ckeckbox = $('#p-' + p.id)
                    permission_ckeckbox.attr('checked', !permission_ckeckbox.attr("checked"))
                });

            })
        }

    </script>
@endsection
