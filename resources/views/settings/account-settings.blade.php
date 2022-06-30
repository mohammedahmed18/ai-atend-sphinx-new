<form action="{{ route('updateAccountSettings') }}" method="POST"
    class="p-3 my-4 border position-relative needs-validation" novalidate>
    @csrf
    @method('PUT')
    <button type="button" onclick="enableEditing()"
        class="border-0 outline-0 btn btn-outline-secondary waves-effect waves-light"><i class="fa fa-pen"></i></button>
    <div class="form-group">
        <label for="c_name_en" class="col-form-label">name</label>
        <input type="text" name="name_en" class="form-control" id="c_name_en" value="{{ $user->name_en }}" disabled
            required>
    </div>

    <div class="form-group">
        <label for="c_name_ar" class="col-form-label">name</label>
        <input type="text" name="name_ar" class="form-control" id="c_name_ar" value="{{ $user->name_ar }}" disabled
            required>
    </div>

    <div class="form-group">
        <label for="c_address" class="col-form-label">Address</label>
        <input type="text" name="address" class="form-control" id="c_address" value="{{ $user->address }}" disabled>
    </div>



    <div class="form-group">
        <label for="c_email" class="col-form-label">Email</label>
        <input type="email" name="email" class="form-control" id="c_email" value="{{ $user->email }}" disabled
            required>
    </div>

    <div class="form-group">
        <label for="c_tel_1" class="col-form-label">phone 1</label>
        <input type="text" name="Tel_1" class="form-control" id="c_tel_1" value="{{ $user->Tel_1 }}" disabled
            required>
    </div>

    <div class="form-group">
        <label for="c_tel_2" class="col-form-label">Phone 2</label>
        <input type="text" name="Tel_2" class="form-control" id="c_tel_2" value="{{ $user->Tel_2 }}" disabled>
    </div>

    <div class="form-group">
        <label for="c_tel_3" class="col-form-label">Phone 3</label>
        <input type="text" name="Tel_3" class="form-control" id="c_tel_3" value="{{ $user->Tel_3 }}" disabled>
    </div>


    <button type="submit" class="my-2 btn btn-primary waves-effect d-none" id="edit-info-btn">save</button>
</form>


<button type="button" class="btn btn-primary ml-3 mb-4" data-toggle="modal" data-target="#changePasswordModal">
    Change password
</button>


<!-- Modal -->
<div class="modal fade" id="changePasswordModal" tabindex="-1" role="dialog" aria-labelledby="changePasswordModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="changePasswordModalLabel">change password</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{ route('change_auth_user_password') }}" method="POST">
                    @csrf
                    @method('patch')
                    <div class="form-group">
                        <label for="i_password" class="col-form-label">old password</label>
                        <input type="password" name="old_password" class="form-control" id="i_password" required>
                    </div>


                    <div class="form-group">
                        <label for="i_new_password" class="col-form-label">new password</label>
                        <input type="password" name="new_password" class="form-control" id="i_new_password" required>
                    </div>

                    <div class="form-group">
                        <label for="i_c_new_password" class="col-form-label">confirm new password</label>
                        <input type="password" name="confirm_new_password" class="form-control" id="i_c_new_password"
                            required>
                    </div>

                    <button type="submit" class="btn btn-success">change password</button>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
