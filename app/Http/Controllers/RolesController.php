<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Permission;
use App\PermissionCollection;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RolesController extends Controller
{


    public function __construct()
    {
        $this->middleware('permission:roles_permissions_add', ['only' => ['create', 'store']]);
        $this->middleware('permission:roles_permissions_view', ['only' => ['index']]);
        $this->middleware('permission:roles_permissions_update', ['only' => ['edit', 'update']]);
    }


    public function index()
    {
        $roles = Role::all();
        $permissions = Permission::all();
        return view('roles.index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $permission_collections = PermissionCollection::orderBy('label')->with('permissions')->get();
        return view('roles.add', compact('permission_collections'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make(
                $request->all(),
                [
                    'name' => 'required|unique:roles',
                    "permissions" => "required",
                ],
                [
                    'name.required' => "يجب ادخال اسم الدور",
                    "permissions.required" => 'يجب اختيار على الاقل تصريح واحد'
                ]
            );
            if ($validator->fails()) {
                $err_msg = $validator->errors()->first();
                return back()->with('error', $err_msg)->withInput();
            }


            $data = $request->only('name', 'note');
            $role = Role::create($data);

            // assign permissions to the role
            $permissions = $request->permissions;
            $role->attachPermissions($permissions);
            return redirect()->route('roles.index')->with('success', 'تم الحفظ بنجاح');
        } catch (\Exception $exp) {
            return back()->with('error', 'هناك خطأ برجاء المحاولة ثانيا');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $role = Role::FindOrFail($id);
        $permission_collections = PermissionCollection::orderBy('label')->with('permissions')->get();
        return view('roles.edit', compact('role', 'permission_collections'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $role = Role::findOrFail($id);
            if ($role->name == 'super_admin') {
                $role->update(['note' => $request->note]);
                return redirect()->route('roles.index')->with(['success' => 'تم تحديث المستخدم بنجاح']);
            }
            
            $validator = Validator::make(
                $request->all(),
                [
                    'name' => 'required|unique:roles,name,' . $role->id,
                    "permissions" => "required",
                ],
                [
                    'name.required' => "يجب ادخال اسم الدور",
                    "permissions.required" => 'يجب اختيار على الاقل تصريح واحد'
                ]
            );

            if ($validator->fails()) {
                $err_msg = $validator->errors()->first();
                return back()->with('error', $err_msg)->withInput();
            }

            //update in db
            $role->update($request->except('permissions'));
            if (!$role->name == 'super_admin') {
                $role->syncPermissions($request->permissions);
            }
            return redirect()->route('roles.index')->with(['success' => 'تم تحديث المستخدم بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('roles.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $role = Role::findOrFail($id);
            if ($role->users->count() != 0) {
                return back()->with('error', 'لا يمكن مسح هذا الدور لان هناك موظفين عليه');
            }

            $role->permissions()->sync([]); // Delete relationship data
            $role->delete();

            return redirect()->route('roles.index')->with(['success' => 'تم حذف الدور بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('roles.index')->with(['error' => 'هناك خطأ برجاء المحاولة ثانيا']);
        }
    }

    public function permessions_data()
    {
        $permissions_data = [];

        $permissions = Permission::orderBy('name', 'desc')->get();

        $current_name = null;
        $collection = [];

        $numItems = count($permissions);
        $i = 0;
        foreach ($permissions as $p) {
            if (!$current_name) {
                // first loob
                array_push($collection, $p);
            } elseif (substr($p->name, 0, 4) == $current_name) {
                array_push($collection, $p);
            } elseif (substr($p->name, 0, 4) != $current_name) {
                array_push($permissions_data, $collection);
                $collection = [];
                array_push($collection, $p);
            }
            if (++$i === $numItems) {
                array_push($permissions_data, $collection);
            }

            $current_name = substr($p->name, 0, 4);
        }
        return $permissions_data;
    }
}
