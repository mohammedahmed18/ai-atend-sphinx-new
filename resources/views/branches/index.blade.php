@extends('layouts.vertical', ['title' => 'Datatables'])



@section('content')
<div class="container-fluid">


    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <h4 class="page-title">Branches</h4>
            </div>
        </div>
    </div>   

    <a href="/dashboard/branches?type=table" class="btn btn-lg btn-info my-2">Show as a table</a>
    @if(session()->has('message'))
    {{dd('vbnm')}}
        <div class="alert alert-success">
            {{ session()->get('message') }}
        </div>
    @endif

        @php
            echo '<ul  class="sitemap" style="font-size: 17px"><li><i class="mdi mdi-adjust mr-1"></i> branches';
            
            $nodes = $branches;
            
            $traverse = function ($branches, $prefix = '<li>', $suffix = '</li>') use (&$traverse) {
                foreach ($branches as $branch) {
                    echo $prefix .
                        '
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building mx-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                        </svg>' .
                        $branch->name 
                        // start buttons

                        .
                        '<button onclick="showAddForm('.$branch->id.')" class="btn btn-xs ml-2 my-1 btn-primary waves-effect">
                        <i class="fa fa-plus"></i>
                        </button>' 
                        .
                        '<a href="/dashboard/branches/'.$branch->id.'/edit"' .' role="button" class="btn d-inline-block text-white btn-info btn-xs mx-1 my-1 waves-effect">
                            <i class="fa fa-pen"></i>
                        </a>' 
                        .

                        '
                        <form action="/dashboard/branches/'.$branch->id.'" class="d-inline-block" method="post">
                            '.
                            '<input hidden name="_token" value="'.csrf_token().'"/>'
                            .'

                            '.
                            method_field("DELETE")
                            .'

                            <button class="action-icon delete btn btn-danger text-white waves-effect" type="submit"> <i class="mdi mdi-delete"></i></button>
                        </form>
                        
                        '
                        .
                        // end buttons
                        $suffix;

                    $hasChildren = count($branch->children) > 0;
            
                    if ($hasChildren) {
                        echo '<ul class="">';
                    }
            
                    $traverse($branch->children);
            
                    if ($hasChildren) {
                        echo '</ul>';
                    }
                }
            };
            
            $traverse($nodes);
            echo '</li></ul>';
        @endphp
        <button onclick="showAddFormRoot(event)" class="btn btn-info">Add to root</button>

    <div class="modal fade" id="branch-modal" tabindex="-1" role="dialog" aria-labelledby="branch-modalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="branch-modalLabel">Add a new branch</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="{{ route('branches.store') }}" method="POST">
                        @csrf
                        <input id="parent_id" name="parent_id" hidden />

                        <div class="pl-lg-4">
                            <div class="row">
                                <div class="form-group col-lg-6">
                                    <label class="form-control-label" for="input-name">{{ __('Name') }}</label>
                                    <input type="text" name="name" id="input-name"
                                        class="form-control form-control-alternative" required />
                                </div>

                                <div class="form-group col-lg-6">
                                    <label class="form-control-label" for="input-name">{{ __('Phone number') }}</label>
                                    <input type="tel" name="phone" id="input-name"
                                        class="form-control form-control-alternative" required />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-control-label" for="input-name">{{ __('Address') }}</label>
                                <input type="tel" name="address" id="input-name"
                                    class="form-control form-control-alternative" required />
                            </div>


                            <div class="form-group mt-2">
                                <label class="form-control-label" for="input-name">{{ __('Notes') }} <span
                                        class="text-muted">(optional)</span></label>
                                <input type="tel" name="notes" id="input-name"
                                    class="form-control form-control-alternative" />
                            </div>
                

                            <div class="d-flex justify-content-between">
                                <button type=" submit" class="btn btn-success mt-4">{{ __('insert') }}</button>

                                <button class="btn btn-light mt-4" data-dismiss="modal">{{ __('cancel') }}</button>
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    </div>
    <p class="font-weight-bold text-danger my-2">Important : Deleting a branch will also delete its children , be aware of that</p>

</div>
@endsection

@section('script')
    <script>
        const showAddForm = (branch_id) => {
            // var branch_id = $(event.target).data().branch_id;
            if(!branch_id) return alert("برجاء النتظار قليلا");
            $('#parent_id').val(branch_id)
            $('#branch-modal').modal('show');
        }

        const showAddFormRoot = (event) => {
            var branch_id = $(event.target).data().branch_id;
            $('#parent_id').val('')
            $('#branch-modal').modal('show');

        }

    </script>
@endsection
