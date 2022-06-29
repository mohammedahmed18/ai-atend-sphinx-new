<?php

namespace App\Imports;

use App\Employee;
use Maatwebsite\Excel\Concerns\ToModel;

class EmployeeImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
            return new Employee([
                'name' => $row[0],
                'email' => $row[1],
                'address' => $row[2],
                'phone' => $row[3],
                'password' => $row[4],
                'gender' => $row[5],
                'age' => $row[6],
            ]);
    }
}
