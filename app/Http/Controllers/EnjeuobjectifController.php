<?php

  namespace App\Http\Controllers;

  use App\Enjeuobjectif;
  use Illuminate\Http\Request;
  use DB;

  class EnjeuobjectifController extends Controller{

    public function showAllEnjeuobjectifs(){

        return response()->json(Enjeuobjectif::all());
    }

    public function showOneEnjeuobjectif($id){

        return response()->json(Enjeuobjectif::find($id));
    }

    public function create(Request $request){

        $enjeuobjectif = Enjeuobjectif::create($request->all());

        return response()->json($enjeuobjectif, 201);
    }

    public function update($id, Request $request){

        $enjeuobjectif = Enjeuobjectif::findOrFail($id);
        $enjeuobjectif->update($request->all());

        return response()->json($enjeuobjectif, 200);
    }

    public function delete($id){

        Enjeuobjectif::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showEnjeuByObjectif($id){

      $data = Enjeuobjectif::showEnjeuByObjectifCall($id);

      return response()->json($data);

    }

    public function showObjectifByEnjeu($id){

      $data = Enjeuobjectif::showObjectifByEnjeuCall($id);

      return response()->json($data);
    }

  }//End EnjeuobjectifController class {}

 ?>
