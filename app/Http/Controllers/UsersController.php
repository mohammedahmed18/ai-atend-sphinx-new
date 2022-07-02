<?php

namespace App\Http\Controllers;

use App\Permission;
use Illuminate\Http\Request;
use App\User;
use App\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
 


    
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:users_add', ['only' => ['create', 'store']]);
        $this->middleware('permission:users_view', ['only' => ['index']]);
        $this->middleware('permission:users_edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:users_delete', ['only' => ['destroy']]);

        
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
      
        $users = User::all();
        return view('users/index', compact('users'));
    }

    public function create()
    {
        $roles = Role::all();
        return view('users.add' , compact('roles'));
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name_en' => 'required|unique:users',
                "name_ar" => 'required|unique:users',
                "email" => 'required|unique:users',
                'Tel_1' => 'required',
                'password' => 'required',
                'role_id' => 'required',
            ]
        );
        if ($validator->fails()) {
            $err_msg = $validator->errors()->first();
            return back()->with('error', $err_msg)->withInput();
        }


        $data = $request->except('role_id');
        $user = User::create($data);
        // attach user role
        $user->attachRole($request->role_id);
        $role = Role::find($request->role_id);
        $user->attachPermissions($role->permissions);
        return redirect()->route('users.index')->with(['success' => 'تم الحفظ بنجاح']);
    }

    public function edit(Request $resuest, $id)
    {
        $user = User::FindOrFail($id);

        $roles = Role::all();

        return view('users.edit', compact('user' , 'roles'));
    }

    public function update(Request $request, $id){
        try{    
            $user = User::findOrFail($id);

            $validator = Validator::make(
                $request->all(),
                [
                    'name_en' => 'required|unique:users,name_en,'.$user->id,
                    "name_ar" => 'required|unique:users,name_ar,'.$user->id,
                    "email" => 'required|unique:users,email,'.$user->id,
                    'Tel_1' => 'required',
                    'password' => 'required',
                    'role_id' => 'required',
                ]
            );
            if ($validator->fails()) {
                $err_msg = $validator->errors()->first();
                return back()->with('error', $err_msg)->withInput();
            }

           //update in db
            $user->update($request->all());

            // sync roles
            $user->syncRoles([$request->role_id]);

            return redirect()->route('users.index')->with(['success' => 'تم تحديث المستخدم بنجاح']);

        }catch(\Exception $ex){
            return redirect()->route('users.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);

        }
       
    }

    public function destroy($id){
       
        // try{
        //     $user = User::find($id);

        //     if(Auth::id() == $user->id){
        //         return back()->with('error' , "لا يمكن ان تمسح حسابك");
        //     }
        //     $user->syncRoles([]); //delete relations in user_role table

        //     //delete in db

        //     // $user->delete();
        //     DB::table('users')->delete($user->id);

        //     return redirect()->route('users.index')->with(['success' => 'تم حذف الموظف بنجاح']);

        // }catch(\Exception $ex){
        //     return redirect()->route('users.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);

        // }
       
    }
}
