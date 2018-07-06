<?php

  namespace App\Http\Controllers;

  use App\Enjeu;
  use Illuminate\Http\Request;
  use DB;

  class EnjeuController extends Controller{

    public function showAllEnjeus(){

        return response()->json(Enjeu::all());
    }

    public function showOneEnjeu($id)
    {
        return response()->json(Enjeu::find($id));
    }

    public function create(Request $request)
    {
        $enjeu = Enjeu::create($request->all());

        return response()->json($enjeu, 201);
    }

    public function update($id, Request $request)
    {
        $enjeu = Enjeu::findOrFail($id);
        $enjeu->update($request->all());

        return response()->json($enjeu, 200);
    }

    public function delete($id)
    {
        Enjeu::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showFonctionnaliteByEnjeu($id){
      $data = Enjeu::showFonctionnaliteByEnjeuCall($id);

      return response()->json($data);
    }

    public function showLevierByEnjeu($id){
      $data = Enjeu::showLevierByEnjeuCall($id);

      return response()->json($data);
    }

    public function showEnjeuId($libelle){
      $data = Enjeu::showEnjeuIdCall($libelle);

      return response()->json($data);
    }

  }//End EnjeuController class {}

 ?>
