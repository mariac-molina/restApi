<?php

  namespace App\Http\Controllers;

  use App\Levier;
  use Illuminate\Http\Request;
  use DB;

  class LevierController extends Controller{

    public function showAllLeviers(){

        return response()->json(Levier::all());
    }

    public function showOneLevier($id)
    {
        return response()->json(Levier::find($id));
    }

    public function create(Request $request)
    {
        $levier = Levier::create($request->all());

        return response()->json($levier, 201);
    }

    public function update($id, Request $request)
    {
        $levier = Levier::findOrFail($id);
        $levier->update($request->all());

        return response()->json($levier, 200);
    }

    public function delete($id)
    {
        Levier::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showFonctionnaliteByLevier($id){
      $data = Levier::showFonctionnaliteByLevierCall($id);

      return response()->json($data);
    }

    public function showEnjeuByLevier($id){
      $data = Levier::showEnjeuByLevierCall($id);

      return response()->json($data);
    }

    public function showLevierId($libelle){
      $data = Levier::showLevierIdCall($libelle);

      return response()->json($data);
    }

  }//End LevierController class {}

 ?>
