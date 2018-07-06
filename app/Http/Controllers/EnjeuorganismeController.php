<?php

  namespace App\Http\Controllers;

  use App\Enjeuorganisme;
  use Illuminate\Http\Request;
  use DB;

  class EnjeuorganismeController extends Controller{

    public function showAllEnjeuorganismes(){

        return response()->json(Enjeuorganisme::all());
    }

    public function showOneEnjeuorganisme($id)
    {
        return response()->json(Enjeuorganisme::find($id));
    }

    public function create(Request $request)
    {
        $enjeuorganisme = Enjeuorganisme::create($request->all());

        return response()->json($enjeuorganisme, 201);
    }

    public function update($id, Request $request)
    {
        $enjeuorganisme = Enjeuorganisme::findOrFail($id);
        $enjeuorganisme->update($request->all());

        return response()->json($enjeuorganisme, 200);
    }

    public function delete($id)
    {
        Enjeuorganisme::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showEnjeuByOrganisme($id){
      $data = Enjeuorganisme::showEnjeuByOrganismeCall($id);

      return response()->json($data);
    }

  }//End EnjeuorganismeController class {}

 ?>
