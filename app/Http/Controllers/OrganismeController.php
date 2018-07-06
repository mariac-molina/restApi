<?php

  namespace App\Http\Controllers;

  use App\Organisme;
  use Illuminate\Http\Request;

  class OrganismeController extends Controller{

    public function showAllOrganismes(){

        return response()->json(Organisme::all());
    }

    public function showOneOrganisme($id)
    {
        return response()->json(Organisme::find($id));
    }

    public function create(Request $request)
    {
        $organisme = Organisme::create($request->all());

        return response()->json($organisme, 201);
    }

    public function update($id, Request $request)
    {
        $organisme = Organisme::findOrFail($id);
        $organisme->update($request->all());

        return response()->json($organisme, 200);
    }

    public function delete($id)
    {
        Organisme::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function showObjectifByOrganisme($id){
      $data = Organisme::showObjectifByOrganismeCall($id);

      return response()->json($data);
    }

    public function showFonctionnaliteByOrganisme($id){
      $data = Organisme::showFonctionnaliteByOrganismeCall($id);

      return response()->json($data);
    }

    public function showLevierByOrganisme($id){
      $data = Organisme::showLevierByOrganismeCall($id);

      return response()->json($data);
    }

    public function showOrganismeId($libelle){
      $data = Organisme::showOrganismeIdCall($libelle);

      return response()->json($data);
    }

    public function showEnjeuByOrgaLib($libelle){
      $data = Organisme::showEnjeuByOrgLibCall($libelle);

      return response()->json($data);
    }

  }//End OrganismeController class {}

 ?>
