<?php

  namespace App\Http\Controllers;

  use App\Objectiflevier;
  use Illuminate\Http\Request;
  use DB;

  class ObjectiflevierController extends Controller{

    public function showAllObjectifleviers(){

        return response()->json(Objectiflevier::all());
    }

    public function showOneObjectiflevier($id)
    {
        return response()->json(Objectiflevier::find($id));
    }

    public function create(Request $request)
    {
        $objectiflevier = Objectiflevier::create($request->all());

        return response()->json($objectiflevier, 201);
    }

    public function update($id, Request $request)
    {
        $objectiflevier = Objectiflevier::findOrFail($id);
        $objectiflevier->update($request->all());

        return response()->json($objectiflevier, 200);
    }

    public function delete($id)
    {
        Objectiflevier::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showLevierByObjectif($id){
      $data = Objectiflevier::showLevierByObjectifCall($id);

      return response()->json($data);
    }


    public function showObjectifByLevier($id){
      $data = Objectiflevier::showObjectifByLevierCall($id);

      return response()->json($data);
    }

  }//End ObjectiflevierController class {}

 ?>
